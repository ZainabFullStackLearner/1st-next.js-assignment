import Link from  'next/link';

const Navbar = () => {
  return (
        <nav className='bg-purple-300'>
          <ul className='flex space-x-9 font-semibold'>
            
            <li className='ml-20 pt-4 pb-4 text-2xl'>
              <Link href="/">Home</Link>
            </li>
            <li className='pt-4 pb-4 text-2xl'>
              <Link href="/about">About</Link>
            </li>
            <li className='pt-4 pb-4 text-2xl'>
              <Link href="programming/jobs">Job</Link>
            </li>
            <li  className='pt-4 pb-4 text-2xl'>

              <Link href="/programming">Programming</Link>
            </li>
          </ul>
        </nav>
      );
    };
export default Navbar;