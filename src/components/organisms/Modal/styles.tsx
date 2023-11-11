import styled from "styled-components";

export const ModalWrapper = styled.div`
  .modal__background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000aa;
    z-index: 100;
  }

  .modal__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 200;
    padding: 2rem;
    min-width: 150px;
    box-shadow: 5px 5px 20px #a59f9f;
  }

  .modal__bar {
    display: flex;
    justify-content: end;

    button {
      background: none;
      border: none;
      cursor: pointer;
      font-weight: 600;
      font-size: 16px;
      color: #505050;
    }
  }

  .modal__info {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .modal__info--subtitle {
    font-size: 20px;
    line-height: 20px;
    margin-top: 16px;
  }

  .modal__info--secsubtitle {
    font-size: 20px;
    line-height: 20px;
    margin-top: 16px;
    font-weight: 300;
    margin-top: 24px;
  }

  .modal__info--endsubtitle {
    font-size: 20px;
    line-height: 20px;
    margin-top: 16px;
    font-weight: 300;
    margin-top: 24px;
  }

  .modal__info--button {
    margin-top: 150px;
  }
`;
