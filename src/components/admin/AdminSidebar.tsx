
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Clock, Users, Settings, LogOut } from "lucide-react";

const navItems = [
  { 
    label: "Dashboard", 
    path: "/admin/dashboard", 
    icon: <Calendar className="h-5 w-5" /> 
  },
  { 
    label: "Serviços", 
    path: "/admin/services", 
    icon: <Clock className="h-5 w-5" /> 
  },
  { 
    label: "Clientes", 
    path: "/admin/customers", 
    icon: <Users className="h-5 w-5" /> 
  },
  { 
    label: "Configurações", 
    path: "/admin/settings", 
    icon: <Settings className="h-5 w-5" /> 
  }
];

const AdminSidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="bg-white dark:bg-zinc-950 border-r border-gray-200 dark:border-gray-700 h-screen w-64 fixed left-0 top-0 z-30">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <Link to="/admin/dashboard" className="flex items-center">
            <span className="text-xl font-bold text-agilis-dark dark:text-white">
              Agilis<span className="text-agilis-accent">.</span>
            </span>
          </Link>
        </div>
        
        <nav className="flex-1 pt-4 pb-4 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-agilis-accent/10 text-agilis-accent"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            to="/"
            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span>Sair</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
