import Navbar from "../../../components/Navbar";
import { mockFetchUsers } from "../../../mocks/api";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    mockFetchUsers().then(setUsers);
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className="p-4 font-bold">User Management</h2>
      <ul className="px-4">
        {users.map((user: any) => (
          <li key={user.id}>{user.name} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
}