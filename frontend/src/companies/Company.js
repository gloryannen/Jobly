import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobList from "../jobs/JobList";
import JoblyApi from "../api";

const Company = () => {
  const { companyHandle } = useParams();
  const [company, setCompany] = useState();

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      const company = await JoblyApi.getCompany(companyHandle);
      setCompany(company);
    };
    fetchCompanyInfo();
  }, [companyHandle]);

  if (!company) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <h1>{company.name}</h1>
        <p>{company.description}</p>
        <JobList jobs={company.jobs} />
      </>
    );
  }
};

export default Company;
