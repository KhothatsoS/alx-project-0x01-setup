import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/types/UserProps";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

export default function UsersPage() {
  const sampleUsers = ["John Doe", "Jane Smith", "Michael Brown"];

return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
};

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Users</h2>

      <ul className="list-disc pl-6 space-y-2">
        {sampleUsers.map((user, index) => (
          <li key={index} className="text-gray-700">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}

