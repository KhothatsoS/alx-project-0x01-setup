import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  const samplePosts = [
    { title: "First Post", description: "This is the first sample post." },
    { title: "Second Post", description: "Another example post here." },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {samplePosts.map((post, index) => (
          <PostCard key={index} title={post.title} description={post.description} />
        ))}
      </div>
    </div>
  );
}
