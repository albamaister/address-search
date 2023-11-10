import { FC } from "react";
import Button from "../../atoms/Button";
import { ModalWrapper } from "./styles";

interface IModal {
  closeModal: () => void
}

const Modal: FC<IModal> = ({closeModal}) => {
  return (
    <ModalWrapper>
      <div className="modal__background"></div>
      <div className="modal__content">
        <div className="modal__bar">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="modal__info">
          <h1>Address updated</h1>
          <div className="modal__info--subtitle">
            New address added to your account
          </div>

          <div className="modal__info--secsubtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            neque laboriosam sequi possimus temporibus ullam? Eius soluta
            voluptatibus minima ea a, earum, ab illum quo, aspernatur deserunt
            sunt laboriosam quae.
          </div>
          <div className="modal__info--endsubtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="modal__info--button">

          <Button></Button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
