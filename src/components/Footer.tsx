
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-agilis-dark dark:text-white">
                Agilis<span className="text-agilis-accent">.</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-4 dark:text-white">
              Agendamento simples para empresas de serviços
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-agilis-dark mb-4 dark:text-white">Produto</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-agilis-accent dark:text-gray-300 hover:scale-105 dark:hover:scale-105 dark:hover:text-yellow-400">Funcionalidades</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-agilis-accent dark:text-gray-300 hover:scale-105 dark:hover:scale-105 dark:hover:text-yellow-400">Investimento</Link></li>
              <li><Link to="/integrations" className="text-gray-600 hover:text-agilis-accent dark:text-gray-300 hover:scale-105 dark:hover:scale-105 dark:hover:text-yellow-400">Integrações</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-agilis-dark mb-4 dark:text-white">Recursos</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-agilis-accent dark:text-gray-300 hover:scale-105 dark:hover:scale-105 dark:hover:text-yellow-400">Blog</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-agilis-accent dark:text-gray-300 hover:scale-105 dark:hover:scale-105 dark:hover:text-yellow-400">Central de Suporte</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-agilis-accent dark:text-gray-300 hover:scale-105 dark:hover:scale-105 dark:hover:text-yellow-400">Nosso Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-agilis-dark mb-4 dark:text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-agilis-accent dark:text-gray-300 hover:scale-105 dark:hover:scale-105 dark:hover:text-yellow-400">Políticas de Privacidade</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-agilis-accent dark:text-gray-300 hover:scale-105 dark:hover:scale-105 dark:hover:text-yellow-400">Termos de Serviço</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-agilis-accent dark:text-gray-300 hover:scale-105 dark:hover:scale-105 dark:hover:text-yellow-400">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-100 text-center dark:text-gray-300 ">
          <p className="text-gray-600 dark:text-white">
            &copy; {new Date().getFullYear()} Agilis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
