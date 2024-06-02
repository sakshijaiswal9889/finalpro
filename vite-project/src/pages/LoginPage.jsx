import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToast, FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';
import axios from 'axios';

const LoginPage = () => {
  const history = useHistory();
  const toast = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Make POST request to login endpoint with email and password
      // If login is successful, redirect to Home Page
      // If login fails, display error message
    } catch (error) {
      // Display error message if request fails
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="8">
      <FormControl id="email" mb="4">
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl id="password" mb="4">
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button colorScheme="blue" onClick={handleLogin} mb="4">
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;