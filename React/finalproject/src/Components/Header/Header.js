import React from 'react';
import './Header.css';


class Header extends React.Component {
    render() {
        return (
            <div className="place border border-dark">
                <div className="d-flex align-items-center">
                    <div className="col-2">
                        <button type="button" className="">SORT</button>
                    </div>
                    <div className="col-8">
                        <p className="text-center text-uppercase fw-bold fs-1 topic">To Do List</p>
                        </div>
                        <div className="col-2 d-flex justify-content-end">
                        <button type="button" className="">BUTTON</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 d-grid gap-2">
                        <button type="button" className="btn btn-primary">Yesterday</button>
                    </div>
                    <div className="col-4 d-grid gap-2">
                        <button type="button" className="btn btn-primary">today</button>
                    </div>
                    <div className="col-4 d-grid gap-2">
                        <button type="button" className="btn btn-primary">Tomorrow</button>
                    </div>
                </div>
            </div>
    )}
}
export default Header;

