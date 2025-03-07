import { useState } from "react";
import { Button, TextInput } from "@inkblot-therapy/squid";
import { Display } from "@inkblot-therapy/squid";
import useUserStore from "./store/useUserStore.ts";

const App: React.FC = () => {
  const { users, fetchUsers, addUser } = useUserStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="flex flex-col items-center h-screen bg-orange-50">
      <div className="flex flex-col w-2/5 items-center justify-center h-[35%]">
        <Display size="lg">🌲 Kindness</Display>
        <hr className="w-1/2 border-1 border-black mt-2" />
      </div>
      <div className="flex flex-col w-2/5 items-center jusitfy-center h-[65%]">
        <div className="flex flex-col w-1/2">
          <Display size="lg">Welcome!</Display>
          <Display size="md">Some subtext here</Display>
        </div>
        <div className="flex flex-col w-full items-center mt-10">
          <form className="flex flex-col w-full">
            <TextInput
              label="Phone number"
              sanitize
              className="w-full"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(value) => setPhone(value)}
            />
            <Button
              size="sm"
              className="w-3/4 self-center mt-4"
              onClick={() => {
                console.log(phone);
              }}
            >
              Submit
            </Button>
          </form>
        </div>
        {/* <Button onClick={fetchUsers} size="sm">
          Fetch Users
        </Button>
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
        </button> */}
      </div>
    </div>
  );
};

export default App;
