import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  function closeModal(){
    props.CartVisibility(false)
  }
  return <div className={classes.backdrop} onClick={closeModal}></div>;
};

const ModalOverlay = (props) => {
  


  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop CartVisibility={props.CartVisibility}></Backdrop>,
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay >{props.children}</ModalOverlay>,
        document.querySelector("#overlay-root")
      )}
    </>
  );
};

export default Modal;
