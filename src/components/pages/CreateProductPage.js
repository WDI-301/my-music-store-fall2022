import { Box, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Axios from '../../utils/Axios';
import Layout from '../layout/Layout';

function CreateProductPage() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    brand: '',
    price: '',
    image: '',
  });

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate('/');
    }
  }, []);

  if (!user || !user.isAdmin) {
    return 'redirecting';
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await Axios.post('/create-product', {
      productData: {
        title: productData.title,
        description: productData.description,
        brand: productData.brand,
        price: Number(productData.price),
        image: productData.image,
      },
    });

    navigate('/');
  };

  return (
    <Layout>
      <form action="submit" onSubmit={handleSubmit}>
        <Box mb={4}>
          <TextField
            id="title"
            label="title"
            value={productData.title}
            onChange={(event) => setProductData({
              ...productData,
              title: event.target.value,
            })}
            required
          />
        </Box>
        <Box mb={4}>
          <TextField
            id="description"
            label="description"
            value={productData.description}
            onChange={(event) => setProductData({
              ...productData,
              description: event.target.value,
            })}
            required
          />
        </Box>
        <Box mb={4}>
          <TextField
            id="brand"
            label="brand"
            value={productData.brand}
            onChange={(event) => setProductData({
              ...productData,
              brand: event.target.value,
            })}
            required
          />
        </Box>
        <Box mb={4}>
          <TextField
            id="price"
            label="price"
            type="number"
            value={productData.price}
            onChange={(event) => setProductData({
              ...productData,
              price: event.target.value,
            })}
            required
          />
        </Box>
        <Box mb={4}>
          <TextField
            id="image"
            label="image"
            value={productData.image}
            onChange={(event) => setProductData({
              ...productData,
              image: event.target.value,
            })}
            required
          />
        </Box>
        <Box>
          <img style={{ width: '200px', height: '200px', objectFit: 'cover' }} src={productData.image} alt="product" />
        </Box>
        <Box>
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </Layout>
  );
}

export default CreateProductPage;
