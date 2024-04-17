import React, { useEffect } from 'react'

interface Position {
  lat: number
  lng: number
}

interface MapMarkerProps {
  locations: string[]
}

const MapMarker: React.FC<MapMarkerProps> = () => {
  useEffect(() => {
    const initMap = async () => {
      const locations: Position[] = [
        // put the data - now hardcoded
        { lat: -36.7660918, lng: 174.7267817 },
        { lat: -36.7716377, lng: 174.713434 },
        { lat: -36.8827032, lng: 174.6331554 },
        { lat: -36.7705578, lng: 174.7275945 },
        { lat: -36.851687, lng: 174.7832322 },
        { lat: -36.9383626, lng: 174.652653 },
        { lat: -36.8786769, lng: 174.8361916 },
        { lat: -36.9096579, lng: 174.6610737 },
        { lat: 36.9111394, lng: 174.6103638 },
      ]

      // Load Google Maps API
      await loadGoogleMaps()

      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          zoom: 11,
          center: locations[0],
        },
      )

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

  const key = import.meta.env.VITE_MAP_API_KEY
  const loadGoogleMaps = () => {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=geometry&language=en`
      script.async = true
      script.defer = true
      script.onload = () => resolve()
      script.onerror = (error) => reject(error)
      document.head.appendChild(script)
    })
  }

  return <div id="map" style={{ width: '500px', height: '500px' }}></div>
}

export default MapMarker
