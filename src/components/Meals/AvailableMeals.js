import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Rocket Dosa",
//     description: "Crunchy XL dosa",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Kushbu Idli",
//     description: "Soft spongy traditional",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Thandoori chicken",
//     description: "Tasty spicy indian",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Salad",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {


 let [DUMMY_MEALS, setDummy_Meals] = useState([])
 const [isLoading , setIsLoading] = useState(true)
 const [httpError, setHttpError] = useState(null)

  useEffect(()=>{
        async function fetchMeals(){
           
          let DUMMY_MEALS = []
          let response =await fetch('https://react-http-18f60-default-rtdb.firebaseio.com/meals.json');

          if(!response.ok){
            
            throw new Error('something went wrong')
          }

          let meals = await response.json()
          
          for(let key in meals){
              DUMMY_MEALS.push({id:key , name:meals[key]['name'], description:meals[key]['description'], price:meals[key]['price']})
          }
       
          setDummy_Meals(DUMMY_MEALS)
          setIsLoading(false)
         }
      
        fetchMeals().catch(error=>{
          setHttpError(error.message);
          setIsLoading(false)
        })
      
  },[])

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

  let content = ''

  if(httpError){
    content = <p className={classes.Error}>{httpError}</p>
  }

  else if(isLoading){
    content = <p className={classes.Loading}>Loading....</p>
  }

  else{
    content = <Card><ul>{mealList}</ul></Card>
  }




  return (  
  <section className={classes.meals}>
     {content}
    </section>
  
  );
};

export default AvailableMeals;
