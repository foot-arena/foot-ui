import React, { useEffect, useRef, useState } from 'react';

const Map = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (mapRef.current && !map) {
      setMap(new window.google.maps.Map(mapRef.current, {}));
    }
  }, [mapRef, map]);
  return <div ref={mapRef} />;
};

export default Map;
