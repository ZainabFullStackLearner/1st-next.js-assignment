// app/about/error.tsx
'use client';
interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-blue-500 text-2xl font-bold text-left">Oops! Something went wrong.</h1>
      <p className="text-2xl text-red-500">{error.message}</p>
      <button className="bg-teal-700 rounded pl-4 pr-4 pt-3 pb-3 hover:bg-teal-400 text-yellow-100" onClick={reset}>Try Again</button>
    </div>
  );
}

