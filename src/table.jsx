import React, { useEffect, useState } from "react";

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
      id: members.length + 1,  // ตั้งค่า id ให้เป็นเลขจำนวนเต็ม
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

export { TableAdmin, TableUser };