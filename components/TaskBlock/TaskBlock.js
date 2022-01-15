import React from "react";

export class TaskBlock extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card" style={{width:" 18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Name: {this.props.name}</h5>
                        <p className="card-text">Description: {this.props.description}</p>
                        <p className="card-text">Assigned To: {this.props.assignedTo}</p>
                        <p className="card-text">Due Date: {this.props.dueDate}</p>
                        <a href="#" className="btn btn-primary stretched-link">delete</a>
                    </div>
                </div>
            </div>

        )
    }
}