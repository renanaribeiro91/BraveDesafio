import React from "react"
import { Carousel } from "react-bootstrap"
import cases from "../assets/imgs/cases.png"
import img2 from "../assets/imgs/2.jpg"
import img3 from "../assets/imgs/1.jpg"


const CarouselConteiner = () => {
    return (
        <Carousel controls={false}>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={cases}
                    alt="second"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="second"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselConteiner