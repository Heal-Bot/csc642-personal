import Form from 'react-bootstrap/Form'
import { Button, Row, Col} from 'react-bootstrap'
import { Formik } from 'formik';
import React, {useRef, useState, useEffect } from "react";
import * as yup from 'yup';
import Recaptcha from "react-recaptcha";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios'

const schema = yup.object().shape({
    firstName: yup.string().required('*First name is a required field')
    .min(2,'*Must be longer then 2 characters').max(40, '*Must be less then 40 characters long'),
    lastName: yup.string().required('*Last name is a required field').min(2,'Must be longer then 2 characters').max(40, '*Must be less then 40 characters long'),
    perferredTitle: yup.string().required('*Your perferred title is a required field'),

    heightFeet:yup.string(), 
    heightInches:yup.string(),

    phoneNumber: yup.string().matches(/^(\+?\d{0,1})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/, 'Must be a valid phone number'),

    address: yup.string().required('*Your address is a required field'),
    address2: yup.string(),
    city: yup.string().required('*Your city is a required field'),
    state: yup.string().required(`*Your state is a required field`),
    zip: yup.string().required(`*Your zip code is a required field`).matches(/^[0-9]{5}(-?[0-9]{4})?$/, '*Must be 5 or 9 digits'),

    monthlyBudget: yup.string().required(`*Your monthly budget is a required field`),
    email: yup.string().email('*Invalid email address').required(`*Your email address is a required field`),

    Terms: yup.bool().required().oneOf([true], '*Terms must be accepted'),
  });

function SurveyForm() {

    const [formData, setFormData] = useState({});
    const [mapData, setMapData] = useState({});
    const [renderData, setRenderData] = useState(false);
    const [disableSubmit,setDisableSubmit] = useState(false);
    const middlepage =  useRef(null);

    const captchaRef = useRef();

    const scrollToProp = () => {
      middlepage.current?.scrollIntoView({ behavior: "smooth" })
    }

  const budgetMap = { 
    1 : 'Less than $50',
    2 : 'Between $50 and $100',
    3 : 'Above $100',
  }
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  const onCaptchaChange = (value) => {
    console.log('Captcha value:', value);

  }

    useEffect(()=>{
      const script = document.createElement("script");
      script.src =
        "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    },[])

    useEffect(()=>{
      console.log(formData)
      if(JSON.stringify(formData) !== JSON.stringify({})){
      //https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {params: {
        address: `${formData.address} ${formData.address2}. ${formData.city}, ${formData.state}, ${formData.zip}`,
        key: 'AIzaSyA9pciXesTSavl3XWhwkhVsizl9es5m8yI'
      }})
        
        .then(res => {setMapData(res.data.results[0].geometry.location)})
        .then(res => {
          setRenderData(true)
          //setDisableSubmit(true);
          scrollToProp()
        }
        )
      }
    },[formData])

    return (
<div>
    <Formik
      validationSchema={schema}
      validator={() => ({})}
      onSubmit={ (values, {setSubmitting, resetForm}) => {
        setSubmitting(true);
        captchaRef.current.execute();
        setFormData(values)
        setSubmitting(false);
    }}

      initialValues={{
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        address2: '',
        heightFeet: '',
        heightInches: '',
        city: '',
        state: '',
        zip: '',
        monthlyBudget: '',
        email: '',
        Terms: false,
        perferredTitle: '',
        recaptcha: '',
        EmailCheckBox: '',
         PhoneCheckBox: '',
          FacebookCheckBox: '',
           TweeterCheckBox: '',
          'Surface MailCheckBox': '',
            'Personal VisitCheckBox': '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        isSubmitting,
      }) => (

    <Form className="survey-form" noValidate onSubmit={handleSubmit}>
        <h3 className="title">CSC 642 848 Fall 2021 Individual Assignment Austin Powers</h3>
        <h4 className="title2">Data survey form</h4>


        {/* First and Last Name */}

    <Row className="nameField">
        <Form.Group as = {Col} className="mb-3">
        <Form.Label>Last Name*</Form.Label>
        <Form.Control type="text"
                placeholder='Last name'
                name='lastName'
                value={values.lastName}
                onChange={handleChange}
                onBlur = {handleBlur}
                isValid={touched.lastName && !errors.lastName}
                className= {errors.lastName ? 'errorBox' : null}
                required/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 <Form.Control.Feedback className = 'error' type="invalid-feedback">
                {touched.lastName && errors.lastName}
              </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as = {Col} className="mb-3">
        <Form.Label>First Name*</Form.Label>
        <Form.Control type="text" 
                placeholder='First name' 
                name = 'firstName'
                value={values.firstName}
                onChange={handleChange}
                onBlur = {handleBlur}
                isValid={touched.firstName && !errors.firstName}
                 required/>
                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 <Form.Control.Feedback className = 'error' type="invalid-feedback">
                {touched.firstName && errors.firstName}
              </Form.Control.Feedback>
        </Form.Group>


    </Row>

    {/* Perferred Title */}

    <Row className="perferredTitleField">
        <Form.Group className="mb-3" >
        <Form.Label>Choose perferred title*</Form.Label>
        <Form.Select 
                name='perferredTitle'
                value={values.perferredTitle}
                onChange={handleChange}
                onBlur = {handleBlur}
                isValid={touched.perferredTitle && !errors.perferredTitle} 
            >
            <option value="">Choose...</option>
            <option value="None">None</option>
            <option value="Student">Student</option>
            <option value="Professor">Professor</option>
            <option value="Staff">Staff</option>
            <option value="Retired">Retired</option>
        </Form.Select >
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 <Form.Control.Feedback className = 'error' type="invalid-feedback">
                {touched.perferredTitle && errors.perferredTitle}
              </Form.Control.Feedback>
        </Form.Group>
    </Row>

{/* Height */}
    <Row className="heightField">
        <Form.Label>Your Height</Form.Label>

        <Form.Group as = {Col} className="" >
            <Form.Select                 
                name='heightFeet'
                value={values.heightFeet}
                onChange={handleChange}
                onBlur = {handleBlur}
                isValid={touched.heightFeet && !errors.heightFeet} >
            <option value="">---------</option>
            <option value="2">2 ft</option>
            <option value="3">3 ft</option>
            <option value="4">4 ft</option>
            <option value="5">5 ft</option>
            <option value="6">6 ft</option>
            <option value="7">7 ft</option>
            <option value="8">8 ft</option>
            </Form.Select>
        </Form.Group>

        <Form.Group as = {Col} className="" >
        <Form.Select 
                        name='heightInches'
                        value={values.heightInches}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        isValid={touched.heightInches && !errors.heightInches} >
            <option value="">---------</option>
            <option value="0">0 inches</option>
            <option value="1">1 inches</option>
            <option value="2">2 inches</option>
            <option value="3">3 inches</option>
            <option value="4">4 inches</option>
            <option value="5">5 inches</option>
            <option value="6">6 inches</option>
            <option value="7">7 inches</option>
            <option value="8">8 inches</option>
            <option value="9">9 inches</option>
            <option value="10">10 inches</option>
            <option value="11">11 inches</option>
            <option value="12">12 inches</option>
        </Form.Select>
        
        </Form.Group>
        <Form.Text className="text-muted mb-3">
            In feet-inch measurements
            </Form.Text>

    </Row>

{/* Phone */}
    <Row className="phoneField">
        <Form.Group className="mb-3" >
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" 
         placeholder="Enter your Phone Number"
         name="phoneNumber"
         value={values.phoneNumber}
         onChange={handleChange}
         onBlur = {handleBlur}
         isValid={touched.phoneNumber && !errors.phoneNumber}
          />
          <Form.Text className="text-muted">
          +x (xxx) xxx-xxxx Parentheses, dashes, and international code optional
          </Form.Text>

        <Form.Control.Feedback className = 'error' type="invalid-feedback">
                {touched.phoneNumber && errors.phoneNumber}
              </Form.Control.Feedback>
        </Form.Group>
    </Row>
{/* Address */}
    <Form.Group className="mb-3" >
        <Form.Label>Address*</Form.Label>
        <Form.Control placeholder="1234 Main St"
        name="address"
         value={values.address}
         onChange={handleChange}
         onBlur = {handleBlur}
         isValid={touched.address && !errors.address}
          />
        <Form.Control.Feedback className = 'error' type="invalid-feedback">
                {touched.address && errors.address}
              </Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" >
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor"         
         name="address2"
         value={values.address2}
         onChange={handleChange}
         onBlur = {handleBlur}
         isValid={touched.address2 && !errors.address2}/>
    </Form.Group>

    <Row className="mb-3">
        <Form.Group as={Col} >
        <Form.Label>City*</Form.Label>
        <Form.Control className = 'addressBox'
        name="city"
         value={values.city}
         onChange={handleChange}
         onBlur = {handleBlur}
         isValid={touched.city && !errors.city}
          />
        <Form.Control.Feedback className = 'error' type="invalid-feedback">
                {touched.city && errors.city}
              </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} >
        <Form.Label>State*</Form.Label>
        <Form.Select 
        className = 'addressBox'
                        name='state'
                        value={values.state}
                        onChange={handleChange} 
                        onBlur = {handleBlur}
                        isValid={touched.state && !errors.state}
                         required
                         >
            <option>Choose...</option>
            <option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
        </Form.Select>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 <Form.Control.Feedback className = 'error' type="invalid-feedback">
                {touched.state && errors.state}
              </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} >
        <Form.Label>Zip*</Form.Label>
        <Form.Control type="text"
        className = 'addressBox'
                name='zip'
                value={values.zip}
                onChange={handleChange}
                onBlur = {handleBlur}
                isValid={touched.zip && !errors.zip}
                 required/>
                         {!(touched.zip && errors.zip) && !(touched.zip && !errors.zip) && <Form.Text className="text-muted">
                          xxxxx or xxxxx-xxxx
                        </Form.Text>}
                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 <Form.Control.Feedback className = 'error' type="invalid-feedback">
                {touched.zip && errors.zip}
              </Form.Control.Feedback>
        </Form.Group>
    </Row>

{/* CheckBoxes */}
    <Row className="CheckboxGroupField">
        <Form.Group className="mb-3" >
            <Form.Label>Check all services you require</Form.Label>
            
                {['Email', 'Phone', 'Facebook', 'Tweeter', 'Surface Mail','Personal Visit'].map((type) => (
                <div key={`${type}`} >
                    <Form.Check 
                    name = {`${type}CheckBox`}
                    value = {values[`${type}CheckBox`]}
                    onChange={handleChange}
                    type={'checkbox'}
                    className = 'checkbox'
                    id={`${type}CheckBox`}
                    label={`${type}`}
                    required
                    />
                </div >
                ))}
        </Form.Group>
    </Row>

{/* Budget */}
    <Row className="budgetField">
        <Form.Group className="mb-3"  >
        <Form.Label>Your monthly service budget for services*</Form.Label>
        <Form.Select
                        name='monthlyBudget'
                        value={values.monthlyBudget}
                        onChange={handleChange}
                        isValid={touched.monthlyBudget && !errors.monthlyBudget}
        >
            <option value="">-- None Selected --</option>
            <option value="1">Less than $50</option>
            <option value="2">Between $50 and $100</option>
            <option value="3">Above $100</option>
        </Form.Select>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 <Form.Control.Feedback className = 'error' type="invalid-feedback">
                {touched.monthlyBudget && errors.monthlyBudget}
              </Form.Control.Feedback>
        </Form.Group>
    </Row>

{/* Email */}
    <Row className="emailField">
        <Form.Group className="mb-3" >
        <Form.Label>Your Email*</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" 
                   name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
          />
        {!(touched.email && errors.email) && <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>}
        <Form.Control.Feedback className = 'error' type="invalid-feedback">
                {touched.email && errors.email}
              </Form.Control.Feedback>

        </Form.Group>
    </Row>


    {/* Terms */}
    <Row className="termsField">
        <Form.Group className="mb-3" >
        <Form.Check  id={`Terms`}  label={<div>I Agree to the <a href="/Terms">Terms</a></div>}
                name="Terms"
                value={values.Terms}
                onChange={handleChange}
                isValid={touched.Terms && !errors.Terms}
            />
                    <Form.Control.Feedback className = 'error' type="invalid-feedback">
                {touched.Terms && errors.Terms}
              </Form.Control.Feedback>
        </Form.Group>
    </Row>

    {/* <Recaptcha
                  sitekey="6Ld6JwQdAAAAANj1Nubb280pL8fq_3hyGsltyUUb"
                  ref={captchaRef}
                  onChange={onCaptchaChange}
                  //isValid={touched.recaptcha && !errors.recaptcha}
                  render="invisible"
                /> */}
      <Recaptcha
        ref={captchaRef}
        sitekey="6LcfLwQdAAAAAK56cTz0rQ1bQkKRJjfd-X3GMWhr"
        onChange={(value) => {
          console.log(value)
        }}
        size="invisible"
      />
      <div style={{ display: "flex", margin: '50px 0 0 0'}}>
        {<Button class="g-recaptcha" data-sitekey="your_site_key" data-callback='onSubmit' className="submitButton" type="submit" disabled={isSubmitting || disableSubmit}>Submit form</Button>} 
        </div>
    </Form>
    )}
    </Formik>
    {renderData &&
            <div className = 'review-form'>
                <h3 className = 'title2'>Results verification page Austin Powers</h3>
                <div className = "singleNameField"> LastName: <Form.Control className = "mb-3" type="text" value={formData.lastName} readOnly /></div>
                      
                      <div className = "singleNameField"> First Name<Form.Control  className = "mb-3" type="text" value={formData.firstName} readOnly /></div>

                      <div className = "perferredTitleField"> Perferred Title: <Form.Control className = "mb-3" type="text" value={formData.perferredTitle} readOnly /></div>

                      
                      <div className = "heightField"> Your Height: <Form.Control className = "mb-3" type="text" value={formData.heightFeet == "" && formData.heightInches == "" ? 'N/A' : `${formData.heightFeet}'${formData.heightInches}''`} readOnly /></div>

                       
                      <div  className = "budgetField"> Phone Number: <Form.Control className = "mb-3" type="text" value={(formData.phoneNumber.length > 0 ? formData.phoneNumber : 'N/A')} readOnly /></div>

                       
                      <div className = "singleNameField"> Address: <Form.Control className = "mb-3" type="text" value={`${formData.address}${formData.address2.length > 0 ? " " : ""}${formData.address2}. ${formData.city}, ${formData.state}, ${formData.zip}`} readOnly /></div>
                      <div  className = "mb-3">
                      <LoadScript
        googleMapsApiKey="AIzaSyA9pciXesTSavl3XWhwkhVsizl9es5m8yI"
      >
        <GoogleMap 
          mapContainerStyle={containerStyle}
          center={mapData}
          zoom={10}
        >

          <Marker key="marker"

position={mapData}

/>
        </GoogleMap>
      </LoadScript>
      </div>

            <div className = "mb-3"> Services you Require: <Form.Control className = "selections" type="text" value={
              `${formData.EmailCheckBox ? "Email, " : ''}${formData.PhoneCheckBox ? "Phone, " : ''}${formData.FacebookCheckBox ? "Facebook, " : ''}${formData.TweeterCheckBox ? "Tweeter, " : ''}${formData['Surface MailCheckBox'] ? "Surface Mail, " : ''}${formData['Personal VisitCheckBox'] ? "Personal Visit, " : ''}`
            } readOnly /></div>

                      <div  className = "budgetField"> Your monthly budget for services: <Form.Control className = "mb-3" type="text" value={budgetMap[formData.monthlyBudget]} readOnly /></div>

                       
                      <div ref={middlepage} className = "singleNameField"> Your email: <Form.Control className = "mb-3" type="text" value={formData.email} readOnly /></div>


                      </div>
}

                </div>
      
  );
}

export default SurveyForm
