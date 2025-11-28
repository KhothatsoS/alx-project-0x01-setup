import React from "react";
import UserCard from "@/components/UserCard";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const UsersPage = () => {
  const users: User[] = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          username={user.username}
        />
      ))}
    </div>
  );
};

export default UsersPage;

export default Users;

