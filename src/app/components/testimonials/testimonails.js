'use client'
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




export default function Testimonials() {
  const settings = {          
    infinite: true,
    spacing: 15,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    nav: true,
    autoplaySpeed: 3000,
  };

    return (

        <>
  <div className="section-one section-one-9 section-one-21">
    <div className="e-con-inner">
      <div className="elcontainer">
        <div className="testimonials-container">
          <h2 className="elementor-heading-title elementor-size-default">
            What People Say <span style={{ color: "#F4C823" }}> About Us</span>
          </h2>
          <Slider {...settings}>
        <div className="item">
          <p className="testimonial">
            Absolutely impressed with Play99Exch! The service is fast, reliable, and
            perfect for anyone serious about online cricket betting. I’ve tried a few
            platforms, but this one stands out as the #1 cricket betting ID provider
            platform. Their support team is responsive and professional. Highly
            recommended!
          </p>
          <div className="testimonial-from quote-image">
            <div className="image">
              
              <Image
                className="emoji"
                src="/images/raja.jpg"
                alt="Aman Sehrawat"
                width={60}
                height={60}      
                />
            </div>
            Aman Sehrawat
          </div>
        </div>

        <div className="item">
          <p className="testimonial">
            Play99Exch  never disappoints! I’ve been using their service for a while now,
            and it’s always fast, secure, and super reliable. Whether you're a
            beginner or experienced, it's the #1 cricket betting ID provider platform
            you can trust. Smooth experience from registration to placing bets—highly
            recommended!
          </p>
          <div className="testimonial-from quote-image">
            <div className="image">                        
              <Image
                className="emoji"
                src="/images/harsh.jpg"
                alt="Rajat Malik"
                width={60}
                height={60}      
                />
            </div>
            Rajat Malik
          </div>
        </div>

        <div className="item">
          <p className="testimonial">
            Been using Play99Exch  for a while now, and it's become my go-to. Betting on
            cricket and football is super easy, and I’ve never had an issue with
            deposits or withdrawals. Plus, their support team is always quick to
            respond. No complaints—just solid betting all around.
          </p>
          <div className="testimonial-from quote-image">
            <div className="image">
         
              
              <Image
                className="emoji"
                src="/images/shubham.webp"
                alt="Rahul Tripathi"
                width={60}
                height={60}      
                />
            </div>
            Rahul Tripathi
          </div>
        </div>
      </Slider>
        </div>
      </div>
    </div>
  </div>
  <br />
</>

    )
}
