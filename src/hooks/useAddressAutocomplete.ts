import React, { useState, useEffect } from "react";
import { IPlace } from "../interfaces/place";
import { URL_GOOGLE } from "../utils/utils";

declare global {
  interface Window {
    google: any;
  }
}

const useAddressAutocomplete = () => {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState<IPlace[]>([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = URL_GOOGLE;

    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (address.length > 0) {
      const service = new window.google.maps.places.AutocompleteService();
      service.getPlacePredictions(
        { input: address },
        (predictions: any, status: any) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            predictions
          ) {
            const suggestedAddressesWithPlaceId = predictions
              .slice(0, 3)
              .map((prediction: any) => ({
                description: prediction.description,
                placeId: prediction.place_id,
              }));

            const promises = suggestedAddressesWithPlaceId.map(
              ({ placeId, description }: any) =>
                new Promise((resolve) => {
                  const detailsService =
                    new window.google.maps.places.PlacesService(
                      document.createElement("div")
                    );
                  detailsService.getDetails(
                    { placeId },
                    (placeDetails: any, status: any) => {
                      if (
                        status ===
                          window.google.maps.places.PlacesServiceStatus.OK &&
                        placeDetails
                      ) {
                        const zipCode = placeDetails.address_components.find(
                          (component: any) =>
                            component.types.includes("postal_code")
                        );

                        resolve({
                          description,
                          zipCode: zipCode ? zipCode.long_name : null,
                        });
                      } else {
                        resolve({ description, zipCode: null });
                      }
                    }
                  );
                })
            );

            Promise.all(promises).then((results: IPlace[]) => {
              setSuggestions(results);
            });
          }
        }
      );
    } else {
      setSuggestions([]);
    }
  }, [address]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAddress(value);
  };

  return { address, suggestions, handleInputChange };
};

export default useAddressAutocomplete;
