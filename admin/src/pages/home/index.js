import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "reactstrap";

const jobs = ["Fullstack Developer", "Math modeller", "Android Developer"];

const Home = () => {
  const [job, setJob] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(job !== jobs.length-1){
        setJob(job + 1);
      } else {
        setJob(0);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [job]);
  
  return (
    <Container className="pt-5">
      <div>
        <h1 className="poppins-bold">Hello, Sa'di is here</h1>
        <div id="job" style={{width: `${jobs[job].length*9.5 + 65}px`}}>
          <h4 className="typewriter">{jobs[job]}</h4>
        </div>
        <p>
          I'm Fullstack Developer based in Bandung, and i'm very passionate and
          dedicate to my work.
        </p>
      </div>
      <Button color="dark" className="mb-5">
        See more
        <i className="bi bi-chevron-right ms-1"></i>
      </Button>
      <Card className="p-3">
        <h1 className="poppins-semibold">Education</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Card>
    </Container>
  );
};

export default Home;
