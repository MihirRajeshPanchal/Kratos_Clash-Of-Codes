import { useState } from 'react';
import { Flex, Box, Image, IconButton, Circle, useColorModeValue } from '@chakra-ui/react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
let data = window.LikeArray;
// const images = [
//   'https://via.placeholder.com/500x500?text=Image%201',
//   'https://via.placeholder.com/500x500?text=Image%202',
//   'https://via.placeholder.com/500x500?text=Image%203',
//   'https://via.placeholder.com/500x500?text=Image%204',
//   'https://via.placeholder.com/500x500?text=Image%205',
// ];

function CentralUICardCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bgColor = useColorModeValue('white', 'gray.800');

  function handlePreviousClick() {
    setCurrentImageIndex((currentImageIndex - 1 + data.length) % data.length);
  }

  function handleNextClick() {
    setCurrentImageIndex((currentImageIndex + 1) % data.length);
  }

  return (
    <Flex alignItems="center" justifyContent="center" h="100vh">
      <Box maxW="80%">
        <Flex justifyContent="space-between" alignItems="center">
          <IconButton
            icon={<MdChevronLeft />}
            onClick={handlePreviousClick}
            disabled={currentImageIndex === 0}
            aria-label="Previous image"
          />
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
          <IconButton
            icon={<MdChevronRight />}
            onClick={handleNextClick}
            disabled={currentImageIndex === data.length - 1}
            aria-label="Next image"
          />
        </Flex>
      </Box>
    </Flex>
  );
}

export default CentralUICardCarousel;