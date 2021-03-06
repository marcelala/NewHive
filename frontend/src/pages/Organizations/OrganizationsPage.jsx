import { useState } from "react";
import Select from "react-select";

import { topics, topicOptions } from "../../data/organizations";
import { OrganizationsGroup } from "./OrganizationsGroup";

export const OrganizationsPage = () => {
  const [topicsToShow, setTopicsToShow] = useState(topics);
  const handleChange = (chosenValue) => chosenValue ? setTopicsToShow([chosenValue.value]) : setTopicsToShow(topics);
  
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
          <div className="Organizations__topic-filter">
            <Select
              isClearable
              className="topic-filter"
              placeholder="Filter by topic"
              options={topicOptions}
              onChange={handleChange}
            />
          </div>
        {topicsToShow.map((topic) => (
          <OrganizationsGroup topic={topic} key={topic} />
        ))}
      </div>
    </div>
  );
};
