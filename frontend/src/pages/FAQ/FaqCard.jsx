export default function FaqCard({ information }) {
  // Properties
  const videoThumbObject = require(`../../assets/images/faq/${information.image}`);
  const videoThumbURL = videoThumbObject.default;

  return (
    <div className="faq-card">
      {/* Video thumbnail */}
      <div>
        <img
          className="faq-photo"
          src={videoThumbURL}
          alt="a preview of the video"
        />
      </div>
      <div className="faq-info">
        <h3>{information.title}</h3>
        <h4>by {information.author}</h4>
        <p>{information.description}</p>
        <p>Date published: {information.date}</p>
        <a href={information.link} target="_blank" rel="noreferrer">
          <p>Go to the video</p>
        </a>
      </div>
    </div>
  );
}