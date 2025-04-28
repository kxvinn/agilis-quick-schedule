
import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import ServicesList from '../../components/admin/ServicesList';

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <AdminSidebar />
      
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-agilis-dark">Services</h1>
          <p className="text-gray-600">Manage your services and pricing.</p>
        </div>
        
        <ServicesList />
      </div>
    </div>
  );
};

export default Services;
