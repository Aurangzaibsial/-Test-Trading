import React, {useContext}from 'react'
import { con } from "./Usecontex";

export default function Con2() {

    const {user}=useContext((con))
  return (
    <div> <h1> hello{user.name}</h1>

      
    </div>
  )
}
