type ButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ title, onClick, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-black text-white rounded-md ${className}`}
    >
      {title}
    </button>
  );
}
