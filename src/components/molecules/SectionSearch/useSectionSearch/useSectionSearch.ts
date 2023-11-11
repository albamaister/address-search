import { IPlace } from "../../../../interfaces/place";
import { validZipcodes } from "../../../../utils/utils";
import { useState } from "react";

const useSectionSearch = () => {
  const [showModal, setShowModal] = useState(false);

  const [isZipValid, setIsZipValid] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const onCLickPlace = (suggestion: IPlace) => {
    validacionZip(suggestion.zipCode);
  };

  const validacionZip = (zip: string) => {
    if (!validZipcodes.includes(zip)) {
      setIsZipValid(false);
      setShowModal(true);
      return;
    }
    setIsZipValid(true);
    setShowModal(true);
  };

  return {
    showModal,
    isZipValid,
    closeModal,
    onCLickPlace,
  };
};

export default useSectionSearch;
