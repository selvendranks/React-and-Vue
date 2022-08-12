import './ExpenseDate.css'

function ExpenseDate(date) {

    const month = date.date.toLocaleString('en-US', { month: 'long' })
    const day = date.date.toLocaleString('en-US', { day: '2-digit' })
    const year = date.date.getFullYear();


    return (
        <div className="expense-date">
            <div  className="expense-date_month">{month}</div>
            <div className="expense-date_year">{day}</div>
            <div className="expense-date_day">{year}</div>
        </div>
    )
}


export default ExpenseDate;