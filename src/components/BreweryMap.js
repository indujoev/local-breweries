import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '80%',
  };
 class BreweryMap extends React.Component{
    constructor(props) {
        super(props);
        this.initialCenter = {
            lat: this.props.brewery["latitude"],
            lng: this.props.brewery["longitude"]
          };
        this.zoom= 11;
        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
          };
    }
    componentDidMount() {
      
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


    render() {

        let breweryLat= this.props.brewery["latitude"];
        let breweryLng= this.props.brewery["longitude"];
        let breweryName= this.props.brewery["name"];

        return(
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={this.initialCenter}
            //initialCenter={{ lat: this.props.brewery["latitude"]?breweryLat:47.444, lng: this.props.brewery["longitude"]?breweryLng:-122.176}}
            >
            <Marker 
            marker={this.state.activeMarker} 
            onMouseover={this.onMarkerClick}
            name={breweryName}
           />
           <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
        
        <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
            </Map>
        );
    }
}
//export default BreweryMap;

export default GoogleApiWrapper({
    apiKey: '// KEY'
  })(BreweryMap);
