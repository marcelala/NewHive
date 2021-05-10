export const OrganizationCard = ({ item }) => {
  const { name, description, img: imgSrc, website, phone, location } = item;
  return (
    <div className="organization-card">
      <img src={process.env.PUBLIC_URL + imgSrc} />
      <div className="org-info">
        <h2 className="org-name">{name}</h2>
        <p className="org-description">{description}</p>
        <div className="contacts">
          <p className="location">Location: {location}</p>
          <p className="web">Website: {website}</p>
          <p className="phone">Phone: {phone}</p>
        </div>
      </div>
    </div>
  );
};
