import WelcomeBanner from "../assets/images/banner-women.jpg"

function Banner(){


    return (
    <section className="feed-welcome">
    <div className="feed--welcome-banner">
            <img src={ WelcomeBanner } className="feed--banner" alt="Three women"/>
        <div className="feed--banner-text">
        <h3>Connecting women to  </h3>
        <h2>their new empowering networks</h2>
              <p>
              Meet, chat and learn from like-minded women who also immigrated to Sweden.
              </p>
              </div>
    </div>
    </section>
        )}
        export default Banner;
