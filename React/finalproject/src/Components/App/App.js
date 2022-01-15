import React from 'react';
import Header from '../Header/Header';
import Date from '../Date/Date';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
/* import './App.css'; */
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
    return (
      <div className="App">
        <Header /> 
        <Date />
        <Card />
        <Footer />
      </div>
    );
  };
}

