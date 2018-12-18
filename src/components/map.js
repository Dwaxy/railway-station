import React from 'react';

const Map = () => {
  return (
    <section id="map">
      <div className="map-holder">
         <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDO0KrL5-vOaHzB3ig-keYi-_5buPjJmws&callback=initMap"
          type="text/javascript"></script>
      </div>
    </section>
  )
}

export default Map
