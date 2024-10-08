import Modal from "react-modal";
import css from "./ModalWrapper.module.css";
import clsx from "clsx";
import { useEffect } from "react";

Modal.setAppElement(document.getElementById("root"));


const ModalWrapper = ({ modalIsOpen, closeModal, customStyles={}, buttonClassLogout=false, children }) => {
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add(css["no-scroll"]);
    } else {
      document.body.classList.remove(css["no-scroll"]);
    }
    return () => {
      document.body.classList.remove(css["no-scroll"]);
    };
  }, [modalIsOpen]);


  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      style={customStyles}
      className={css.modal}
      overlayClassName={css.backdrop}

    >
      {children}


      <button className={clsx(css["close-button"],buttonClassLogout && css["button-class-logout"])} onClick={closeModal}>
        <svg
          className={css["close-icon"]}
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="none"
            stroke="#407bff"
            strokeWidth="2"
            d="M8 24l16-16M8 8l16 16"
          />
        </svg>
      </button>
    </Modal>
  );
};

export default ModalWrapper;
