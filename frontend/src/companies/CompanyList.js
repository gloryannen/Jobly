import CompanyCard from "./CompanyCard";

const CompanyList = ({ companies = [] }) => {
  const components = companies.map((company, index) => (
    <CompanyCard company={company} key={index} />
  ));
  return <div>{components}</div>;
};

export default CompanyList;
