import React from 'react'
import {BsFillTagFill} from 'react-icons/bs'
import styles from '../styles'
const Button = ({buttonText}) => {
  return (
    <button className={`${styles.flexCenter} button-bg rounded-md font-bold flex gap-2`}>{buttonText} <BsFillTagFill/> </button>
  )
}

export default Button