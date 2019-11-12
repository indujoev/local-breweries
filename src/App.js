import React from 'react';
import './App.scss';
import logo from './logo.svg'
import Brewery from './components/Brewery';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      breweries: []
    }
    this.counter = 0;
    this.searchByCity = this.searchByCity.bind(this);
  }
  async componentDidMount() {
    const url = "https://api.openbrewerydb.org/breweries/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ breweries: data, loading: false });
  }
  
  async searchByCity(e) {
    let SearchKeyword= e.target.value;
    //if(e.target.value !== "") {
      const url = "https://api.openbrewerydb.org/breweries?by_city="+ SearchKeyword;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ breweries: data, loading: false });
    //}

  }

  render () {
    let breweryList = this.state.breweries.map((x, index) =>{
      let breweryProps = {brewery: x, counter: ++this.counter };
      return(
        <Brewery key= {breweryProps.counter} breweryProps={breweryProps} />
      )
    });
    return (
      <div className="App main">
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="./"> 
          <img src={logo} alt="logo" width="40" /> Breweries 
        </a>
        </nav>

        <nav className="navbar navbar-light bg-light">
        <input type="text" className="input" placeholder="Search City ..." onChange={this.searchByCity} />
        </nav>

        <table className="table table-hover" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Address</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                    {breweryList}
                    </tbody>
        </table>
        
    </div>
    )
  };
}



export default App;
 

