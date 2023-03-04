import { Box } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  import { ReactElement } from 'react';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

interface Feature2Props {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

const Feature2 = ({ text, icon, iconBg }: Feature2Props) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };

export default function SimpleThreeColumns() {
  return (
    <>
    <Container maxW={'5xl'} py={35}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'#fcfcfc'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue("#fcfcfc")}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Some
            PopoverContent
            To 
            Increase
          </Text>
          <Heading>THE BEST DATING APP TO EVER EXIST</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Forget the boring dates and invite new experiences to your threshold
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature2
              
              iconBg={useColorModeValue("#fc5b8b")}
              text={'Easy & Accurate Matching'}
            />
            <Feature2
              iconBg={useColorModeValue('#ff3672')}
              text={'Verified Profiles'}
            />
            <Feature2
             
              iconBg={useColorModeValue("#fa054e")}
              text={'Personalized Choices'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'Hearts'}
            src={
              'heart.png'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
    </>
  );
}