import React from 'react';
import TextField from "@material-ui/core/TextField/TextField"
import Container from "@material-ui/core/Container/Container"
import Button from "@material-ui/core/Button/Button"
export default function Contact ({formData,setForm,navigation}){
const{phone,email}=formData
    return(

      <div>
         
          <Container>
          <h1>Contact</h1>
          <TextField
            label="Phone"
            name="phone"
            value={phone}
            onChange={setForm}
            margin='normal'
            variant="outlined"
            autoComplete="off"
            fullWidth
            />
             <TextField
            label="email"
            name="email"
            value={email}
            onChange={setForm}
            margin='normal'
            variant="outlined"
            autoComplete="off"
            fullWidth
            />

            <Button 
            color="secondary"
            variant="contained" 
            style={{marginRight:"1rem"}}
            onClick={()=>navigation.previous()}>
            Back
            </Button>
            <Button 
            color="primary"
            variant="contained" 
            style={{marginRight:"1rem"}}
            onClick={()=>{navigation.next()}}>
            Next
            </Button>


   
           </Container>
      </div>

    )

}