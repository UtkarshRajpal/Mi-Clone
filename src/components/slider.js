import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/carousel.css";

const slider = ({start}) => {
  return (
   <Carousel className="carousel" fade nextLabel="" prevLabel="" indicatorLabels={""}>
    {
        start.map((item)=>( 
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={item}
                alt="First slide"
            />
            </Carousel.Item>
        ))
    
    }   
   </Carousel>
  )
}

export default slider
