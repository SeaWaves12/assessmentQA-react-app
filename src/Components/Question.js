import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Question = ({activeIndex, data, submittedOption, updateSubmissionData}) => {

    const onValueChange = (e) => {
        updateSubmissionData(activeIndex, e.target.value);
      };
    
  return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    align:"center",
                    '& > :not(style)': {
                    m: 1,
                    width: 828,
                    height: 228,
                    },
                }}
                >
                <Paper elevation={3} sx={{
                    padding:"8px",
                }} > 
                    <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Question# {activeIndex + 1} {data.questionText}</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={ submittedOption ? submittedOption : " "}
                        onChange={(e) => onValueChange(e)}
                    >
                        {data.options.map((option, idx) => {
                        return (
                            <FormControlLabel  key ={idx} checked={submittedOption === option.value} 
                            value={option.value} control={<Radio />} label={option.value} />
                        );
                        })}
                    </RadioGroup>
                    </FormControl>
                </Paper>
            </Box>
        </div>
  )
}

export default Question


