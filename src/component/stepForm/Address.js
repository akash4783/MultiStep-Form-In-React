import React from 'react';
import Container from "@material-ui/core/Container/Container"
import TextField from "@material-ui/core/TextField/TextField"
import Button from "@material-ui/core/Button/Button"

export  const Address = ({formData,setForm,navigation})=>{
    const{address,city,state,zip}=formData
    return(

       <div>
          <Container>
            <h1>  Address </h1>
            <TextField
            label="Address"
            name="address"
            value={address}
            onChange={setForm}
            margin='normal'
            variant="outlined"
            autoComplete="off"
            fullWidth
            
            />
             <TextField
            label="City"
            name="city"
            value={city}
            onChange={setForm}
            margin='normal'
            variant="outlined"
            autoComplete="off"
            fullWidth
            
            />
             <TextField
            label="State"
            name="state"
            value={state}
            onChange={setForm}
            margin='normal'
            variant="outlined"
            autoComplete="off"
            fullWidth
            
            />
               <TextField
            label="Zip"
            name="zip"
            value={zip}
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