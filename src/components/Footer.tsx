
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-agilis-dark">
                Agilis<span className="text-agilis-accent">.</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Agendamento simples para empresas de serviços
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-agilis-dark mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-agilis-accent">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-agilis-accent">Pricing</Link></li>
              <li><Link to="/integrations" className="text-gray-600 hover:text-agilis-accent">Integrations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-agilis-dark mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-agilis-accent">Blog</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-agilis-accent">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-agilis-accent">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-agilis-dark mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-agilis-accent">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-agilis-accent">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-agilis-accent">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Agilis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
