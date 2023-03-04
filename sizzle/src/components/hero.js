import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        h={'150vh'}
        backgroundImage={
          'url("hero2.png")'
          }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          >
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            </Text>
            <Stack direction={'row'}>
            <Button
                bg={'pink'}
                rounded={'full'}
                color={'white'}
                size={'lg'}
                _hover={{ bg: 'pink.500' }}>
                Show me more
            </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }