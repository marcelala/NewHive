import { useState } from "react";
import { organizations } from "../../data/organizations";
import { OrganizationsGroup } from "./OrganizationsGroup";

export const OrganizationsPage = () => {
  const [organizationsList, setOrganizationsList] = useState(organizations);
  const topics = [...new Set(organizationsList.map(item => item.topic))];

  return (
    <div className="organizations-page">
      <div className="header-block">
        <div className="heading">
          <h2>Organizations that are there for you</h2>
          <p>Supporting females and non-binary</p>
        </div>
        <div className="heading-picture"></div>
      </div>

{/* TODO update select (reuse existing components, add topics and filters) */}
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
      {
          topics.map(topic => <OrganizationsGroup topic={topic} key={topic}/>)
      }
      </div>
    </div>
  );
};
