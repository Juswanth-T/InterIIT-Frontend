interface BoxProps {
  name: string;
  description: string;
}
export default function Box ({ name, description } : BoxProps ){
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-1/4">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <button className="bg-blue-500 text-white mt-2 py-2 px-4 rounded-md">
      <a href="/registration/form">Register</a>
    </button>
    </div>
  );
}
