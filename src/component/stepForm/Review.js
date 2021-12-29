import React from 'react';
import { Accordion, Container } from '@material-ui/core';
import { AccordionSummary } from '@material-ui/core';
import { AccordionDetails } from '@material-ui/core';
import Button from "@material-ui/core/Button/Button"
import TextField from "@material-ui/core/TextField/TextField"
import { ListItemText } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import ExpandMoreICon from '@material-ui/icons/ExpandMore'
import EditIcon from "@material-ui/icons/Edit"

export const Review =({formData,setForm,navigation})=>{
const{go}=navigation

const{
  firstname,
  lastname,
  nickname,
  address,
  city,
  state,
  zip,
  phone,
  email
}=formData
    return(
      <div>
      <Container maxWidth="sm">
        <h3>Review</h3>
        <RenderAccordion summary="names" go={go} details={[
          {"First Name":firstname},
          {"Last Name":lastname},
          {"Nick Name":nickname}
        ]}/>
           <RenderAccordion summary="Address" go={go} details={[
          {"Address":address},
          {"City":city},
          {"State":state},
          {'Zip':zip}
        ]}/>
           <RenderAccordion summary="Contact" go={go} details={[
          {"Phone":phone},
          {"Email":email},
          
        ]}/>
        <Button 
        color={"primary"}
        variant={"contained"}
        style={{margin:'1rem'}}
        onClick={()=>go("submit")}>
          Submit
        </Button>
        
      </Container>
      </div>)
 }

export const RenderAccordion=({summary,details,go})=>(
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreICon/>}>{summary}</AccordionSummary>
    <AccordionDetails>
      <div>
      {details.map((data,index)=>{

        const objkey=Object.keys(data)[0]
       const objvalue=data[Object.keys(data)[0]]
       return <ListItemText key={index}>{`${objkey}:${objvalue}`}</ListItemText>
      })}
      <IconButton
      color="primary"
      component="span"
      onClick={()=> go(`${summary.toLowerCase()}`)}
      >{<EditIcon/>}
      </IconButton>
      </div>

    </AccordionDetails>
  </Accordion>
)