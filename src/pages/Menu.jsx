const Menu = () => {
  const menuItems = [
    {
      id: 1,
      category: 'Cakes',
      items: [
        {
          id: 1,
          name: 'Classic Chocolate Cake',
          description: 'Rich, moist chocolate cake with ganache frosting',
          price: '$35',
          image: '/images/chocolate-cake.jpg'
        },
        {
          id: 2,
          name: 'Vanilla Bean Cake',
          description: 'Light and fluffy vanilla cake with buttercream frosting',
          price: '$32',
          image: '/images/vanilla-cake.jpg'
        },
        {
          id: 3,
          name: 'Red Velvet Cake',
          description: 'Classic red velvet with cream cheese frosting',
          price: '$38',
          image: '/images/red-velvet.jpg'
        }
      ]
    },
    {
      id: 2,
      category: 'Cupcakes',
      items: [
        {
          id: 1,
          name: 'Vanilla Bean Cupcakes',
          description: 'Light and fluffy cupcakes with vanilla bean frosting',
          price: '$24/dozen',
          image: '/images/vanilla-cupcakes.jpg'
        },
        {
          id: 2,
          name: 'Chocolate Cupcakes',
          description: 'Rich chocolate cupcakes with chocolate ganache',
          price: '$26/dozen',
          image: '/images/chocolate-cupcakes.jpg'
        }
      ]
    },
    {
      id: 3,
      category: 'Bread',
      items: [
        {
          id: 1,
          name: 'Sourdough Bread',
          description: 'Artisanal sourdough bread made fresh daily',
          price: '$8/loaf',
          image: '/images/sourdough.jpg'
        },
        {
          id: 2,
          name: 'Baguette',
          description: 'Traditional French baguette',
          price: '$6/loaf',
          image: '/images/baguette.jpg'
        }
      ]
    }
  ];

  return (
    <div className="py-12 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-rose-800 text-center mb-12">
          Our Menu
        </h1>

        {menuItems.map((category) => (
          <div key={category.id} className="mb-16">
            <h2 className="text-3xl font-semibold text-rose-800 mb-8">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-rose-200">
                    <div className="w-full h-full flex items-center justify-center text-rose-400">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-rose-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-rose-600 mb-4">{item.description}</p>
                    <p className="text-rose-800 font-semibold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <p className="text-rose-600 mb-4">
            Don't see what you're looking for? We offer custom orders!
          </p>
          <a
            href="/order"
            className="inline-block bg-rose-600 text-white px-8 py-3 rounded-md text-lg hover:bg-rose-700 transition-colors"
          >
            Order Custom Cake
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu; 