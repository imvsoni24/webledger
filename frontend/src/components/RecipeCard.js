import React from 'react'
import { Card,Image,Heading,Divider, CardBody, CardFooter,Button,ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from "axios"

const RecipeCard = ({data}) => {

  
  const saveRecipe = async()=>{
    let response = await axios.post(`https://pink-quail-kit.cyclic.cloud/recipe/save`,{id:data.id,title:data.title,image:data.image});
    response = await response.data.message
    alert(response)
  }
  
  return (
    <div>
        <Card maxW='sm'>
  <CardBody>
    <Image
      src={data.image}
      alt='dummy'
      borderRadius='lg'
    />
      <Heading size='md'>{data.title}</Heading>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='20'>
      <Button onClick = {saveRecipe} variant='solid' colorScheme='blue'>
        Save it
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        <Link to={`/recipe/${data.id}`}>View details</Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default RecipeCard