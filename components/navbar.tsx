import Link from 'next/link';

const Navbar = (): JSX.Element => {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-gray-100 text-2xl font-bold">
           
              Petner
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/AboutPage" className="text-gray-100 hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/BookAService" className="text-gray-100 hover:text-gray-300">
                Book A service NOW!
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
