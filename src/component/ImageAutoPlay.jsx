import React from 'react'
import { Carousel } from "react-bootstrap";
function ImageAutoPlay({data }) {
  return (
    <div className="container ">
      <Carousel fade>

{data.map((element) => (

element?._embedded?.show?.image?.original && <Carousel.Item key={element?._embedded?.show?.id ? element?._embedded?.show?.id+Math.random() :"" } id="banner" interval={1500} keyboard={true}>
    <div style={{height:"90vh"}}>
    <img
      className="d-block img-fluid w-100" 
      id="bannerImage"
      src={element?._embedded?.show?.image?.original?element?._embedded?.show?.image?.original:""}
      alt={` banner`}
    />
    
    <Carousel.Caption>
      <h3>{element?._embedded?.show?.name?element?._embedded?.show?.name:""}</h3>
      <p>{element?._embedded?.show?.genres?element?._embedded?.show?.genres:""}</p>
      {/* <p>{item.url}</p> */}
      <a href="#">Read more</a>
    </Carousel.Caption>
    </div>
  </Carousel.Item>

))}


</Carousel>
    </div>
  )
}

export default ImageAutoPlay
