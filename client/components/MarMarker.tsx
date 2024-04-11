import React, { useEffect } from 'react'
// import { google } from '@types/googlemaps' - it breaks everything
// /// <reference types="@types/googlemaps" />

// import { Map, Marker } from '@types/googlemaps'
// import { MarkerClusterer } from '@googlemaps/markerclusterer'

interface Position {
  lat: number
  lng: number
}

const MapMarker: React.FC = () => {
  useEffect(() => {
    const initMap = async () => {
      const locations: Position[] = [
        // put the data - now hardcoded
        { lat: -31.56391, lng: 147.154312 },
        { lat: -33.718234, lng: 150.363181 },
        { lat: -33.727111, lng: 150.371124 },
        { lat: -33.848588, lng: 151.209834 },
        { lat: -33.851702, lng: 151.216968 },
        { lat: -34.671264, lng: 150.863657 },
        { lat: -35.304724, lng: 148.662905 },
        { lat: -36.817685, lng: 175.699196 },
        { lat: -36.828611, lng: 175.790222 },
        { lat: -37.75, lng: 145.116667 },
        { lat: -37.759859, lng: 145.128708 },
        { lat: -37.765015, lng: 145.133858 },
        { lat: -37.770104, lng: 145.143299 },
        { lat: -37.7737, lng: 145.145187 },
        { lat: -37.774785, lng: 145.137978 },
        { lat: -37.819616, lng: 144.968119 },
        { lat: -38.330766, lng: 144.695692 },
        { lat: -39.927193, lng: 175.053218 },
        { lat: -41.330162, lng: 174.865694 },
        { lat: -42.734358, lng: 147.439506 },
        { lat: -42.734358, lng: 147.501315 },
        { lat: -42.735258, lng: 147.438 },
        { lat: -43.999792, lng: 170.463352 },
      ]

      // Load Google Maps API
      await loadGoogleMaps()

      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          zoom: 4,
          center: locations[0], // 맵의 중심을 첫 번째 위치로 설정
        },
      )

      // 각 위치에 마커 추가
      locations.forEach((location, index) => {
        new google.maps.Marker({
          position: location,
          map: map,
          title: `Marker ${index + 1}`,
        })
      })
    }

    initMap()
  }, [])

  // const key = process.env.REACT_APP_MAP_KEY
  // it didn't work because it's for node but it's needed from client side so use VITE and import.meta
  const key = import.meta.env.VITE_MAP_API_KEY
  // Load Google Maps API script dynamically
  const loadGoogleMaps = () => {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=geometry`
      script.async = true
      script.defer = true
      script.onload = () => resolve()
      script.onerror = (error) => reject(error)
      document.head.appendChild(script)
    })
  }

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>
}

export default MapMarker
