import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './AuthContext';
import theme from './theme';
import Routes from './Routes'; // Create this file for routing

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;