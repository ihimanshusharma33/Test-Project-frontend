import { Link } from 'react-router-dom';

export default function AuthLayout({ children, title }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">{title}</h2>
        {children}
      </div>
    </div>
  );
}