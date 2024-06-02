import React, { useEffect, useState } from 'react';
import { useParams, Box, Text } from '@chakra-ui/react';
import axios from 'axios';

const ProductDetailsPage = () => {
  const { id } = useParams(); // Get the product ID from URL parameters
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://api.example.com/products/${id}`); // Replace 'https://api.example.com/products/' with your API endpoint
        setProduct(response.data); // Update product state with fetched product details
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]); // Fetch product details whenever the product ID changes

  return (
    <Box maxW="container.lg" mx="auto" mt="8">
      {product ? (
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb="4">{product.title}</Text>
          <Text fontSize="lg" mb="4">Category: {product.category}</Text>
          <Text fontSize="lg">Price: {product.price}</Text>
        </Box>
      ) : (
        <Text>Loading...</Text>
      )}
    </Box>
  );
};

export default ProductDetailsPage;