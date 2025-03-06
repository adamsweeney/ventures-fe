import { useState } from "react";
import useUserStore from "./store/useUserStore.ts";

const App: React.FC = () => {
  const { users, fetchUsers, addUser } = useUserStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h1>React + Zustand + Fastify + Prisma (TypeScript)</h1>
      <button onClick={fetchUsers}>Fetch Users</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>

      <h2>Add User</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={() => {
          addUser(name, email);
          setName("");
          setEmail("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default App;
