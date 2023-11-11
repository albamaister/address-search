import Input from "../../atoms/Input";
import Place from "../../atoms/Place";
import Modal from "../../organisms/Modal";
import { SearchSectionContainer } from "./styles";
import { useState } from "react";
import useAddressAutocomplete from "../../../hooks/useAddressAutocomplete";
import { IPlace } from "../../../interfaces/place";
import { validZipcodes } from "../../../utils/utils";

const SectionSearch = () => {
  const [showModal, setShowModal] = useState(false);

  const [isZipValid, setIsZipValid] = useState(false);

  const { address, suggestions, handleInputChange } = useAddressAutocomplete();

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

  return (
    <SearchSectionContainer>
      <Input value={address} handleInputChange={handleInputChange} />
      {suggestions.map((suggestion: IPlace) => (
        <Place
          data-testid="place"
          key={suggestion.id}
          suggestion={suggestion}
          onClickPlace={onCLickPlace}
        />
      ))}
      {showModal && <Modal isZipValid={isZipValid} closeModal={closeModal} />}
    </SearchSectionContainer>
  );
};

export default SectionSearch;
