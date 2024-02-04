import { AuthContext, AuthContextData } from 'AuthContext';
import Routes from 'Routes';
import { useState } from 'react';
import './assets/styles/custom.scss';

const App = () => {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      < Routes />
    </AuthContext.Provider>
  )
};

export default App;
