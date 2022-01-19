import React from "react";

export class Froms extends React.Component {
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changeAssignedTo = this.changeAssignedTo.bind(this);
        this.changeDueDate = this.changeDueDate.bind(this)
    }

    changeName(e) {
        let name = e.target.value;
        this.props.addName(name)
    }

    changeDescription(e) {
        let description = e.target.value;
        this.props.addDescription(description)
    }

    changeAssignedTo(e) {
        let assignedTo = e.target.value;
        this.props.addAssignedTo(assignedTo)
    }
    
    changeDueDate(e) {
        let dueDate = e.target.value;
        this.props.addDueDate(dueDate)
    }
    
    render() {
        return (
                <div className="container">
                    <form   className="row mb-3">
                    <div className="md-3">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" onChange={this.changeName}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationTextarea"   className="form-label">Description</label>
                        <textarea   className="form-control" id="validationTextarea" onChange={this.changeDescription}></textarea>
                    </div>
                    <div className="row">
                        <div   className="col-sm-6">
                        <label htmlFor="inputState"     className="form-label">Assigned To</label>
                        <input type="text"   className="form-control" aria-label="Assigned To" onChange={this.changeAssignedTo}/>
                        </div>
                        <div   className="col-sm-6">
                        <label htmlFor="inputState"     className="form-label">Due Date</label>
                        <input type="date"   className="form-control" aria-label="Due Date" onChange={this.changeDueDate}/>
                        </div>
                    </div>

                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button">Button</button>
                    </div>
                    </form>
                </div>
        )
    }
}