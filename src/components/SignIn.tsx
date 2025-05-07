
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from './Logo';
import { useTheme } from './ThemeProvider';

interface SignInProps {
  onSignIn: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { theme } = useTheme();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would validate and authenticate here
    if (email && password) {
      onSignIn();
    }
  };
  
  const isPuffy = theme === 'puffy';

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6
      ${isPuffy ? 'bg-white' : 'bg-zeffo-background'}`}>
      
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <Logo size="lg" />
          <h1 className={`mt-6 text-2xl font-bold ${isPuffy ? 'font-rounded' : 'font-display'}`}>
            Welcome to Digihaler
          </h1>
          <p className={`mt-2 text-sm ${isPuffy ? 'text-gray-600' : 'text-gray-400'}`}>
            Sign in to manage your asthma care
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label 
                htmlFor="email" 
                className={`block text-sm font-medium ${isPuffy ? '' : 'text-gray-300'}`}
              >
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={isPuffy ? 'puffy-input mt-1' : 'zeffo-input mt-1'}
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label 
                htmlFor="password" 
                className={`block text-sm font-medium ${isPuffy ? '' : 'text-gray-300'}`}
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={isPuffy ? 'puffy-input mt-1' : 'zeffo-input mt-1'}
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <div>
            <Button
              type="submit"
              className={isPuffy ? 'puffy-button w-full' : 'zeffo-button w-full'}
            >
              Sign in
            </Button>
          </div>
          
          <div className="text-center">
            <a 
              href="#" 
              className={`text-sm font-medium ${isPuffy ? 'text-puffy-primary' : 'text-zeffo-primary'} hover:underline`}
            >
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
