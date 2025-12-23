```jsx
import React from 'react';
import { Phone, Mail, MapPin, Camera, Leaf, Scissors, Truck, Calendar, MessageCircle, Star } from 'lucide-react';

const App = () => {
  const services = [
    {
      title: "Yard Cleanups",
      description: "Full yard restoration when it's overdue or neglected"
    },
    {
      title: "Weed Removal",
      description: "Complete weed clearing and prevention"
    },
    {
      title: "Gravel Cleaning",
      description: "Power blow and clean gravel areas"
    },
    {
      title: "Turf Cleaning",
      description: "Clean and refresh artificial turf"
    },
    {
      title: "Bush & Tree Trimming",
      description: "Professional pruning and shaping"
    },
    {
      title: "Debris Removal",
      description: "Remove branches, leaves, and yard waste"
    },
    {
      title: "Trash-to-Curb Service",
      description: "Weekly trash and recycling pickup"
    },
    {
      title: "Monthly/Biweekly Maintenance",
      description: "Regular upkeep to keep your yard perfect"
    }
  ];

  const beforeAfterPhotos = [
    { id: 1, before: "https://placehold.co/400x300/e6d3a7/333333?text=Before+Cleanup", after: "https://placehold.co/400x300/22c55e/ffffff?text=After+Cleanup" },
    { id: 2, before: "https://placehold.co/400x300/e6d3a7/333333?text=Overgrown+Yard", after: "https://placehold.co/400x300/22c55e/ffffff?text=Clean+Yard" },
    { id: 3, before: "https://placehold.co/400x300/e6d3a7/333333?text=Weedy+Gravel", after: "https://placehold.co/400x300/22c55e/ffffff?text=Clean+Gravel" },
    { id: 4, before: "https://placehold.co/400x300/e6d3a7/333333?text=Messy+Turf", after: "https://placehold.co/400x300/22c55e/ffffff?text=Fresh+Turf" }
  ];

  const phoneNumber = "602-931-9494";
  const formatPhoneNumber = (num) => num.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-emerald-800">YardworkAZ</h1>
                <p className="text-sm text-gray-600">Arizona Yard Cleanup & Maintenance</p>
              </div>
            </div>
            <a href={`tel:+1${phoneNumber.replace(/\D/g, '')}`} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold text-lg flex items-center space-x-2 transition-colors">
              <Phone className="h-5 w-5" />
              <span>Call or Text AJ</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-amber-600 text-white">
        <div className="container mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Arizona Yard Cleanup & Maintenance
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your yard is overdue? We'll transform it back to clean and beautiful—fast.
          </p>
          <a href={`tel:+1${phoneNumber.replace(/\D/g, '')}`} className="bg-white text-emerald-800 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors inline-flex items-center space-x-2">
            <Phone className="h-6 w-6" />
            <span>Call or Text AJ: {formatPhoneNumber(phoneNumber)}</span>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">We handle everything from full cleanups to regular maintenance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="border border-emerald-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-emerald-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">How Pricing Works</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every yard is different. Send photos → AJ sends quote. Most cleanups fall between $150–$600+.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="text-center md:text-left">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <Camera className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Send Photos</h3>
                <p className="text-gray-600">Text photos of your yard to AJ</p>
              </div>
              <div className="text-4xl text-emerald-600">→</div>
              <div className="text-center md:text-left">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <MessageCircle className="h-8 w-8 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Get Quote</h3>
                <p className="text-gray-600">AJ replies with a fair price</p>
              </div>
              <div className="text-4xl text-emerald-600">→</div>
              <div className="text-center md:text-left">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <Leaf className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Get Clean Yard</h3>
                <p className="text-gray-600">We transform your yard fast</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg">
                <span className="text-2xl font-bold">$150 – $600+</span>
                <p className="text-sm mt-1">Most yard cleanups</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Before & After</h2>
            <p className="text-gray-600 text-lg">See the transformations we've done</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfterPhotos.map((photo, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2">
                    <img src={photo.before} alt="Before cleanup" className="w-full h-48 object-cover rounded" />
                    <p className="text-center text-sm font-medium mt-2 text-gray-700">Before</p>
                  </div>
                  <div className="p-2">
                    <img src={photo.after} alt="After cleanup" className="w-full h-48 object-cover rounded" />
                    <p className="text-center text-sm font-medium mt-2 text-gray-700">After</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Quote Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Text photos of your yard to AJ and get a fast, fair quote
          </p>
          <div className="bg-white text-emerald-800 rounded-lg p-6 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <p className="font-bold text-lg">Call or Text AJ</p>
                <p className="text-emerald-700">{formatPhoneNumber(phoneNumber)}</p>
              </div>
            </div>
          </div>
          <p className="text-emerald-100">
            Fast response • Fair pricing • Quality work
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Leaf className="h-6 w-6 text-amber-400" />
            <h3 className="text-xl font-bold">YardworkAZ</h3>
          </div>
          <p className="text-emerald-200 mb-2">Owner: AJ (Andres Gonzalez)</p>
          <p className="text-emerald-200 mb-2">Chandler, Arizona</p>
          <p className="text-emerald-200">Serving the greater Phoenix area</p>
          <div className="mt-6 pt-6 border-t border-emerald-800">
            <p className="text-emerald-300">© 2025 YardworkAZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
```
