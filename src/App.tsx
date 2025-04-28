
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import Dashboard from "./pages/admin/Dashboard";
import Services from "./pages/admin/Services";
import Customers from "./pages/admin/Customers";
import Settings from "./pages/admin/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking/confirmation" element={<BookingConfirmation />} />
            
            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/services" element={<Services />} />
            <Route path="/admin/customers" element={<Customers />} />
            <Route path="/admin/settings" element={<Settings />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
