import SectionSearch from "../../molecules/SectionSearch";
import Titles from "../../molecules/Titles";
import { LocationSectionsWrapper } from "./styles";

const Location = () => {
  return (
    <LocationSectionsWrapper>
      <Titles />
      <SectionSearch />
    </LocationSectionsWrapper>
  );
};

export default Location;
