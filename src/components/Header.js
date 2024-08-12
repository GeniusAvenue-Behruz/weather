import React, { useState } from 'react';
import { FaBars, FaTimes, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { GoMoveToStart, GoMoveToEnd } from 'react-icons/go';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#A0CFDF] text-white">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Logo />
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <ul className={`flex flex-col md:flex-row gap-6 text-lg absolute md:relative bg-[#A0CFDF] md:bg-transparent w-full md:w-auto ${isOpen ? 'top-16 left-0' : 'top-[-490px]'}`}>
                    <li><a href="#home" className="hover:text-white">Home</a></li>
                    <li><a href="#about" className="hover:text-white">About</a></li>
                    <li><a href="#services" className="hover:text-white">Services</a></li>
                    <li><a href="#contact" className="hover:text-white">Contact</a></li>
                </ul>
                <SocialIcons />
            </div>
        </div>
    );
};


const Logo = () => (
    <div className="flex items-center">
        <img src="/logo.png" alt="Weather App" className="mr-3 h-10 rounded-full" />
        <span className="font-bold text-2xl">UpWeather</span>
    </div>
);

const NavigationMenu = () => (
    <ul className="flex gap-6 text-lg">
        <li><a href="#home" className="hover:text-white">Home</a></li>
        <li><a href="#about" className="hover:text-white">About</a></li>
        <li><a href="#services" className="hover:text-white">Services</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
    </ul>
);

const SocialIcons = () => (
    <div className="flex items-center text-lg">
        <FaTwitter className="mx-2 cursor-pointer hover:text-white" size="24" />
        <FaFacebook className="mx-2 cursor-pointer hover:text-white" size="24" />
        <FaInstagram className="mx-2 cursor-pointer hover:text-white" size="24" />
    </div>
);

const Header = () => (
    <div className='overflow-hidden'>
        
        <NavigationBar />
        <HeroSection />
    </div>
);

const HeroSection = () => (
    <div className="bg-cover bg-center h-screen w-screen bg-[#A0CFDF]">
        <div className="container mx-auto px-6 py-32 text-white text-center">
            <h1 className="text-6xl font-bold">Stay Updated with UpWeather</h1>
            <p className="text-2xl mt-4">Get the latest weather updates and forecasts.</p>
            <Carousel />
        </div>
    </div>
);

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="mx-auto w-full mt-14 carusel">
            <Slider {...settings}>
                <div>
                    <img src="image1.jpg" alt="Weather scene 1" className="w-full h-auto" />
                </div>
                <div>
                    <img src="image2.jpg" alt="Weather scene 2" className="w-full h-auto" />
                </div>
                <div>
                    <img src="image3.jpg" alt="Weather scene 3" className="w-full h-auto" />
                </div>
            </Slider>
        </div>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return <GoMoveToEnd className={`text-white ${className}`} style={{ ...style, fontSize: "24px" }} onClick={onClick} />;
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return <GoMoveToStart className={`text-white ${className}`} style={{ ...style, fontSize: "24px" }} onClick={onClick} />;
};

export default Header;
