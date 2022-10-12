import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Rocket Dosa",
    description: "Crunchy XL dosa",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Kushbu Idli",
    description: "Soft spongy traditional",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Thandoori chicken",
    description: "Tasty spicy indian",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Salad",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      meal={meal}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price = {meal.price}
    ></MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
