import { useEffect, useState, useContext } from "react";
import { UserContext } from "../hooks/UserContext";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const JobCard = ({ job, id }) => {
  const { hasAppliedJob, applyJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(() => {
    const updateAppliedStatus = () => {
      setApplied(hasAppliedJob(id));
    };
    updateAppliedStatus();
  }, [id, hasAppliedJob]);

  const onApplyClick = async () => {
    if (hasAppliedJob(id)) return;
    applyJob(id);
    setApplied(true);
  };
  return (
    <Card
      style={{
        width: "500px",
      }}
    >
      <CardBody>
        <CardTitle tag="h3">{job.title}</CardTitle>
        {job.companyName && (
          <>
            <CardText>
              <b>Company:</b> {job.companyName}
            </CardText>
          </>
        )}
        {job.salary && (
          <>
            <CardText>
              <b>Salary:</b> {job.salary}
            </CardText>
          </>
        )}
        {job.equity && (
          <>
            <CardText>
              <b>Equity:</b> {job.equity}
            </CardText>
          </>
        )}
        <Button
          className="btn btn-danger"
          onClick={onApplyClick}
          disabled={applied}
        >
          {applied ? "Applied" : "Apply"}
        </Button>
      </CardBody>
    </Card>
  );
};

export default JobCard;
