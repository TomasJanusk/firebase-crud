import WorksTable from "../workstable/WorksTable";
import { Link } from "react-router-dom";
import * as service from "../../services/worksCrudServices";
import { useEffect } from "react";
import { useState } from "react";

const Works = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    service.getAllWorks((works) => {
      setWorks(works);
    });
  }, []);
  console.log(works);
  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-item btn btn-primary" to="/add-work">
            Prideti atlikta darba
          </Link>
        </li>
      </ul>
      <h2>Works</h2>
      <WorksTable data={works} />
    </div>
  );
};
export default Works;
