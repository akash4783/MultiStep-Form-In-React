import React from "react"
import {useForm,useStep} from "react-hooks-helper"

import Container from "@material-ui/core/Container/Container"
import TextField from "@material-ui/core/TextField/TextField"

import {Names} from "./stepForm/Names"
import {Address} from "./stepForm/Address"
import Contact from "./stepForm/Contact"
import {Review} from "./stepForm/Review"
import Submit from "./stepForm/Submit"



const defaultData = {
    firstname:"",
    lastname:"",
    nickname:"",
    address:"",
    city:"",
    state:"",
    zip:"",
    phone:"",
    email:""
}

const steps=[
    {id:'names'},
    {id:'address'},
    {id:'contact'},
    {id:'review'},
    {id:'submit'},
    
]
export const MultiStepForm=()=>{
    const[formData,setForm]=useForm(defaultData)
    const{step,navigation}=useStep({
        steps,
        initialStep:0
    })

const props = { formData,setForm,navigation }
console.log(step)
switch(step.id){
    case "names":
        return <Names {...props}/>;
    case "address":
        return <Address {...props}/>
    case "contact":
        return <Contact  {...props }/>
    case "review":
        return <Review {...props}/>
     case "submit":
        return <Submit {...props}/>
}

    return(
        <div>
            <h1>Multi Step form</h1>
         
        </div>
    )
}