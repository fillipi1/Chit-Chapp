import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    handremove(){
        console.log( 'biiitch')
    }
    render() {
      return (
        <Map 
        google={this.props.google} zoom={12} 
        style={style}
        >
    
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          {/* <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow> */}
        </Map>
      );
    }
  }

  const style = {
    width: '24%',
    height: '31.7%',
    position: 'relative'
  }
   
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyCUiLQOc56ddjRIx_JQpV1nzjaCBb2y-oc')
  })(MapContainer)