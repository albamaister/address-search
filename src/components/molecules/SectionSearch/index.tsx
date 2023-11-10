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

  const [selectSuggestion, setSelectSuggestion] = useState<IPlace>({description: '', zipCode: ''})

  const { address, suggestions, handleInputChange } = useAddressAutocomplete();

  const closeModal = () => {
    setShowModal(false);
  };

  console.log(suggestions, 'suggestions')

  const onCLickPlace = (suggestion: IPlace) => {

    console.log(suggestion.zipCode, 'ziiiip');
    setSelectSuggestion(suggestion)

    // validacionZip()
    setShowModal(true);
  };

  const validacionZip = () => {

    console.log(selectSuggestion.zipCode, 'selectSuggestion.zipCode')
    if ( validZipcodes.includes(selectSuggestion.zipCode) ) {
      console.log('es valido');
    } else {
      console.log('NO es valido');

    }
  }


  return (
    <SearchSectionContainer>
      <Input value={address} handleInputChange={handleInputChange} />
      {suggestions.map((suggestion: IPlace, index) => (
        <Place key={index} suggestion={suggestion} onClickPlace={onCLickPlace} />
      ))}
      {showModal && <Modal closeModal={closeModal} />}
    </SearchSectionContainer>
  );
};

export default SectionSearch;
