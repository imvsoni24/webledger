import React, { useState } from 'react'
import {Stack  ,Input,Button} from "@chakra-ui/react"
import axios from "axios";
import RecipeCard from './RecipeCard';
import styles from "./components.module.css"
import { Link } from 'react-router-dom';

const FindRecipe = () => {
    const [search,setSearch] = useState("")
    const [data,setData] = useState([])

    const searchRecipe=async()=>{
        const response = await axios.get(`https://pink-quail-kit.cyclic.cloud/recipe/search?query=${search}`)
        console.log(response.data)
        setData(response.data)
    }
  return (
    <div>
        <Stack direction='row' spacing={8}>
         <Input value = {search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search any recipe' />
         <Button onClick={searchRecipe} colorScheme='blue'>Search</Button>
       </Stack>
       <Button mt={2}><Link to="/recipe/saved">View saved recipe</Link></Button>

       <div className={styles.card}>
       {data.length>0?data.map((item)=>(
        <RecipeCard key={item.id} data = {item}/>
       )):""}
       </div>
    </div>
  )
}

export default FindRecipe