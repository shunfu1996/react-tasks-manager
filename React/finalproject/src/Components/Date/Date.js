import React from "react";
import './Date.css';


        const Date = ({ id, name, description, assignedTo, dueDate, deleteTask}) =>{

 

            return(
                <div className="row midShape nopadding place">
                    <div className="col-1">
                        <div className="d-flex flex-column bd-highlight mb-3" id="checkbox">
                            <input className="form-check-input me-1 test" type="checkbox" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action" id="list-home-list" data-bs-toggle="list" href="#list-task1" role="tab" aria-controls="list-home">{name}</a>
                        </div>
                    </div>
                    <div className="col-6 rounded px-3 py-3 mb-1 backgroundColor">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade " id="list-task1" role="tabpanel" aria-labelledby="list-home-list">
                                <p value="">{assignedTo}</p>
                                <p value="">{description}</p>
                                <p value="">{dueDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )   
        }

export default Date