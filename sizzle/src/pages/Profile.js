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
import { verification } from './Verification';

function MyProfile() {
  const [formData, setFormData] = useState({
    gender: '1',
    height: '',
    smoke: '0',
    drink: '0',
    datePreference: '2',
    age: '',
    isSubscribed: '0',
    isVerified: '0',
  });
  const [image, setImage] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const makeApiCall = () => {
    // console.log(formData);
    fetch('http://localhost:5000/scorematchprofile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "gender": formData.gender, 
                "height": formData.height, 
                "is_habit_drink": formData.drink, 
                "is_habit_smoke": formData.smoke,
                "is_verified": formData.isVerified,
                "who_to_date": formData.datePreference,
                "is_subscribed": formData.isSubscribed,
                "age": formData.age
    
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // submit form data
  };

  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="container.lg" py={10}>
        <Center>
          <Box maxW="md" w="full">
            <Stack spacing={4}>
              <FormControl>
              <Center
  w="120px"
  h="120px"
  position="relative"
  bg="gray.300"
  borderRadius="full"
  left="150"
>
  {image ? (
    <Image
      src={image}
      alt="Profile Picture"
      borderRadius="full"
      w="120px"
      h="120px"
    />
  ) : (
    <>
      <Input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        display="none"
        id="upload-input"
      />
      <FormLabel htmlFor="upload-input">
        <Box
          w="32px"
          h="32px"
          borderRadius="full"
          bg="white"
          color="gray.500"
          fontSize="22px"
          fontWeight="bold"
          cursor="pointer"
          userSelect="none"
          textAlign="center"
          position="absolute"
          bottom="0"
          left="20"
        >
          +
        </Box>
      </FormLabel>
    </>
  )}
</Center>



                <FormHelperText>Upload a new profile picture</FormHelperText>
              </FormControl>

              <Button colorScheme="blue" disabled={!image}>
                Save Image
              </Button>

                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                    <option value="2">Non Binary</option>
                  </Select>
                </FormControl>

                <FormControl>
                    <FormLabel>Bio</FormLabel>
                    {/* <Textarea placeholder='Something About Yourself' value={formData.bio} onChange={handleInputChange}/> */}
                    <Input
                    type="text"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                  />
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
                    <option value="0">Never</option>
                    <option value="2">Sometimes</option>
                    <option value="1">Often</option>
                  </Select>
                </FormControl>

                <FormControl isReadOnly>
                    <FormLabel>Verified</FormLabel>
                    <Input type="text" name="isSubscribed" value={verification === 'Yes' ? "Yes" : "No"} />
                </FormControl>

                <FormControl>
                  <FormLabel>Do you drink?</FormLabel>
                  <Select
                    name="drink"
                    value={formData.drink}
                    onChange={handleInputChange}
                  >
                    <option value="0">Never</option>
                    <option value="2">Sometimes</option>
                    <option value="1">Often</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Your date preference</FormLabel>
                  <Select
                    name="datePreference"
                    value={formData.datePreference}
                    onChange={handleInputChange}
                  >
                    <option value="2">Male</option>
                    <option value="1">Female</option>
                    <option value="0">Anyone</option>
                    <option value="3">Non Binary</option>
                  </Select>
                </FormControl>

                <FormControl isReadOnly>
                    <FormLabel>Subcription</FormLabel>
                    <Input type="text" name="isSubscribed" value={formData.isSubscribed === 1 ? "Yes" : "No"} />
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

                <Button colorScheme="blue" type="submit" onClick={makeApiCall}>
                  Save Profile
                </Button>
              </Stack>
          </Box>
        </Center>
      </Container>
      
    </Box>
  );
}

export default MyProfile;
