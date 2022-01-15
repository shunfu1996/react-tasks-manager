import React from "react";
import './Footer.css';

export default class Footer extends React.Component {
    isDisplay() {
        const display = document.getElementById('card').style.display;
        if(display === 'block') {
            document.getElementById('card').style.display = 'none';
        } else {
            document.getElementById('card').style.display = 'block';
        }
    }
    render() {
        return(
            <footer className="place fixed-bottom">
                <div className="border border-dark">
                    <div className="d-grid gap-2 d-md-flex justify-content-center">
                        <button className="btn btn-primary me-md-2 circle" type="button" onClick={this.isDisplay}>+</button>
                    </div>
                </div>
            </footer>

        
    )}
}