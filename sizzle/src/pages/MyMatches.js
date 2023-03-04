import { useState } from 'react';
import { Flex, Box, Image, IconButton } from '@chakra-ui/react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const images = [
  'https://via.placeholder.com/500x500?text=Image%201',
  'https://via.placeholder.com/500x500?text=Image%202',
  'https://via.placeholder.com/500x500?text=Image%203',
  'https://via.placeholder.com/500x500?text=Image%204',
  'https://via.placeholder.com/500x500?text=Image%205',
];

function CentralUICardCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handlePreviousClick() {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  }

  function handleNextClick() {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
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
          <Image src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
          <IconButton
            icon={<MdChevronRight />}
            onClick={handleNextClick}
            disabled={currentImageIndex === images.length - 1}
            aria-label="Next image"
          />
        </Flex>
      </Box>
    </Flex>
  );
}

export default CentralUICardCarousel;