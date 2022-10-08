import JobCard from "./JobCard";
import JoblyApi from "../api";

const JobList = ({ jobs = [] }) => {
  const applyButtonClicked = async (username, jobId) => {
    JoblyApi.applyJob(username, jobId);
  };

  return (
    <div>
      {jobs.map((job) => (
        <JobCard
          job={job}
          key={job.id}
          id={job.id}
          onApply={applyButtonClicked}
        />
      ))}
    </div>
  );
};

export default JobList;
