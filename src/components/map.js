import React from 'react';

const Map = () => {
  return (
    <section id="map">
    {/*
    <iframe width="100%" height="100%" style={{position: "absolute", border: "none"}}
src="https://www.google.com/maps/embed/v1/place?q=springfield+railway+station&key=AIzaSyD7Orx1FRQa9ewpuSP8uOcZU6eEL6m-ziU"></iframe> 
    </section> */}
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d637.0920213525307!2d171.93047469345296!3d-43.334088098712925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x31e01cecb6a1ce84!2sStation73+Cafe!5e0!3m2!1sen!2snz!4v1545184762983" 
      width="100%" 
      height="100%" 
      frameborder="0" 
      style={{border: 0}} 
      allowFullscreen></iframe>
  )
}

export default Map
