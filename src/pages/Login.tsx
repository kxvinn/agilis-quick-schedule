
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle authentication
    console.log({ email, password });
    
    // For demo purposes, redirect to admin dashboard
    window.location.href = '/admin/dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-agilis-accent ">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
          <ThemeToggle />
        </div>
        
        <Card className="animate-fade-in dark:bg-zinc-900 dark:border-gray-700">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center dark:text-white">
              Welcome back
            </CardTitle>
            <CardDescription className="text-center dark:text-gray-300">
              Log in to your Agilis account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="dark:text-gray-200">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="dark:bg-zinc-800 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="dark:text-gray-200">Password</Label>
                  <Link to="/forgot-password" className="text-xs text-agilis-accent hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="dark:bg-zinc-800 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <Button type="submit" className="w-full bg-agilis-accent hover:bg-agilis-accent/90">
                Log in
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-center w-full text-sm text-gray-600 dark:text-gray-300">
              Don't have an account?{" "}
              <Link to="/signup" className="text-agilis-accent hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
