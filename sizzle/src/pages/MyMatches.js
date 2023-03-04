import { useState } from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

const images = [
  "https://via.placeholder.com/300x300.png?text=1",
  "https://via.placeholder.com/300x300.png?text=2",
  "https://via.placeholder.com/300x300.png?text=3",
  "https://via.placeholder.com/300x300.png?text=4",
  "https://via.placeholder.com/300x300.png?text=5",
  "https://via.placeholder.com/300x300.png?text=6",
  "https://via.placeholder.com/300x300.png?text=7",
  "https://via.placeholder.com/300x300.png?text=8",
  "https://via.placeholder.com/300x300.png?text=9",
  "https://via.placeholder.com/300x300.png?text=10",
];

function DragCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragging, setDragging] = useState(false);

  function handleDragStart(event) {
    setDragStartX(event.clientX);
    setDragging(true);
  }

  function handleDragEnd(event) {
    const difference = event.clientX - dragStartX;
    if (difference > 0 && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (difference < 0 && currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
    setDragging(false);
  }

  return (
    <Flex position="relative" alignItems="center" justifyContent="center" w="100%">
      <Box
        display="flex"
        flexDirection="row"
        transition="transform 0.3s ease-out"
        transform={`translateX(-${currentImageIndex * 100}%)`}
        onMouseDown={handleDragStart}
        onMouseMove={(event) => dragging && handleDragEnd(event)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {images.map((image, index) => (
          <Box key={index} flexShrink={0} w="100%">
            <img src={image} alt={`Image ${index + 1}`} />
          </Box>
        ))}
      </Box>
      {currentImageIndex > 0 && (
        <IconButton
          aria-label="Previous Image"
          icon={<ArrowLeftIcon />}
          position="absolute"
          left={0}
          onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
        />
      )}
      {currentImageIndex < images.length - 1 && (
        <IconButton
          aria-label="Next Image"
          icon={<ArrowRightIcon />}
          position="absolute"
          right={0}
          onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
        />
      )}
    </Flex>
  );
}

export default DragCarousel;
