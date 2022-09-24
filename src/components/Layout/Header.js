import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return <>
   <header className={classes.header}>
    <h1>ReactMeals</h1>
    <HeaderCartButton></HeaderCartButton>
  </header>
   <div className={classes['main-image']}>
    <img src={mealsImage} alt='A table full of delicious food'></img>
   </div>
  </>;
};

export default Header