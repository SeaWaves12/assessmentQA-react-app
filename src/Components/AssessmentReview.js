import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper';

const AssessmentReview = ({submittedAns}) => {

  return (
    <div>
    <Typography sx={{ mt: 4, mb: 2,marginTop:"170px" }} variant="h6" component="div">
        Review Answers Here
    </Typography>
         <Paper elevation={3} sx={{ padding:"8px",height: 240}} > 
            
            {submittedAns.length>0 && submittedAns.map((item, idx)=>{
                return (
                <List key = {idx}>
                    <ListItem > 
                    <ListItemText
                        primary={`#${parseInt(idx) + 1}: ${item && item.length>0 ? item :""}`} />
                </ListItem>
                </List>)
                })
            }
         </Paper>
    </div>
  )
}

export default AssessmentReview;