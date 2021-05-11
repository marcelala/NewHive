export const Contact = () => {


    return (
<section class="contact">
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
              <select name="topics" id="topic">
              <option value="placeholder">Select a topic...</option>
              <option value="Questions">Questions</option>
              <option value="Suggestions">Suggestions</option>
              <option value="Feedback">Feedback</option>
              </select>
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <textarea name="subject" id="subject" cols="30" rows="8" placeholder="Enter your message here..." required></textarea>
              <span className="bar"></span>
            </div>
            <div className="cta">
            <a href="#" className="btn-pink">Send Message</a>
            </div>
        </div>
    </section>
    )
}