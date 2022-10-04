import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { productList } from '../../mockData';
import Layout from '../layout/Layout';
import ProductDisplay from '../ProductDisplay';

// Mocked fetch Data function
export const fetchProductData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(productList);
  }, 4000);
});

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductData().then((response) => setProducts(response));
  }, []);

  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center">
        {products.map((product) => (
          <Box mb={6} key={product.id}>
            <ProductDisplay productData={product} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
}

export default HomePage;
