export const OrganizationCard = ({ item }) => {
  const { name, description, img, website, phone, location } = item;
  
  return (
    <div className="organization-card">
      <div
        className="org-picture"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + `/organizations/${img}`
          })`,
        }}
      />
      <div className="org-details">
        <h2 className="org-name">{name}</h2>
        <p className="org-description">{description}</p>

        <div className="contacts">
          <p className="contact location">
            <b>Location:</b> {location}
          </p>
          <p className="contact web">
            <b>Website:</b> <a href={website}>Click here</a>
          </p>
          <p className="contact phone">
            <b>Phone:</b> <a href={`tel:{phone}`}>{phone}</a>
          </p>
        </div>
      </div>
    </div>
  );
};
