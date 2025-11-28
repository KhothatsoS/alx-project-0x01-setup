type PostCardProps = {
  title: string;
  description: string;
};

export default function PostCard({ title, description }: PostCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
