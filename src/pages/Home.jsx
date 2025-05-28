import { Link } from 'react-router-dom';

const Home = () => {
  const featuredItems = [
    {
      id: 1,
      name: 'Classic Chocolate Cake',
      description: 'Rich, moist chocolate cake with ganache frosting',
      price: '$35',
      image: '/images/chocolate-cake.jpg'
    },
    {
      id: 2,
      name: 'Vanilla Bean Cupcakes',
      description: 'Light and fluffy cupcakes with vanilla bean frosting',
      price: '$24/dozen',
      image: '/images/vanilla-cupcakes.jpg'
    },
    {
      id: 3,
      name: 'Sourdough Bread',
      description: 'Artisanal sourdough bread made fresh daily',
      price: '$8/loaf',
      image: '/images/sourdough.jpg'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-rose-50">
        <div className="absolute inset-0 bg-rose-100 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-rose-800 mb-4">
              Welcome to Sweet Crumbs Bakery
            </h1>
            <p className="text-xl text-rose-600 mb-8">
              Where every bite tells a story of passion, tradition, and love for baking.
            </p>
            <Link
              to="/menu"
              className="bg-rose-600 text-white px-8 py-3 rounded-md text-lg hover:bg-rose-700 transition-colors"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-rose-800 text-center mb-12">
            Featured Treats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-rose-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-rose-200">
                  {/* Add actual images later */}
                    <div className="w-full h-full flex items-center justify-center text-rose-400">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rose-800 mb-2">{item.name}</h3>
                  <p className="text-rose-600 mb-4">{item.description}</p>
                  <p className="text-rose-800 font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-rose-800 mb-4">
            Need a Custom Cake?
          </h2>
          <p className="text-xl text-rose-600 mb-8">
            Let us create the perfect cake for your special occasion.
          </p>
          <Link
            to="/order"
            className="bg-rose-600 text-white px-8 py-3 rounded-md text-lg hover:bg-rose-700 transition-colors"
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 