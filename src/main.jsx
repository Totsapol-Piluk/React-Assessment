import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/style/index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import Navbar from "./Nav";
const initialData = [];

const TableAdmin = () => {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    setMembers(initialData);
  }, []);

  const save = () => {
    const newMember = {
      id: members.length + 1, 
      name: name,
      last: last,
      position: position,
    };
    setMembers([...members, newMember]);
  };

  return (
    <div>
      <h1>Create User Here</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(ev) => setName(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={(ev) => setLast(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          onChange={(ev) => setPosition(ev.target.value)}
        />
        <button onClick={save}>Save</button>
      </div>
      <TableUser members={members} />
    </div>
  );
};

const TableUser = ({ members }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last name</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <tr key={member.id}>
            <td>{member.name}</td>
            <td>{member.last}</td>
            <td>{member.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableUser2 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last name</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <tr key={member.id}>
            <td>{member.name}</td>
            <td>{member.last}</td>
            <td>{member.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
      </>
    ),
  },
  {
    path: "/page-2",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/user",
    element: (
      <>
        <Navbar />
        <Home />
        
      </>
    ),
  },
  {
    path: "/admin",
    element: (
      <>
        <Navbar />
        <Home />
        <TableAdmin />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
