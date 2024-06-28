import React, { useEffect } from "react";
import axios from "axios";
import $ from 'jquery';
import 'jquery-validation';
import './bookingPage.css';
const BookingPage = () => {
  useEffect(() => {
    const v = $("#booking-form").validate({
      rules: {
        bf_totalGuests: {
          required: true
        },
        bf_date: {
          required: true
        },
        bf_time: {
          required: true
        },
        bf_hours: {
          required: true
        },
        bf_fullname: {
          required: true
        },
        bf_email: {
          required: true,
          email: true
        }
      },
      errorElement: "span",
      errorClass: "error",
      errorPlacement: function (error, element) {
        error.insertBefore(element);
      }
    });

    $(".next-btn1").click(function () {
      if (v.form()) {
        $(".tab-pane").hide();
        $("#step2").fadeIn(1000);
        $('.progressbar-dots').removeClass('active');
        $('.progressbar-dots:nth-child(2)').addClass('active');
      }
    });

    $(".next-btn2").click(function () {
      if (v.form()) {
        $(".tab-pane").hide();
        $("#step3").fadeIn(1000);
        $('.progressbar-dots').removeClass('active');
        $('.progressbar-dots:nth-child(3)').addClass('active');
      }
    });

    $(".submit-btn").click(function () {
      if (v.form()) {
        $("#loader").show();
        setTimeout(function () {
          $("#booking-form").html("<h2>Your message was sent successfully. Thanks! We'll be in touch as soon as we can, which is usually like lightning (Unless we're sailing or eating tacos!).</h2>");
        }, 1000);
        return false;
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector('#booking-form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post('http://localhost:5000/submit-booking', data); // Adjust the URL as needed
      if (response.data.success) {
        form.innerHTML = "<h2>Your message was sent successfully. Thanks! We'll be in touch as soon as we can.</h2>";
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="booking-page-form">
      <form action="#" id="booking-form" onSubmit={handleSubmit}>
        <div className="tab-content">
          <div className="tab-pane" id="step1">
            <ul>
              <li>
                <label>How many guests in your group?</label>
                <div className="errorTxt"></div>
                <select name="bf_totalGuests" required>
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="More">More</option>
                </select>
              </li>
              <li style={{ listStyle: 'none', display: 'inline' }}>
                <button className="next-btn next-btn1" type="button">Next</button>
              </li>
            </ul>
          </div>
          <div className="tab-pane" id="step2">
            <ul>
              <li>
                <label>Which date and time are you looking to book on?</label>
                <div className="errorTxt"></div>
                <input type="text" className="datepicker" name="bf_date" required />
              </li>
              <li>
                <label>Which time of day?</label>
                <div className="errorTxt"></div>
                <select name="bf_time" required>
                  <option value="">Select</option>
                  <option value="Morning">Morning</option>
                  <option value="Midday">Midday</option>
                  <option value="Late afternoon, ending with a sunset">Late afternoon, ending with a sunset</option>
                </select>
              </li>
              <li>
                <label>How many hours would you like to charter for?</label>
                <div className="errorTxt"></div>
                <select name="bf_hours" required>
                  <option value="">Select</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="Overnight (24 hours)">Overnight (24 hours)</option>
                </select>
              </li>
              <li>
                <button className="next-btn next-btn2" type="button">Next</button>
              </li>
            </ul>
          </div>
          <div className="tab-pane" id="step3">
            <ul>
              <li>
                <label>What is your first and last name?</label>
                <div className="errorTxt"></div>
                <input type="text" name="bf_fullname" required />
              </li>
              <li>
                <label>Which email address should we send your free estimate to?</label>
                <div className="errorTxt"></div>
                <input type="email" name="bf_email" required />
              </li>
              <li>
                <label>Do you have any questions or a message? (Optional)</label>
                <textarea name="bf_message"></textarea>
              </li>
              <li>
                <button className="submit-btn" type="submit">Request My Free Estimate</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="progress-wrap">
          <div className="line-progress-bar">
            <div className="line"></div>
            <ul className="checkout-bar">
              <li className="progressbar-dots active"><span>step 1</span></li>
              <li className="progressbar-dots"><span>step 2</span></li>
              <li className="progressbar-dots"><span>Final step</span></li>
            </ul>
          </div>
        </div>
        <div id="loader" style={{ display: 'none' }}>
          <img src="//d2erq0e4xljvr7.cloudfront.net/assets/img/ring.svg" alt="loading" />
        </div>
      </form>
    </div>
  );
};

export default BookingPage;
