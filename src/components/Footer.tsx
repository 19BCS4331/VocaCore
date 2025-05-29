import React from 'react';
import { Phone, Mail, MapPin, Github, Twitter, Linkedin, Facebook } from 'lucide-react';
import lightLogo from '../assets/images/vocacore-white.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={lightLogo} 
                alt="VocaCore Logo" 
                className="h-20 w-auto mr-2" 
              />
              {/* <span className="text-xl font-bold">VocaCore</span> */}
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing business communication with AI-powered calling solutions for inbound and outbound calls.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-purple-400 transition-colors">How It Works</a></li>
              <li><a href="#industries" className="text-gray-400 hover:text-purple-400 transition-colors">Industries</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-purple-400 transition-colors">Demo</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-purple-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                <span className="text-gray-400">123 AI Street, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                <span className="text-gray-400">info@aicaller.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} VocaCore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;