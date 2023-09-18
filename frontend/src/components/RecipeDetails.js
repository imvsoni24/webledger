import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react'

const RecipeDetails = () => {
  const {id} = useParams();
  const [data,setData] = useState({})

  const getDetails = async()=>{
    const response = await axios.get(`https://pink-quail-kit.cyclic.cloud/recipe/details/${id}`)
    console.log(response.data)
    setData(response.data)
  }

  const summary = data.summary?.replace(/<[^>]*>/g, '')

  useEffect(()=>{
    getDetails()
  },[])
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'recipe image'}
            src={data.image}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {data.title}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                <Text fontSize={'4xl'}
                fontWeight={'500'}>Instructions</Text>{data.instructions}
              </Text>
              <Text fontSize={'lg'}>
              <Text fontSize={'4xl'}
                fontWeight={'500'}>Summary</Text>{summary}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Ingredients
              </Text>

              <List spacing={2}>
                {data.extendedIngredients?.map((item)=>(<>
                    <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Aisle:
                    </Text>{' '}
                    {item.aisle}
                  </ListItem>  
                  <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Name:
                  </Text>{' '}
                  {item.name}
                </ListItem> 
                </>))}
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            <Link to="/">Go back</Link>
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}

export default RecipeDetails