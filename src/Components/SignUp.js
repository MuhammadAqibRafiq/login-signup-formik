import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';
import { Card, CardContent, Button, Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));


function Copyright() {

  return (

    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://aqib-rafiq.surge.sh/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const SignUp = () => {

  const classes=useStyles();

return(

  <div>
    <Formik
      initialValues={{ firstname: '', lastname: '', email: '', password: '', checkbox: false }}
      validate={values => {
        const errors = {};
        if (!values.firstname) {
          errors.firstname = 'Required'
        }
        if (!values.lastname) {
          errors.lastname = 'Required'
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting , Button}) => {
        setTimeout(() => {
          
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 3000);
      }}
    >

      {({ isSubmitting }) => (


        <Card>
          <CardContent>
            <Form className='form-border'>

              <div className={classes.paper} >
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>

                <h3>SignUp Form</h3>
                </div>

              <Box>
                <Field type="text" name="firstname" label='First Name*' component={TextField} />

                <Field type="text" name="lastname" label='Last Name*' className='gap' component={TextField} />
              </Box>

              <Box>
                <Field type="email" name="email" label='Email Address*' component={TextField} />
              </Box>

              <Box>
                <Field type="password" name="password" label='Password*' component={TextField} />
              </Box>

              <br />

              <Box>
                <Field name='checkbox' type="checkbox" component={CheckboxWithLabel} 
                Label={{ label: 'I want to receive inspiration, marketing promotions and updates via email.' }} />
              </Box>

              <div className={classes.paper} >
              <Button type="submit" variant="contained" color='primary' disabled={isSubmitting }
                startIcon= { isSubmitting ? <CircularProgress size="1rem" /> : null }>
                Submit
              </Button>
              </div>

              <Box className='account'>
              <Link variant="body2" href="/login" >
               Already have an account? Sign in
              </Link>
              </Box>

             
              <Box mt={5}>
                <Copyright />
              </Box>
              
            </Form>

          </CardContent>
        </Card>
      )}
    </Formik>
   
  </div>
);
      }
export default SignUp;


