import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        const google = window.google;
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: 37.335480,
                lng: -121.893028
            }
        })
    }

    render() {
        return <div ref='map' />
    }
}

export default GoogleMap;
