import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import './currencytypeselector.css'


const CurrencyType = () => {
    const {dispatch} = useContext(AppContext);
    const getCurrency = (event) => {
        let Cr = event.target.value;

        dispatch({
            type: "CHG_CURRENCY",
            payload: Cr,
        })

        console.log(event.target.value);
    }

    return(
        <div className="alert alert-success">
            <span id="in-general">
                <select id="currencytype" onChange={getCurrency}>
                    <option className="op" disabled selected>Currency (£ Pound)</option>
                    <option className="op" value="$" name="D$">$ Dollar</option>
                    <option className="op" value="£" name="P£">£ Pound</option>
                    <option className="op" value="€" name="E€">€ Euro</option>
                    <option className="op" value="₹"name="R₹">₹ Rupee</option>
                </select>   
            </span>
        </div>
    );
}

export default CurrencyType;