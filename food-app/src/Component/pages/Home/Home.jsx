import React, { useState } from 'react'
import './Home.css'
import Header from '../../Header/Header'

import Exploremenu from '../../Exploremenu/Exploremenu'
import FoodDisplay from '../../fooddisplay/FoodDisplay'
import AppDownload from '../../AppDownload/AppDownload'
import Testimonial from '../../multipages/Testimonial'
const Home = () => {
    const [category, setCategory] = useState("All")
    return (
        <div>
            <Header />
            
            <Exploremenu category={category} setCategory={setCategory} />
             
            <FoodDisplay category={category} />
            
            <AppDownload />
            <Testimonial/>
            
            
            
        </div>
    )
}

export default Home
