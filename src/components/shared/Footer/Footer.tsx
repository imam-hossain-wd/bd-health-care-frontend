import React from 'react';

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">HealthConnect</h2>
            <p className="mt-4">
              Your one-stop solution for healthcare services including doctors, hospitals, blood banks, ambulances, and telemedicine.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-teal-500">Doctors</a></li>
              <li><a href="#" className="hover:text-teal-500">Hospitals</a></li>
              <li><a href="#" className="hover:text-teal-500">Blood Banks</a></li>
              <li><a href="#" className="hover:text-teal-500">Ambulances</a></li>
              <li><a href="#" className="hover:text-teal-500">Telemedicine</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="mt-4">123 Health Street, Wellness City, HC 54321</p>
            <p className="mt-2">Phone: (123) 456-7890</p>
            <p className="mt-2">Email: contact@healthconnect.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          &copy; {new Date().getFullYear()} HealthConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
