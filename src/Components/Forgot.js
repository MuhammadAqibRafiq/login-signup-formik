import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';
import { Card, CardContent, Button, Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { FormatAlignLeftOutlined } from '@material-ui/icons';
import { green, purple } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
// import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.warning.main,
    },
    palette: {
        backgroundColor: theme.palette.success.main,
      },
  }));

  
  function Copyright() {
  
    return (
  
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to={{ pathname: "http://aqib-rafiq.surge.sh/" }} target="_blank" >
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const Forgot = () => {

  const classes=useStyles();

    return (

        <div className='login-main'>
           
    <Formik
      initialValues={{  email: ''}}
      validate={values => {
        const errors = {};
        
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 3000);
      }}
    >

      {({ isSubmitting }) => (

 < div className='sec'> 
  

        <Card className="login-cards">
          
          <CardContent className="login-cardcontent">
         
            <Form className='login-form-border'>

              <div className={classes.paper} >
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>

                <h3>Forget ? Oh!</h3>
                </div>

              <Box>
                <Field type="email" name="email" label='Email Address*' component={TextField} />
              </Box>


              <Box className='forget-account'>
              Forgot password?      
              </Box>

              <br />


              <div className={classes.paper}  >
              <Button type="submit" variant="contained" className={classes.palette} disabled={isSubmitting }
                startIcon= { isSubmitting ? <CircularProgress size="1rem" /> : null }>
                Submit
              </Button>
               
              </div>

              <Box className='login-account'>
              <Link variant="body2" to="/login" >
              &lt; Back To Login
              </Link>
              </Box>
      
              <Box mt={5}>
                <Copyright />
              </Box>
              
            </Form>

          </CardContent>
        </Card>
        </div>
      )}
    </Formik>
            
        </div>
    )
}
export default Forgot;
