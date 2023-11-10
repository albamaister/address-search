import Input from "../../atoms/Input";
import Place from "../../atoms/Place";
import Modal from "../../organisms/Modal";
import { SearchSectionContainer } from "./styles";
import { useState } from "react";

const SectionSearch = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const onCLickPlace =() => {
    setShowModal(true);
  }
  return (
    <SearchSectionContainer>
      <Input />
      <Place onClickPlace={onCLickPlace}/>
      {showModal && <Modal closeModal={closeModal} />}
    </SearchSectionContainer>
  );
};

export default SectionSearch;
