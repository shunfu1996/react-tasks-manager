import React from 'react';
import './Header.css';


class Header extends React.Component {
    render() {
        return (
            <div className="placeTop card mask-custom outerShape" id='header'>
                <div className="card-body p-3 text-black row">
                    {/* <div className="text-center col-3 pt-5">
                        <button type="button" className="btn btn-primary buttonShape">SORT</button>
                    </div> */}
                    <div className="text-center">
                        <img src="https://img.icons8.com/clouds/100/000000/todo-list.png" alt="Check" width="120"/>
                        {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp" alt="Check" width="60" /> */}
                        <p className="title text-center text-uppercase fw-bold topic my-1">To Do List</p>
                        </div>
                        {/* <div className="text-center col-3 pt-5">
                        <button  type="button" className="btn btn-primary buttonShape">ALL</button>
                    </div> */}
                </div>
                <div className="row m-3">
                    <div className="col-4 d-grid gap-2; ">
                        <button type="button" className="button1 btn">Yesterday</button>
                    </div>
                    <div className="col-4 d-grid gap-2">
                        <button type="button" className="button2 btn">Today</button>
                    </div>
                    <div className="col-4 d-grid gap-2">
                        <button type="button" className="button3 btn">Tomorrow</button>
                    </div>
                </div>
            </div>
    )}
}
export default Header;

