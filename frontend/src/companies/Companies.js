import { useEffect, useState } from "react";
import SearchForm from "../search/SearchForm";
import CompanyList from "../companies/CompanyList";
import JoblyApi from "../api";

const Companies = () => {
  const [companies, setCompanies] = useState();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchCompanies = async () => {
      const companies = await JoblyApi.getCompanies(filter);
      setCompanies(companies);
    };
    fetchCompanies();
  }, [filter]);

  const handleSearch = (searchTerm) => {
    setFilter(searchTerm);
  };
  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <CompanyList companies={companies} />
    </>
  );
};

export default Companies;
