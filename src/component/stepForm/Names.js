import React from 'react';
import Container from "@material-ui/core/Container/Container"
import TextField from "@material-ui/core/TextField/TextField"
import Button from "@material-ui/core/Button/Button"

export  const Names =({formData,setForm,navigation})=>{
   const{firstname,lastname,nickname}=formData
   console.log(navigation)

    return(
        <div>
            <Container>
            <h1>  Names </h1>
            <TextField
            label="First Name"
            name="firstname"
            value={firstname}
            onChange={setForm}
            margin='normal'
            variant="outlined"
            autoComplete="off"
            fullWidth
            
            />
             <TextField
            label="Last Name"
            name="lastname"
            value={lastname}
            onChange={setForm}
            margin='normal'
            variant="outlined"
            autoComplete="off"
            fullWidth
            
            />
             <TextField
            label="Nick Name"
            name="nickname"
            value={nickname}
            onChange={setForm}
            margin='normal'
            variant="outlined"
            autoComplete="off"
            fullWidth
            
            />
    
    <Button variant="contained" fullWidth color="primary" style={{marginTop:'1rem'}} onClick={()=>navigation.next()}>Next</Button>
            </Container>
        
            </div>

     

    )

}