import React, { useEffect, useState } from "react";

import axios from "axios";

function AxiosFunction() {
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const getAllUsers = () => {
    axios
      .get("http://localhost:8000/api/user")
      .then((res) => {
        console.log(res, "res");
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const postAllUsers = () => {
    axios
      .post("http://localhost:8000/api/user", {
        name: post.name,
        email: post.email,
        phone: post.phone,
      })
      .then((res) => {
        console.log(res, "res");
        getAllUsers();
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  return (
    <>
      <div className="form-container">
       

        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={post.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={post.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          <label>PhoneNumber</label>
          <input
            type="text"
            name="phone"
            value={post.phone}
            onChange={handleChange}
            placeholder="Enter phoneNumber"
          />
        </div>
        <div>
          <button className="submit-btn" onClick={postAllUsers}>
            submit
          </button>
        </div>
      </div>
    </>
  );
}

export default AxiosFunction