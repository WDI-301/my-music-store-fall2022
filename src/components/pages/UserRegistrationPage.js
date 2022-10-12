import {
  Box, Button, TextField, Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../redux-state/userSlice';
import Axios from '../../utils/Axios';
import Layout from '../layout/Layout';

function UserRegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const [userRegistrationForm, setUserRegistrationForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    profilePicture: '',
  });

  const handleSubmit = async (event) => {
    // Make sure our form is correct. a.k.a. validation.
    event.preventDefault();

    try {
      // if everything is valid in the form
      // submit the network request.
      const response = await Axios.post('/register-user', {
        ...userRegistrationForm,
      });

      const { user } = response.data;
      // receive user information from server and put it in the state.
      dispatch(signIn(user));

      // Navigate back to home page
      navigate('/');
    } catch (e) {
      // send a copy of your errors to a database
      setError(e.message);
    }
  };

  return (
    <Layout>
      <Box mb={4}>
        <Typography fontWeight="bold">Create User Account</Typography>
      </Box>
      <form action="submit" onSubmit={handleSubmit}>
        <Box mb={4}>
          <TextField
            id="firstName"
            label="firstName"
            autoComplete="given-name"
            value={userRegistrationForm.firstName}
            onChange={(event) => setUserRegistrationForm({
              ...userRegistrationForm,
              firstName: event.target.value,
            })}
            required
          />
        </Box>
        <Box mb={4}>
          <TextField
            id="lastName"
            autoComplete="family-name"
            label="lastName"
            value={userRegistrationForm.lastName}
            onChange={(event) => setUserRegistrationForm({
              ...userRegistrationForm,
              lastName: event.target.value,
            })}
            required
          />
        </Box>
        <Box mb={4}>
          <TextField
            id="email"
            label="email"
            autoComplete="email"
            value={userRegistrationForm.email}
            onChange={(event) => setUserRegistrationForm({
              ...userRegistrationForm,
              email: event.target.value,
            })}
            required
          />
        </Box>
        <Box mb={4}>
          <TextField
            id="password"
            label="password"
            type="password"
            value={userRegistrationForm.password}
            onChange={(event) => setUserRegistrationForm({
              ...userRegistrationForm,
              password: event.target.value,
            })}
            required
          />
        </Box>
        <Box mb={4}>
          <TextField
            id="profilePicture"
            label="profilePicture"
            value={userRegistrationForm.profilePicture}
            onChange={(event) => setUserRegistrationForm({
              ...userRegistrationForm,
              profilePicture: event.target.value,
            })}
            required
          />
        </Box>
        {error && (
        <Box border="1px solid red" borderRadius="5px" p={3} mb={2}>
          <Typography textAlign="center">There was an error please try again later.</Typography>
          <Typography textAlign="center">
            Error Message:
            {' '}
            {error}
          </Typography>
        </Box>
        )}
        <Box>
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </Layout>
  );
}

export default UserRegistrationPage;
