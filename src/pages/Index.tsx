
import React, { useState } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import SignIn from '@/components/SignIn';
import ModeSelection from '@/components/ModeSelection';
import Dashboard from '@/components/Dashboard';

// App states
type AppState = 'signIn' | 'modeSelection' | 'dashboard';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('signIn');
  
  const handleSignIn = () => {
    setAppState('modeSelection');
  };
  
  const handleModeSelection = () => {
    setAppState('dashboard');
  };
  
  const handleSignOut = () => {
    setAppState('signIn');
  };
  
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen">
        {appState === 'signIn' && (
          <SignIn onSignIn={handleSignIn} />
        )}
        
        {appState === 'modeSelection' && (
          <ModeSelection onModeSelect={handleModeSelection} />
        )}
        
        {appState === 'dashboard' && (
          <Dashboard onSignOut={handleSignOut} />
        )}
      </div>
    </ThemeProvider>
  );
};

export default Index;
