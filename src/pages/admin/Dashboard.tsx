
import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import StatsCards from '../../components/admin/StatsCards';
import AppointmentList from '../../components/admin/AppointmentList';

const Dashboard = () => {
  return (
    <div className="bg-gray-50 dark:bg-zinc-950 min-h-screen">
      <AdminSidebar />
      
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-agilis-dark dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Bem-vindo de volta! Aqui está um resumo do seu negócio.</p>
        </div>
        
        <StatsCards />
        <AppointmentList />
      </div>
    </div>
  );
};

export default Dashboard;
