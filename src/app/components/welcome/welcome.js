'use client'
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Welcome() {
    const settings = {          
          infinite: true,
          spacing: 15,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 768, // screens less than 768px
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };

    return (
        <>

			<div className="section-one">
					<div className="e-con-inner">
                        <Slider {...settings}>
                <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/top-sl1.jpg"
                    alt="Welcome to Play99Exch "
                    width={1140}
                    height={213}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/top-sl2.jpg"
                    alt="Welcome to Play99Exch "
                    width={1140}
                    height={213}      
                    />
                 </div>
                 
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/top-sl3.jpg"
                    alt="Welcome to Play99Exch "
                    width={1140}
                    height={213}         
                    />
                 </div>

                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/top-sl4.jpg"
                    alt="Welcome to Play99Exch "
                    width={1140}
                    height={213}         
                    />
                 </div>

                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/top-sl5.jpg"
                    alt="Welcome to Play99Exch "
                    width={1140}
                    height={213}         
                    />
                 </div>
            </Slider> 
                    <br/>
					<div className="row">
					<div className="col-12">
					<div className="left text-center">
                        <h1 className="elementor-heading-title elementor-size-default">
                            Welcome to Play99Exch – <br/> India’s #1 Online Betting Platform for Sports and Casino Games

                        </h1>
                        <br />
                        <div className="text-left">
                            <p>
                            Do you want to try your luck at sports and make predictions about your favorite sports? The greatest platform for doing so is Play99Exch Fantasy Gaming.{" "}
                            </p>
                            <p>
                           Building a squad, competing against other players, and receiving rewards based on your ranking (or fantasy point scores) 
                           are all made possible by Play99Exch. Additionally, you may watch the performance of your chosen players in real time and become more involved in your favorite sport.
                            </p>
                            <p>
                            Furthermore, you don't have to be an expert to use Play99Exch. The web interface and app are both simple and clear. We also have a very easy sign-up procedure. 
                            "The Blink of an Eye" is all that is required.
                            </p>
                            Therefore, Play99Exch gives you the chance to continue watching your favorite matches and have fun (winning real money).
                            <p />
                        </div>
                        </div>

					</div>
					</div>				
					</div>					
					<br/>	
					<div className="text-center anc-tab">
						<a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-pulse-grow" href="#">
							<span className="elementor-button-content-wrapper">
								
								<span className="elementor-button-text">Get Play99Exch Login ID</span>
							</span>
						</a>
					</div>	
					<br/>					
					</div>
							
        </>
    )
}
