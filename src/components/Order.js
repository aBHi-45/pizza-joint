import React from 'react';
import { motion} from 'framer-motion';

const containerVariants ={
  hidden: {
    x: '100vw',
    opacity: 0
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type:'spring', 
      delay:0.9,
      stiffness: 150
    }
  },
  exit: {
    x:'-100vw',
    transition: {ease: 'easeInOut', duration: 0.7}
  }
}

const Order = ({ pizza }) => {

  return (
    <motion.div 
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
    className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </motion.div>
  )
}

export default Order;