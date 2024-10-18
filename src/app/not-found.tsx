// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-red-400 font-medium text-2xl mt-11">404 - Page Not Found</h1>
      <p  className="text-red-400 font-medium text-2xl ">Sorry, the page you are looking for does not exist.</p>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBRx62AEqlkPwYhvCThIkCzKfq82LDIT4tg&s" alt="logo" 
  className="h-24 "  />
    </div>
  );
}
