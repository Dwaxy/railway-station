import React from 'react';

const Map = () => {
  return (
    <section id="map">
      <div className="map-holder">
         <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7Orx1FRQa9ewpuSP8uOcZU6eEL6m-ziU&callback=initMap"
          type="text/javascript"></script>
      </div>
    </section>
  )
}

export default Map
