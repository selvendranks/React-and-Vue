import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props)=>{

      return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={props.newData}></ExpenseForm>
        </div>
      )
}

export default NewExpense