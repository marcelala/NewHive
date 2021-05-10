import { useState } from "react";
import { organizations } from "../../data/organizations";
import { OrganizationCard } from "./OrganizationCard";

export const OrganizationsPage = () => {
  const [organizationsList, setOrganizationsList] = useState(organizations);

  function getOrganizationsByTopic (topic) {
    return organizations.filter(item => item.topic === topic)
  }

  return (
    <div className="organizations-page">
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
            <option value="" disabled defaultValue>
              Topic
            </option>

            <option value="topic1">Topic 1</option>
            <option value="topic2">Topic 2</option>
          </select>

          <select name="sortBy" id="sortBy">
            <option value="" disabled defaultValue>
              Sort by
            </option>

            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>

        <p className="org-number">
          Showing {organizationsList.length} organizations
        </p>
        <div className="organizations-group">
          <h3>Legal help</h3>
          {getOrganizationsByTopic("Legal help").map((item) => <OrganizationCard item={item} key={item.id}/>)}
        </div>
      </div>
    </div>
  );
};
