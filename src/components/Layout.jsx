import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-rose-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-rose-800">
                Sweet Crumbs Bakery
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-rose-800 hover:text-rose-600">Home</Link>
              <Link to="/menu" className="text-rose-800 hover:text-rose-600">Menu</Link>
              <Link to="/about" className="text-rose-800 hover:text-rose-600">About Us</Link>
              <Link to="/contact" className="text-rose-800 hover:text-rose-600">Contact</Link>
              <Link to="/order" className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700">
                Order a Cake
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-rose-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-rose-800">Sweet Crumbs Bakery</h3>
              <p className="mt-2 text-rose-600">Creating sweet memories, one crumb at a time.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-rose-800">Hours</h3>
              <p className="mt-2 text-rose-600">
                Monday - Friday: 7am - 7pm<br />
                Saturday: 8am - 6pm<br />
                Sunday: 8am - 4pm
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-rose-800">Contact</h3>
              <p className="mt-2 text-rose-600">
                123 Bakery Street<br />
                Sweetville, SW 12345<br />
                (555) 123-4567<br />
                info@sweetcrumbs.com
              </p>
            </div>
          </div>
          <div className="mt-8 text-center text-rose-600">
            <p>&copy; {new Date().getFullYear()} Sweet Crumbs Bakery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 