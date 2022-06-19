import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
import { Icon01, Icon02 } from "./Images";

const data = [
    {
        id: 0,
        linkImg: Icon01,
        title: 'Consectetur veniam veniam nulla ex.'
    },
    {
        id: 1,
        linkImg: Icon02,
        title: 'Eiusmod culpa sint aliqua velit mollit amet fugiat.'
    },
]

function Picture({ item }) {
    return (
        <div>
            <img src={item.linkImg} alt={item.title} className='Picture' />
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, left: 12, backgroundColor: 'red', zIndex: 9999999 }}
            onClick={onClick}
        />
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, right: 12, backgroundColor: 'red' }}
            onClick={onClick}
        />
    );
}

export default class Slide extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="Slider">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {data.map(item => <Picture item={item} key={item.id}></Picture>)}
                </Slider>
                <div className="slide">
                    <h2>Sample Service</h2>
                    <p>Cillum est eu reprehenderit proident reprehenderit voluptate do esse duis cillum sint.</p>
                </div>
                
                <div className="clear-float"></div>
            </div>
        );
    }
}