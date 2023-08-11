import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";
import "./bdgt.css"

const Budget = () =>{
    const { budget, currency } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const changebudget = (event) => {

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        let bnumber =  parseInt(event.target.value, 10)

        if(bnumber > 20000){
            alert("Budget cannot exceed 20,000")
            bnumber=0;
        }
        if(bnumber < totalExpenses){
            alert("Budget cannot be reduced to less than the current expenses")
            bnumber=0;
        }
    
        dispatch({
            type: "SET_BUDGET",
            payload: bnumber,
        })
    }
    return(
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input className= "BudgetInputter" type="number" value={budget} onChange={changebudget} /></span>
        </div>
    );
}
export default Budget;