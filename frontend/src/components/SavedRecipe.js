import React, { useEffect, useState } from 'react'
import { Card,Image,Heading,Divider, CardBody, CardFooter } from '@chakra-ui/react'
import axios from "axios"
import styles from "./components.module.css"

const SavedRecipe = () => {

    const [data,setData] = useState([])
    const getSavedRecipe = async()=>{
        const response = await axios.get(`https://pink-quail-kit.cyclic.cloud/recipe/saved`)
        setData(response.data)
    }

    useEffect(()=>{
        getSavedRecipe()
    },[])
  return (
    <div>
        <div className={styles.card}>
       {data.length>0?data.map((item)=>(
        <Card key={item.id} maxW='sm'>
        <CardBody>
          <Image
            src={item.image}
            alt='dummy'
            borderRadius='lg'
          />
            <Heading size='md'>{item.title}</Heading>
        </CardBody>
        <Divider />
        <CardFooter>
        </CardFooter>
      </Card>
       )):""}
       </div>
    </div>
  )
}

export default SavedRecipe