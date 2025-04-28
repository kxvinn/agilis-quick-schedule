
import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import StatsCards from '../../components/admin/StatsCards';
import AppointmentList from '../../components/admin/AppointmentList';

const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <AdminSidebar />
      
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-agilis-dark">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's an overview of your business.</p>
        </div>
        
        <StatsCards />
        <AppointmentList />
      </div>
    </div>
  );
};

export default Dashboard;
