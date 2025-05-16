import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="bg-rose-50">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-rose-100">
        <div className="absolute inset-0 bg-rose-200 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-rose-600">
              We'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-rose-800 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-rose-800 mb-2">
                    Visit Us
                  </h3>
                  <p className="text-rose-600">
                    123 Bakery Street<br />
                    Sweetville, SW 12345
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-rose-800 mb-2">
                    Hours
                  </h3>
                  <p className="text-rose-600">
                    Monday - Friday: 7am - 7pm<br />
                    Saturday: 8am - 6pm<br />
                    Sunday: 8am - 4pm
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-rose-800 mb-2">
                    Contact
                  </h3>
                  <p className="text-rose-600">
                    Phone: (555) 123-4567<br />
                    Email: info@sweetcrumbs.com
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-rose-200 h-64 rounded-lg">
                <div className="w-full h-full flex items-center justify-center text-rose-400">
                  [Map Placeholder]
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-rose-800 mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-rose-800 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-rose-800 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-rose-800 font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-rose-800 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-rose-600 text-white px-6 py-3 rounded-md text-lg hover:bg-rose-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 