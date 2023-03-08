import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AssessmentReview from './AssessmentReview';
import Question from './Question';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const AssessmentQuestions = (props) => {

  const [submittedAns, setSubmittedAns] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [assessSubmitted, setAssessSubmitted] = useState(false);
  const [score, setScore] = useState();

  const updateSubmissionData = (index, value) => {
    submittedAns[index] = value;
    //console.log(submittedAns)
    setSubmittedAns([...submittedAns] )
  };

  const onPreviousQuestion = () => {
    if (activeIndex > 0) {
      setActiveIndex(prv=>prv - 1);
    }
  };

  const onNextQuestion = () => {
    if (activeIndex < props.data.length - 1) {
      setActiveIndex(prv=>prv + 1);
    }
  };

  const calcFinalScore = () => {
    let score = 0;
    submittedAns.forEach((item,idx) => {
      const attemptedAnswer = submittedAns[idx];
      const expectedAnswer = props.data[parseInt(idx)].ans;

      if (expectedAnswer === attemptedAnswer) {
        score++;
      }
    });
    return score;
  };

  const onSubmitAssess = () => {
    const score = calcFinalScore();
    setAssessSubmitted(true);
    setScore(score);
  };

  return (
    <>
      { !(assessSubmitted ) ? 
        (
          <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <AssessmentReview submittedAns={submittedAns}/>
              </Grid>
          
            <Grid item xs={12} md={9} sx={{
                    padding:"8px",marginTop:"135px",height: 228,
                }} >
            <div >
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <Button variant="contained" onClick={onPreviousQuestion} disabled={activeIndex <= 0 ? true :false}>&#8678;</Button>

                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">Attempt Questions Here </Typography>

                    <Button variant="contained" onClick={onNextQuestion} disabled={activeIndex >= props.data.length - 1 ? true :false}>&#8680;</Button>

                </div>

                <div>
                  { 
                    ( props.data && 
                      <Question data={props.data.at(activeIndex)} activeIndex={activeIndex} submittedOption=
                      { submittedAns[activeIndex]} 
                      updateSubmissionData={updateSubmissionData} />
                    ) 
                    } 
                </div>

                {submittedAns.length === props.data.length ? (
                <Button variant="contained" onClick={onSubmitAssess}>Submit</Button>
                ) : null}
            </div> 
            </Grid> 
          </Grid>
           ) :
            (<div >
            <Alert severity="success" text-align="center">You have successfully submitted the Assessment!</Alert>
            <br/>
            <br/>
            <br/>
            <span> &#8680; <b>Question Asked</b>: {props.data.length}</span>
            <br/>
            <br/>
            <span> &#8680; <b>Question Correct</b>: {score}</span>
            <br/>
            <br/>
            <span> &#8680; <b>Your score</b> : {((score / props.data.length) * 100).toFixed(2)}</span>
            </div>)
      }
    </>
  )
}

export default AssessmentQuestions