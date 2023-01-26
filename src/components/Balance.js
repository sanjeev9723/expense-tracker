import React,{useContext} from "react";
import { AppContext } from "../App";
import "./Balance.css"

function Balance () {
    const {balance,income,expense} = useContext(AppContext)
    return(
        <div className="container">
            <div className="income">
               
                <h3> Income : Rs = {income}</h3>
            </div>
            <div className="bal-ex">
                <section className="balance">
            <h2 >Balance </h2>
            <h3>Rs : {balance}</h3>
            </section>
            <section className="expense">
                <h2>Expense</h2>
                <h3>Rs = {expense}</h3>
            </section>
            </div>
        </div>
    )
}

export default Balance;