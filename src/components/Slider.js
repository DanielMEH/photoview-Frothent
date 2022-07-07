import React from 'react'
import SliderImage from './SliderImage'
import { motion } from 'framer-motion'
import "../assets/css/style.css"
export const Slider = () => {
  return (
    <motion.div className='container'>
        <motion.div className='slider' drag='x' dragConstraints={{right:0}}>
        {SliderImage.map(image => (

            <motion.div className='items'>
                <img  src={image}/>
            </motion.div>
        ))}

        </motion.div>
    </motion.div>
  )
}
