import Select from 'react-select';
import React from "react"; 
export const Contact = () => {

  const options = [
    { value: 'Question', label: 'Question' },
    { value: 'Suggestions', label: 'Suggestions' },
    { value: 'Feedback', label: 'Feedback' }];
    
    
    return (
<section class="contact">
                <h2 className="contact__heading">Contact</h2>
                <h4 className="contact__sub-heading">Have questions? We have answers! </h4>
                  <h4>Contact us with this form or on other social media.</h4>
          <div className="form contact-form">
            <div className="input-group-wrap">
              <div className="input-group">
              <input type="text" className="input" placeholder="Enter your name..." required/>
              <span className="bar"></span>
              </div>
              <div className="input-group">
                <input type="email" className="input" placeholder="Enter your email..." required/>
                <span className="bar"></span>
              </div>
            </div>
            <div class="input-group">
              <Select name="contact-selector" options={options} />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <textarea name="subject" id="subject" cols="30" rows="8" placeholder="Enter your message here..." required></textarea>
              <span className="bar"></span>
            </div>
            <div className="cta">
            <a href="mailto:info@community.com" className="form-group btn-group">Send Message</a>
            </div>
        </div>
    </section>
    )
}