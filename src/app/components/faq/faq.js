'use client'


import React, { useEffect } from 'react';
import $ from 'jquery';

export default function Faq() {
  
  useEffect(() => {
    function closeAccordionSection() {
      $('.accordion .accordion-section-title').removeClass('active');
      $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').on('click', function (e) {
      e.preventDefault();
      const currentAttrValue = $(this).attr('href');

      if ($(e.target).hasClass('active')) {
        closeAccordionSection();
      } else {
        closeAccordionSection();
        $(this).addClass('active');
        $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
      }
    });

    return () => {
      $('.accordion-section-title').off('click');
    };
  }, []);


    return (
        <>
        <div className="section-one section-one-9 section-one-22">
  <div className="e-con-inner">
    <h2 className="elementor-heading-title elementor-size-default">
      Frequently Asked Questions{" "}
    </h2>
    <div className="accordion">
      <div className="accordion-section">
        <a href="#accordion-1" className="accordion-section-title">
          1. How do I sign up at Play99Exch? <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-1"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            It's incredibly easy to register. On our home page, click the "Sign Up" or "Register" button. Additionally, you can obtain your customer ID straight from the WhatsApp (suggested) button on the homepage. To begin, you will be prompted for your email address, active WhatsApp number, and full name.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-2" className="accordion-section-title">
          Are there new player welcome bonuses at Play99Exch?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-2"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Indeed, promotions and welcome offers are available to both new and returning players. We currently offer a 100% welcome bonus on your initial deposit. Additionally, we offer 1% lifetime referral awards in addition to unique referral bonuses for longtime users.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-3" className="accordion-section-title">
          3. How many betting options are available on Play99Exch?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-3"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Popular sports betting (such as football, cricket, and tennis), live casino, virtual sports, and hundreds of other activities are just a few of the many betting options offered by Play99Exch. The Play99Exch app's side menu or top bar allows you to view all of the lists.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-4" className="accordion-section-title">
          4. What options are available for downloading the Play99Exch apps?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-4"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Visit the official website to download the Play99Exch app, which is compatible with iOS and Android. When a warning appears during the initial installation, you can choose to disregard it and click "Install Anyway."
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-5" className="accordion-section-title">
          5. How long does it take to get funds in my Play99Exch account after a deposit?
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-5"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Deposits made using UPI and E-Wallets are typically credited in a matter of seconds. Depending on the banking system, net banking transfers (RTGS, NEFT, and IMPS) take five minutes. The timings for cryptocurrency deposits may change because they need network confirmations.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-6" className="accordion-section-title">
          6. What if I forget my Play99Exch password?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-6"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Simply click the "Forgot Password" option on the login page if you can't remember your password. You will be asked to enter your WhatsApp number or registered email address. Our support staff can also be reached directly on WhatsApp. {" "}
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-7" className="accordion-section-title">
          7. How do I get customer support if I face any problem?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-7"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            We offer 24/7 one-on-one customer service from actual people, not chatbots. We can also be reached by live conversation on WhatsApp. {" "}
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-8" className="accordion-section-title">
          8. What if a match or an event on which I have bet is cancelled?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-8"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Events that are canceled or postponed are examples of circumstances that fall under our betting terms. Typically, bets on canceled events are null and void; the money is returned to your Play99Exch balance.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}