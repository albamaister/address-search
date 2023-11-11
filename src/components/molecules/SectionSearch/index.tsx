import Input from "../../atoms/Input";
import Place from "../../atoms/Place";
import Modal from "../../organisms/Modal";
import { SearchSectionContainer } from "./styles";
import useAddressAutocomplete from "../../../hooks/useAddressAutocomplete";
import { IPlace } from "../../../interfaces/place";
import useSectionSearch from "./useSectionSearch/useSectionSearch";

const SectionSearch = () => {
  
  const { address, suggestions, handleInputChange } = useAddressAutocomplete();
  const { showModal, onCLickPlace, isZipValid, closeModal } = useSectionSearch()

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
