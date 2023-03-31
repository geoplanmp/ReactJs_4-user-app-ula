import { useState } from "react";
import "./UsersList.css";

const UsersList = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    usertype: "Admin",
  });

  const [users, setUsers] = useState([]);

  const [usertype, setUsertype] = useState(formData.usertype);

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    setFormData((prevDataForm) => {
      return { ...prevDataForm, [name]: target.value };
    });
  };

  const setUser = (e) => {
    e.preventDefault();
    setUsers(users.concat({ ...formData, id: Date.now() }));
  };

  const removeUser = (id) => {
    const filteredUsers = users.filter(user=>user.id !== id)
    setUsers(filteredUsers)
  }

  // let type = "Admin";
  const showOnlyAdmins = () => {
    // const filteredUsers = users.filter(user=>user.usertype === type)
    // setUsers(filteredUsers)
    console.log(usertype);
  }

  const showOnlyUsers = (type) => {
    // const filteredUsers = users.filter(user=>user.usertype !== type)
    // setUsers(filteredUsers)
  }
  
  const showAll = (type) => {
    // const filteredUsers = users.filter(user=>user.usertype !== type)
    // setUsers(filteredUsers)
  }

  return (
    <div className="usersList">
      <form onSubmit={setUser}>
        <button type="submit" onClick={showOnlyAdmins}>Show only admins</button>
        <button type="submit"onClick={showOnlyUsers}>Show only users</button>
        <button type="submit" onClick={showAll}>Show all</button><br></br>
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="User name"
          onChange={handleInputChange}
          value={formData.username}
        />
        <label htmlFor="email">User email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="User email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <label htmlFor="usertype">User type</label>
        <select id="usertype" name="usertype" onChange={handleInputChange}>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button>Save</button>
      </form>

      <div className="list">
        {users.map((user) => {
          return (
            <div className="userItem" key={user.id} onClick={()=>removeUser(user.id)} >
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.usertype}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
