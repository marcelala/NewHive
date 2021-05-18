function Banner(){

    const photoObject = require ("../assets/images/NewHive-brown.png")
    const photoURL = photoObject.default;
    return (
    <section className="feed-welcome">
        <div className="feed--background-banner">
        <div className="logo-banner">
        <img src={photoURL} className="logo-newHive" alt="honeycomb" />
      </div>
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
