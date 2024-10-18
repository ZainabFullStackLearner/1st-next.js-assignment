export default async function Aboutpg(){
await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data loaded');
    }, 2000); // 2 seconds delay
  });
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-blue-500 text-4xl font-bold text-left"> Welcome to About Page:</h1>
      <p className="mt-6 text-2xl">This is about page which is created by using next.js and styled by using tailwind.css</p>
    </div>
  )
};