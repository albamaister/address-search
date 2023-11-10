import Input from "../../atoms/Input";
import Place from "../../atoms/Place";
import { SearchSectionContainer } from "./styles";

const SectionSearch = () => {
  return (
    <SearchSectionContainer>
      <Input />
      <Place />
      <Place />
      <Place />
    </SearchSectionContainer>
  );
};

export default SectionSearch;
