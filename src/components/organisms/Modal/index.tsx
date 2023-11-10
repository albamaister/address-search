import { FC } from "react";
import Button from "../../atoms/Button";
import { ModalWrapper } from "./styles";

interface IModal {
  closeModal: () => void;
  isZipValid: boolean;
}

const Modal: FC<IModal> = ({ closeModal, isZipValid }) => {
  return (
    <ModalWrapper>
      <div className="modal__background"></div>
      <div className="modal__content">
        <div className="modal__bar">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="modal__info">
          <h1>{isZipValid ? "Address updated" : "Out of Delivery Area"}</h1>
          <div className="modal__info--subtitle">
            {isZipValid
              ? "New address added to your account"
              : '"Wherever I go, there I am"'}
          </div>

          <div className="modal__info--secsubtitle">
            {isZipValid
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque neque laboriosam sequi possimus temporibus ullam? Eius soluta voluptatibus minima ea a, earum, ab illum quo, aspernatur deserunt sunt laboriosam quae."
              : "Sadly, this quote is not true for us. In other words, we are not operating in your area (yet), but things change everithing."}
          </div>
          <div className="modal__info--endsubtitle">
            {isZipValid
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
              : "Sign up to our newsletter to get notified."}
          </div>
          <div className="modal__info--button">
            <Button onClick={closeModal}>UNDERSTOOD</Button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
