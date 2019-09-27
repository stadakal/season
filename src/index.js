 import React from 'react';
 import ReactDOM from 'react-dom';
 import SeasonaDisplay from './seasonadisplay';
 import Spinner from './spinner';


 class App extends React.Component {
     state = {lat: null, errorMessage: ''};

     componentDidMount() {
         window.navigator.geolocation.getCurrentPosition(
             position => this.setState({lat: position.coords.latitude}),
             err => this.setState({errorMessage: err.message})
         );
     }

     render() {
         if (this.state.errorMessage && !this.state.lat) {
             return <div>Error: {this.state.errorMessage}</div>;
         }
         if(!this.state.errorMessage && this.state.lat) {
             return <SeasonaDisplay lat = {this.state.lat}/>;
         }

         return <Spinner />;
     }
 }

 ReactDOM.render(<App />, document.querySelector('#root'));