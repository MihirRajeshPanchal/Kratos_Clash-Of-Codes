import React, { useState } from 'react';
import axios from 'axios';
import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function IceBreaker() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(question); // do something with the user's input
    // setQuestion('');
    try {
      const res = await axios.post('http://localhost:5000/chat', { message });
      
      setResponse(res.data.response);
    } catch (err) {
      console.error(err);
    }
    fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "prompt": question
            })
        })
  };
  
  const speak = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(response);
    synth.speak(utterance);
  };



  return (
    <Box display="flex" flexDirection="column" alignItems="center">
    <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
        Sizzle IceBreaker Question
        </Heading>
        <form onSubmit={handleSubmit}>
        <input type="text" value={question} onChange={(event) => setQuestion(event.target.value)} />
        <button type="submit" style={{ display: 'block', marginTop: '10px' }}>Send</button>
        </form>
    </Box>
    <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
        Sizzle IceBreaker Answer
        </Heading>
        <Text color={'gray.500'}>
        {response}
        </Text>
    </Box>
    <button onClick={speak}>Speak</button>
    </Box>



  );
};

export default IceBreaker;