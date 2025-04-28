
import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import CustomersList from '../../components/admin/CustomersList';

const Customers = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <AdminSidebar />
      
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-agilis-dark">Customers</h1>
          <p className="text-gray-600">View and manage your customer information.</p>
        </div>
        
        <CustomersList />
      </div>
    </div>
  );
};

export default Customers;
