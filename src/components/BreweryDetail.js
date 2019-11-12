import React from 'react';
import BreweryMap from './BreweryMap';
// import SimpleMap from './SimpleMap';

class BreweryDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {breweryData: "", loading: false }
    }

    async componentDidMount() {
        const url = "https://api.openbrewerydb.org/breweries/"+this.props.breweryId;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ breweryData: data, loading: false });
    }
    
    render(){
        return(
        <table width="100%">
            <thead>
            <tr>
                <td>{this.state.breweryData["id"]}</td>
                <td>{this.state.breweryData["name"]}</td>
                <td>{this.state.breweryData["brewery_type"]}</td>
                <td>
                    {this.state.breweryData["street"]+ ", " +
                    this.state.breweryData["city"]+ ", " +
                    this.state.breweryData["state"]+ " " +
                    this.state.breweryData["postal_code"]}
                </td>
                <td><a href={this.state.breweryData["website_url"]}>{this.state.breweryData["website_url"]}</a></td>
            </tr>
            </thead>
            <tbody>
            <tr rowSpan="5">
                <td colSpan="5">
                    <div style={{ height: '80vh', width: '100%' }}>
                        <BreweryMap brewery={this.state.breweryData}/>
                        
                    </div>
                </td>
            </tr>
            </tbody>
            
        </table>
        )
    }
}
export default BreweryDetail;