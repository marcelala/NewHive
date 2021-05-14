import { organizations } from "../../data/organizations";
import { OrganizationCard } from "./OrganizationCard";

export const OrganizationsGroup = ({ topic}) => {
  const group = organizations.filter((item) => item.topic === topic);

  return (
    <div className="organizations-group">
      <h3>{topic}</h3>
      {group.map((item) => (
        <OrganizationCard item={item} key={item.id} />
      ))}
    </div>
  );
};
