import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  
  

  const [employ, setEmploy] = useState([]);

  const getAllEmploy = () => {
    axios
      .get("http://localhost:8000/api/user")
      .then((res) => {
        console.log(res, "res");
        setEmploy(res.data.user);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  useEffect(() => {
    getAllEmploy();
  }, []);

  return (
    <>
      <h2>Employ</h2>
      <div>
        {employ.map((employ1) => (
          <div>
            <h4>{employ1.email}</h4>
            <p>{employ1.name}</p>
            <p>{employ1.age}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
