import { useState } from "react";
import { organizations } from "../../data/organizations";
import { OrganizationCard } from "./OrganizationCard";

export const OrganizationsGroup = ({ topic}) => {
  const [organizationsList, setOrganizationsList] = useState(organizations);
  const group = organizations.filter((item) => item.topic === topic);
  console.log(group);
  return (
    <div className="organizations-group">
      <h3>{topic}</h3>
      {group.map((item) => (
        <OrganizationCard item={item} key={item.id} />
      ))}
    </div>
  );
};
