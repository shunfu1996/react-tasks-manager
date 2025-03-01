import React from "react";
import Header from "../Header/Header";
import './Footer.css';

export default class Footer extends React.Component {
    isDisplay() { //handle the edit form is display by the "+" button
        let display = document.getElementById('card').style.display;
        if(display !== 'block') {
            document.getElementById('card').style.display = 'block';
            document.getElementById('add').innerHTML = "-";
            
            
        } else {
            document.getElementById('card').style.display = 'none';
            document.getElementById('add').innerHTML = "+";
        }
    }
    render() {
        return(
            <footer className="">
                <div className="addBox py-2 placeButtom">
                    <div className="d-grid gap-2 d-md-flex justify-content-center">
                        <button className="btn btn-outline-secondary me-md-2 circle material-icons" id="add" type="button" onClick={this.isDisplay}>+</button>
                    </div>
                </div>
            </footer>

        
    )}
}