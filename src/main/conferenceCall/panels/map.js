import React, { Component } from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
         lat: 'a',
         lng: ''
        };
      }

       geocode(){
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: '241 blue jay way, Felton CA' ,
            key: 'AIzaSyCUiLQOc56ddjRIx_JQpV1nzjaCBb2y-oc'
        }
        }).then((response) =>{
            console.log(this.state)
            const lat=response.data.results[0].geometry.location.lat;
            const lng=response.data.results[0].geometry.location.lng
            console.log(lat, lng)
            this.setState({lat: lat, lng: lng})
            return { index: response.data.results[0].geometry.location.lat}
        }).catch(function(error){
            console.log(error)
        })
    };

    render() {
        this.geocode();        
        
      return (
        <Map 
        google={this.props.google} zoom={12} 
        style={style}
        center={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
 
        >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
        </Map>
      );
    }
  }

  const style = {
    width: '24%',
    height: '31.7%',
    position: 'relative'
  }
   
  function mapStateToProps(state) {
    return {
      users: state.users,
      activeUser: state.activeUser,
      usersDataBase: state.usersDataBase
    };
  } 

  const enhance = compose(
    GoogleApiWrapper({
        apiKey: ('AIzaSyCUiLQOc56ddjRIx_JQpV1nzjaCBb2y-oc')
      }),
    connect(mapStateToProps)
  );
  export default enhance(MapContainer)