import Button from "./Button";
import ReactDOM from "react-dom";
import Card from "./Card";
import classes from "./ErrorModel.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.clearError}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>

      <footer className={classes.actions}>
        <Button onClick={props.clearError}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop clearError={props.clearError}></Backdrop>,
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          clearError={props.clearError}
        ></ModalOverlay>,
        document.querySelector('#overlay-root')
      )}
    </>
  );
};

export default ErrorModel;
