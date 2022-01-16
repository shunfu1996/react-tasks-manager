import React from "react";
import './Date.css';

/* export default class Date extends React.Component {
    render() { */
        const Date = ({ id, name, description, assignedTo, dueDate, deleteTask}) =>{

        /*     function deleteDate() {
                deleteTask(function(prev) {
                    return prev.filter(item => item.id !==id)        
                })
            } */

            return(
                <div className="row">
                    <div className="col-1 nopadding">
                        <div className="d-flex flex-column bd-highlight mb-3" id="checkbox">
                            <input className="form-check-input me-1 test" type="checkbox" /* onClick={deleteDate} *//>
                            {/* <input className="form-check-input me-1 test" type="checkbox" readOnly={true}/>
                            <input className="form-check-input me-1 test" type="checkbox" readOnly={true}/>
                            <input className="form-check-input me-1 test" type="checkbox" readOnly={true}/>
                            <input className="form-check-input me-1 test" type="checkbox" readOnly={true}/> */}
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action" id="list-home-list" data-bs-toggle="list" href="#list-task1" role="tab" aria-controls="list-home">{name}</a>
                        {/*  <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-task2" role="tab" aria-controls="list-profile">task2</a>
                            <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-task3" role="tab" aria-controls="list-messages">task3</a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-task4" role="tab" aria-controls="list-settings">task4</a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-task5" role="tab" aria-controls="list-settings">task5</a> */}
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade " id="list-task1" role="tabpanel" aria-labelledby="list-home-list">
                                <p value="">{assignedTo}</p>
                                <p value="">{description}</p>
                                <p value="">{dueDate}</p>
                            </div>
                    {/*      <div className="tab-pane fade" id="list-task2" role="tabpanel" aria-labelledby="list-profile-list">
                                <p value="">Assigned To</p>
                                <p value="">task2 details</p>
                                <p value="">Due Date</p>
                            </div>
                            <div className="tab-pane fade" id="list-task3" role="tabpanel" aria-labelledby="list-messages-list">
                                <p value="">Assigned To</p>
                                <p value="">task3 details</p>
                                <p value="">Due Date</p>
                            </div>
                            <div className="tab-pane fade" id="list-task4" role="tabpanel" aria-labelledby="list-settings-list">
                                <p value="">Assigned To</p>
                                <p value="">task4 details</p>
                                <p value="">Due Date</p>
                            </div>
                            <div className="tab-pane fade" id="list-task5" role="tabpanel" aria-labelledby="list-profile-list">
                                <p value="">Assigned To</p>
                                <p value="">task5 details</p>
                                <p value="">Due Date</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            )   
        }

export default Date