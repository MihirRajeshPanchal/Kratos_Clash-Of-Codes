import { useState } from 'react';
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    Stack,
    Text,
    Heading,
    chakra,
    Button,
    Tooltip,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { BsHeartFill, BsHeart } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            My Matches
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        let LikeArray = [];

        const data = [
          {
            id: 0,
            name: "Prakhar",
            imageURL: "male.png",
          },
          {
            id: 1,
            name: "Ritz",
            imageURL: "female.png",
          },
          {
            id: 2,
            name: "Amit",
            imageURL: "male.png",
          },
          {
            id: 3,
            name: "Aditya",
            imageURL: "male.png",
          },
          {
            id: 4,
            name: "Khushi",
            imageURL: "female.png",
          },
          {
            id: 5,
            name: "Jahnvi",
            imageURL: "female.png",
          },
          {
            id:6,
            name:"Kailash",
            imageURL:"male.png",
          },
          {
            id:7,
            name:"Kishor",
            imageURL:"male.png",
          },
          {
            id:8,
            name:"Himadri",
            imageURL:"female.png",
          },
          {
            id:9,
            name:"Sankalp",
            imageURL:"male.png",
          },
        ];
  

  function ProductAddToCart() {
    const [liked, setLiked] = useState(false);
    const [LikeArray, setLikeArray] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [counter, setCounter] = useState(0);
    const bgColor = useColorModeValue('white', 'gray.800');


  const handleLike = () => {
    
    if (!liked) {
      setLikeArray([...LikeArray, data.name]);
    } else {
      const index = LikeArray.indexOf(data.name);
      if (index > -1) {
        const newArray = LikeArray.slice();
        newArray.splice(index, 1);
        setLikeArray(newArray);
      }
    }
    setLiked(!liked);
    setCounter(counter + 1);
    setCurrentImageIndex(currentImageIndex === data.length - 1 ? 0 : currentImageIndex + 1);
    setLiked(false);
  };

  const handleCross = () => {
    setCurrentImageIndex(currentImageIndex === data.length - 1 ? 0 : currentImageIndex + 1);
  };
  if (counter === 10) {
    return <Box textAlign="center">Come Back Tomorrow to view More Profiles !! </Box>;
  }
    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={bgColor}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <Image
            src={data[currentImageIndex].imageURL}
            alt={`Picture of ${data[currentImageIndex].name}`}
            roundedTop="lg"
          />
  
          <Box p="6">
          <Button
          margin={{ mr: 4 }}
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'red.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'red.500',
            }}
            _focus={{
              bg: 'red.500',
            }}
            width="10"
            height="10"
            >
            <Flex
              p={4}
              alignItems="center"
              justifyContent={'space-between'}
              roundedBottom={'sm'}
              cursor="pointer"
              onClick={handleLike}
            >
              {liked ? (
                <BsHeartFill fill="red" fontSize={'24px'} />
              ) : (
                <BsHeart fontSize={'24px'} />
              )}
            </Flex>
          </Button>
          <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'white.400'}
          color={'white'}> . </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'red.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'red.500',
            }}
            _focus={{
              bg: 'red.500',
            }}
            onClick={handleCross}>
            X
          </Button>
            
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                top={"20hv"}>
                {data[currentImageIndex].name}
              </Box>
              
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  window.LikeArray = LikeArray;
  export default ProductAddToCart;
