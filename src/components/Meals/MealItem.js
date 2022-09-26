import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <div className={classes.meal}>
      <h3>{props.meal.name}</h3>
      <p className={classes.description}>{props.meal.description}</p>
      <p className={classes.price}>{props.meal.price}</p>
    </div>
  );
};

export default MealItem;
