import { useEffect, useState } from "react";
import SearchForm from "../search/SearchForm";
import JobList from "./JobList";
import JoblyApi from "../api";

const Jobs = () => {
  const [jobs, setJobs] = useState();
  const [filter, setFilter] = useState("");

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
