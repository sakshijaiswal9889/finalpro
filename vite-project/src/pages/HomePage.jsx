import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    // Update products state
  }, []);

  return (
    <Box maxW="container.lg" mx="auto" mt="8">
      <Text fontSize="xl" fontWeight="bold" mb="4">Products</Text>
      <SimpleGrid columns={[1, 2, 3]} spacing="4">
        {/* Map over products and display each product as a card */}
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;