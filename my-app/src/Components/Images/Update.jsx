import React, { useEffect, useState } from "react";
import './Update.css'
import axios from "axios";

function AxiosFunction() {
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    investment:"",
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
        investment:post.investment
      })
      .then((res) => {
        console.log(res, "res");
        getAllUsers();
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  // PUT request to update user by ID
  const updateUser = () => {
    if (!post.id) {
      alert("Please enter an ID to update");
      return;
    }

    axios
      .put(`http://localhost:8000/api/user/${post.id}`, {
        name: post.name,
        email: post.email,
        phone: post.phone,
        investment:post.investment,

      })
      .then((res) => {
        console.log(res, "res");
        getAllUsers();
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };


  const deleteUser = () => {
    if (!post.id) {
      alert("Please enter an ID to delete");
      return;
    }

    axios
      .delete(`http://localhost:8000/api/user/${post.id}`, {
        name: post.name,
        email: post.email,
        phone: post.phone,
        investment:post.investment,

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
    <div className="up1">
      <div className="form-container">
        <br />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={post.name}
            onChange={handleChange}
            placeholder="Enter name"
          /><br />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={post.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          <br/>
          <label>PhoneNumber:</label>
          <input
            type="text"
            name="phone"
            value={post.phone}
            onChange={handleChange}
            placeholder="Enter phoneNumber"
          /><br/>
          <label>investment:</label>
          <input
            type="text"
            name="investment"
            value={post.investment}
            onChange={handleChange}
            placeholder="Enter investment"
          /> <br/>
        </div>


         
          <button className="submit-btn" onClick={postAllUsers}>
            Submit 
          </button>
          <div className="input-group">
            <h1>Update your data</h1>
          <label>ID (for update)</label>
          <input
            type="text"
            name="id"
            value={post.id}
            onChange={handleChange}
            placeholder="Enter user ID to update"
          />
        <div>
          <button
            className="submit-btn2"
            onClick={updateUser}
            style={{ marginLeft: "10px" }}
          >
            Update 
          </button>


          <div className="input-group2">
            <h1>delete your data</h1>
          <label>ID (for delete)</label>
          <input
            type="text"
            name="id"
            value={post.id}
            onChange={handleChange}
            placeholder="Enter user ID to Delete"
          />
        <div>
          <button
            className="submit-btn2"
            onClick={deleteUser}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      </div>
      </div>
      </div>
      </div>
      
    </>
  );
}

export default AxiosFunction;
