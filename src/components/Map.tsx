import React from 'react'
import { useState, useEffect } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const apiKey:string = "AIzaSyAZF2E98R6ezuUUCHVDFTNRvJ30msXskOs"

const containerStyle = {
    width: '400px',
    height: '400px'
};
const center = { lat: 1.397416, lng: 103.798603 }
export default function Map() {


    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
            >
                <></>
            </GoogleMap>
        </LoadScript>
    );
}