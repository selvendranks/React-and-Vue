import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isPin = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formIsValid, setFormValid] = useState({
    name: true,
    street: true,
    pin: true,
    city: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = StreetInputRef.current.value;
    const enteredPin = PinInputRef.current.value;
    const enteredCity = CityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const StreetIsValid = !isEmpty(enteredStreet);
    const PinIsValid = isPin(enteredPin);
    const CityIsValid = !isEmpty(enteredCity);

    setFormValid({
      name: nameIsValid,
      street: StreetIsValid,
      pin: PinIsValid,
      city: CityIsValid,
    });

    if (!formIsValid) {
      return;
    }

    props.order({
      name: enteredName,
      street: enteredStreet,
      pin: enteredPin,
      city: enteredCity,
    });
  };

  const nameInputRef = useRef();
  const StreetInputRef = useRef();
  const PinInputRef = useRef();
  const CityInputRef = useRef();

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control}  ${
          formIsValid.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formIsValid.name && <p>Please enter a valid name</p>}
      </div>
      <div
        className={`${classes.control}  ${
          formIsValid.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={StreetInputRef} />
        {!formIsValid.street && <p>Please enter a valid street</p>}
      </div>
      <div
        className={`${classes.control}  ${
          formIsValid.pin ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={PinInputRef} />
        {!formIsValid.pin && <p>Please enter a valid PinCode</p>}
      </div>
      <div
        className={`${classes.control}  ${
          formIsValid.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={CityInputRef} />
        {!formIsValid.city && <p>Please enter a valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.cancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
