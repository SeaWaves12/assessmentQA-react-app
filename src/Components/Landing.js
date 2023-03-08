import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Landing = (props) => {
  return (
    <div style={{marginTop:"100px"}}>
        <Typography sx={{ mt: 4, mb: 2,marginTop:"170px" }} variant="h6" component="div">
          Start the assessment 
        </Typography>
        <Button variant="contained" style={{marginTop:"100px"}} onClick={props.startAssessmengt}>Start</Button>
    </div>
  )
}

export default Landing;
