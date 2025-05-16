const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Head Baker & Owner',
      bio: 'With over 15 years of experience in baking, Sarah brings passion and creativity to every creation.',
      image: '/images/sarah.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Pastry Chef',
      bio: 'Specializing in French pastries, Michael adds an international flair to our menu.',
      image: '/images/michael.jpg'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Cake Decorator',
      bio: 'Emma\'s artistic background brings unique and beautiful designs to our custom cakes.',
      image: '/images/emma.jpg'
    }
  ];

  return (
    <div className="bg-rose-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-rose-100">
        <div className="absolute inset-0 bg-rose-200 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4">
              Our Story
            </h1>
            <p className="text-xl text-rose-600">
              Creating sweet memories since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-rose-800 mb-6">
                The Sweet Crumbs Journey
              </h2>
              <p className="text-rose-600 mb-4">
                Sweet Crumbs Bakery began as a small home kitchen experiment in 2010. 
                What started as a passion project quickly grew into a beloved local bakery, 
                known for our commitment to quality ingredients and creative designs.
              </p>
              <p className="text-rose-600 mb-4">
                Our philosophy is simple: use the finest ingredients, maintain traditional 
                baking methods, and add a touch of innovation to create memorable treats 
                that bring joy to our customers.
              </p>
              <p className="text-rose-600">
                Today, we're proud to serve our community with a wide range of baked goods, 
                from classic favorites to custom creations for special occasions.
              </p>
            </div>
            <div className="bg-rose-200 h-96 rounded-lg">
              {/* Add bakery interior image later */}
              <div className="w-full h-full flex items-center justify-center text-rose-400">
                [Bakery Interior Image]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-rose-800 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 bg-rose-200 rounded-full overflow-hidden">
                  {/* Add team member images later */}
                  <div className="w-full h-full flex items-center justify-center text-rose-400">
                    [Photo]
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-rose-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-rose-600 font-medium mb-2">{member.role}</p>
                <p className="text-rose-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-rose-800 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-rose-800 mb-4">
                Quality First
              </h3>
              <p className="text-rose-600">
                We use only the finest ingredients and maintain strict quality standards 
                in everything we bake.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-rose-800 mb-4">
                Customer Focus
              </h3>
              <p className="text-rose-600">
                Your satisfaction is our priority. We work closely with you to create 
                the perfect baked goods for any occasion.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-rose-800 mb-4">
                Community
              </h3>
              <p className="text-rose-600">
                We're proud to be part of our local community and support various 
                charitable initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 