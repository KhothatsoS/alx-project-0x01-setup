export default function UsersPage() {
  const sampleUsers = ["John Doe", "Jane Smith", "Michael Brown"];

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
