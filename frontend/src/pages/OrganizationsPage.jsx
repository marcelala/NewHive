export const OrganizationsPage = () => {
  return (
    <section className="organizations-page">
      <div className="header-block">
        <div className="heading">
          <h2>Organizations that are there for you</h2>
          <p>Supporting females and non-binary</p>
        </div>
        <div className="heading-picture"></div>
      </div>

      <div className="organizations">
        <div className="filters">
          <select name="topics" id="topics">
            <option value="" disabled selected>
              Topic
            </option>

            <option value="topic1">Topic 1</option>
            <option value="topic2">Topic 2</option>
          </select>

          <select name="sortBy" id="sortBy">
            <option value="" disabled selected>
              Sort by
            </option>

            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <p>Showing {18} organizations</p>
        <div className="organizations-group">
            <h3>Legal help</h3>
            
        </div>
      </div>
    </section>
  );
};
