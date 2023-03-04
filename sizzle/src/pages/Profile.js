import { useState } from 'react';
import {
  Box,
  Center,
  Container,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  Stack,
  Button,
  Image,
  Textarea,
} from '@chakra-ui/react';
import { Form } from 'react-router-dom';

function MyProfile() {
  const [formData, setFormData] = useState({
    profilePicture: '',
    gender: '',
    height: '',
    smoke: '',
    drink: '',
    datePreference: '',
    age: '',
    isSubscribed: 'No',
    isVerified: 'No',
    updatedAt: '',
    createdAt: '',
    bio: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData, profilePicture: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit form data
  };

  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="container.lg" py={10}>
        <Center>
          <Box maxW="md" w="full">
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Profile Picture</FormLabel>
                  {formData.profilePicture ? (
                    <Image src={formData.profilePicture} />
                  ) : null}
                  <Input
                    type="file"
                    accept="image/*"
                    name="profilePicture"
                    onChange={handleImageChange}
                  />
                  <FormHelperText>Upload a new profile picture</FormHelperText>
                </FormControl>

                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="nonbinary">Non Binary</option>
                  </Select>
                </FormControl>

                <FormControl>
                    <FormLabel>Bio</FormLabel>
                    <Textarea placeholder='Something About Yourself' onChange={handleInputChange}/>
                </FormControl>

                <FormControl>
                  <FormLabel>Height</FormLabel>
                  <Input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                  />
                  <FormHelperText>in cm</FormHelperText>
                </FormControl>

                <FormControl>
                  <FormLabel>Do you smoke?</FormLabel>
                  <Select
                    name="smoke"
                    value={formData.smoke}
                    onChange={handleInputChange}
                  >
                    <option value="never">Never</option>
                    <option value="sometimes">Sometimes</option>
                    <option value="often">Often</option>
                  </Select>
                </FormControl>

                <FormControl isReadOnly>
                    <FormLabel>Verified</FormLabel>
                    <Input type="text" name="isSubscribed" value={formData.isVerified} />
                </FormControl>

                <FormControl>
                  <FormLabel>Do you drink?</FormLabel>
                  <Select
                    name="drink"
                    value={formData.drink}
                    onChange={handleInputChange}
                  >
                    <option value="never">Never</option>
                    <option value="sometimes">Sometimes</option>
                    <option value="often">Often</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Your date preference</FormLabel>
                  <Select
                    name="datePreference"
                    value={formData.datePreference}
                    onChange={handleInputChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="anyone">Anyone</option>
                    <option value="nonbinary">Non Binary</option>
                  </Select>
                </FormControl>

                <FormControl isReadOnly>
                    <FormLabel>Subcription</FormLabel>
                    <Input type="text" name="isSubscribed" value={formData.isSubscribed} />
                </FormControl>

                <FormControl>
                  <FormLabel>Age</FormLabel>
                  <Input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </FormControl>

                <Button colorScheme="blue" type="submit">
                  Save Profile
                </Button>
              </Stack>
            </form>
          </Box>
        </Center>
      </Container>
      
    </Box>
  );
}

export default MyProfile;
