import React from "react";
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return(
            <footer className="place fixed-bottom">
                <div className="border border-dark">
                    <div className="d-grid gap-2 d-md-flex justify-content-center">
                        <button className="btn btn-primary me-md-2 circle" type="button">+</button>
                    </div>
                </div>
            </footer>

        
    )}
}