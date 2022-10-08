import { Link } from "react-router-dom";
import "./companies.css";

const CompanyCard = ({ company }) => {
  return (
    <div className="company">
      <Link to={company.handle}>
        <h3>{company.name}</h3>
        <p>{company.description}</p>
      </Link>
    </div>
  );
};

export default CompanyCard;
