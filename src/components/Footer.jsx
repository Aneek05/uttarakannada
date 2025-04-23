import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative text-white py-16 px-6 mt-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/coastal-footer.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-4 gap-6 z-10">
        <div>
          <h4 className="font-semibold text-lg mb-2">Uttara Kannada Tourism</h4>
          <p className="text-sm">Promoting the beauty, heritage, and culture of Karwar & Coastal Karnataka.</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#plan">Plan Your Trip</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">Newsletter</h4>
          <form className="flex flex-col gap-2">
            <input type="email" placeholder="Enter your email" className="p-2 rounded text-black" />
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded">Subscribe</button>
          </form>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">Contact</h4>
          <p className="text-sm">Karwar Tourist Office</p>
          <p className="text-sm">📞 +91 81234 56789</p>
          <p className="text-sm">📩 tourism.karwar@gov.in</p>
        </div>
      </div>
      <p className="text-center mt-10 text-sm text-gray-400 relative z-10">© 2025 Uttara Kannada Tourism. All Rights Reserved. | <p>  Designed & Developed by <a href="https://www.allverse-studios.com" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">AllVerse Studios</a> </p>
</p>
    </footer>
  );
};

export default Footer;
