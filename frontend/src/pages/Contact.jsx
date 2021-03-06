import Select from "react-select";

export const Contact = () => {
  const options = [
    { value: "Question", label: "Question" },
    { value: "Suggestions", label: "Suggestions" },
    { value: "Feedback", label: "Feedback" },
  ];

  function validateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validRegex)) {
      return true;
    } else {
      alert("Invalid email address!");
      return false;
    }
  }
  return (
    <div className="contact-us-page">
      <div className="contact-us-header">
      </div>
      <div className="contact-us-form">
    <section className="contact__container">
      <h2 className="contact__heading">Contact</h2>
      <h4 className="contact__sub-heading">
        Have questions? We have answers!{" "}
      </h4>
      <h4>Contact us with this form or on other social media.</h4>
      <div className="form contact-form">
        <div className="input-group-wrap">
          <div className="input-group">
            <input
              type="text"
              className="input"
              placeholder="Enter your name..."
              required
            />
            <span className="bar"></span>
          </div>
          <div className="input-group">
            <input
              type="email"
              className="input"
              placeholder="Enter your email..."
              required
            />
            <span className="bar"></span>
          </div>
        </div>
        <div className="contact__selector-container">
          <Select name="topic-filter" options={options} />
        </div>
        <span className="bar"></span>
        <div className="input-group">
          <textarea
            name="subject"
            id="subject"
            cols="30"
            rows="8"
            placeholder="Enter your message here..."
            required
          ></textarea>
          <span className="bar"></span>
        </div>
        <div className="cta">
          <a
            href="mailto:info@community.com"
            className="form-group btn-group"
            onclick="validateEmail(email)"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
    </div>
    </div>
  );
};
