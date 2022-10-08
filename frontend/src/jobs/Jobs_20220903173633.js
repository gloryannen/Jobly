import { useEffect, useState } from "react";
import JoblyApi from "../api";
import SearchForm from "../search/SearchForm";
import JobList from "./JobList";
import "./jobs.css";

const Jobs = () => {
  const [filter, setFilter] = useState("");
  const [jobs, setJobs] = useState();
  useEffect(() => {
    const fetchJobs = async () => {
      const jobs = await JoblyApi.getJobs(filter);
      setJobs(jobs);
    };
    fetchJobs();
  }, [filter]);

  const handleSearch = (searchTerm) => {
    setFilter(searchTerm);
  };

  if (!jobs) return <h1>Loading......</h1>;
  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <JobList jobs={jobs} />
    </>
  );
};

export default Jobs;
