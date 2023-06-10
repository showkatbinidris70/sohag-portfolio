import React from "react";
import hero from "../assets/images/hero.png";
import {BsInstagram, BsFacebook, BsLinkedin, BsTwitter} from "react-icons/bs";

const Hero = () => { // const social_media = ["logo-instagram", "logo-facebook", "logo-linkedin", "logo-twitter",];
    const social_media = [
        {
            name: "logo-instagram",
            link: ""
        }, {
            name: "logo-facebook",
            link: ""
        }, {
            name: "logo-linkedin",
            link: ""
        }, {
            name: "logo-twitter",
            link: ""
        }
    ];
    const menuLinks = [{
            name: "Contact me",
            link: "#contact"
        }];
    return (
        <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
            <div className="flex-1 flex items-center justify-center h-full">
                <img src={hero}
                    alt=""
                    className="md:w-11/12 h-full object-cover"/>
            </div>
            <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-cyan-600 md:text-6xl text-5xl">
                            Hello!
                            <br/>
                        </span>
                        My Name is
                        <span>{" "}Sohag Ali</span>
                    </h1>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                        Fullstack Developer
                    </h4>
                    <button className="btn-primary mt-8">
                        {
                        menuLinks ?. map((menu, i) => (
                            <li key={i}
                                className="px-6 hover:text-gray-600">
                                <a href={
                                    menu ?. link
                                }>
                                    {
                                    menu ?. name
                                }</a>
                            </li>
                        ))
                    }</button>
                    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
                        {/* {
                        social_media ?. map((icon) => (
                            <div key={icon}
                                className="text-gray-600 hover:text-white cursor-pointer ">
                                <ion-icon name={
                                    icon.name
                                }></ion-icon>
                            </div>
                        ))
                    }  */}
                        <div className="hover:text-gray-600">
                            <a href="https://www.instagram.com/"><BsInstagram/></a>
                        </div>
                        <div className="hover:text-gray-600">
                            <a href="https://www.facebook.com/"><BsFacebook/></a>
                        </div>
                        <div className="hover:text-gray-600">
                            <a href="https://linkedin.com/"><BsLinkedin/></a>
                        </div>
                        <div className="hover:text-gray-600">
                            <a href="https://twitter.com/"><BsTwitter/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
