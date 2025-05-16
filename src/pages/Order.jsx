import { useState } from 'react';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cakeType: '',
    size: '',
    servings: '',
    pickupDate: '',
    pickupTime: '',
    designNotes: '',
    dietaryRestrictions: '',
    specialRequests: ''
  });

  const cakeTypes = [
    'Chocolate',
    'Vanilla',
    'Red Velvet',
    'Carrot',
    'Lemon',
    'Strawberry',
    'Custom Flavor'
  ];

  const cakeSizes = [
    '6" Round (8-10 servings)',
    '8" Round (12-15 servings)',
    '10" Round (20-25 servings)',
    '12" Round (30-35 servings)',
    'Sheet Cake (40+ servings)'
  ];

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
    console.log('Order submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      cakeType: '',
      size: '',
      servings: '',
      pickupDate: '',
      pickupTime: '',
      designNotes: '',
      dietaryRestrictions: '',
      specialRequests: ''
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
              Order a Custom Cake
            </h1>
            <p className="text-xl text-rose-600">
              Let us create your perfect celebration cake
            </p>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-rose-800 mb-6">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-rose-800 font-medium mb-2">
                      Name *
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
                      Email *
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
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>
              </div>

              {/* Cake Details */}
              <div>
                <h2 className="text-2xl font-bold text-rose-800 mb-6">
                  Cake Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="cakeType" className="block text-rose-800 font-medium mb-2">
                      Cake Type *
                    </label>
                    <select
                      id="cakeType"
                      name="cakeType"
                      value={formData.cakeType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      <option value="">Select a cake type</option>
                      {cakeTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="size" className="block text-rose-800 font-medium mb-2">
                      Size *
                    </label>
                    <select
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      <option value="">Select a size</option>
                      {cakeSizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Pickup Information */}
              <div>
                <h2 className="text-2xl font-bold text-rose-800 mb-6">
                  Pickup Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pickupDate" className="block text-rose-800 font-medium mb-2">
                      Pickup Date *
                    </label>
                    <input
                      type="date"
                      id="pickupDate"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="pickupTime" className="block text-rose-800 font-medium mb-2">
                      Pickup Time *
                    </label>
                    <input
                      type="time"
                      id="pickupTime"
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h2 className="text-2xl font-bold text-rose-800 mb-6">
                  Additional Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="designNotes" className="block text-rose-800 font-medium mb-2">
                      Design Notes
                    </label>
                    <textarea
                      id="designNotes"
                      name="designNotes"
                      value={formData.designNotes}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Describe your desired cake design, colors, theme, etc."
                      className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="dietaryRestrictions" className="block text-rose-800 font-medium mb-2">
                      Dietary Restrictions
                    </label>
                    <textarea
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      rows="2"
                      placeholder="List any allergies or dietary restrictions"
                      className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="specialRequests" className="block text-rose-800 font-medium mb-2">
                      Special Requests
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows="2"
                      placeholder="Any other special requests or notes"
                      className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-rose-600 text-white px-6 py-3 rounded-md text-lg hover:bg-rose-700 transition-colors"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order; 