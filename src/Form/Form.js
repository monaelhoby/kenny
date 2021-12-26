import React from "react";
import "./Form.css";
import emailjs from "emailjs-com";
import {FormControlLabel, FormControl, Radio, Checkbox, RadioGroup, FormLabel} from "@material-ui/core";
import { useForm } from "./hooks";
import {
  data,
  data2,
  data3,
  data4,
  data5,
  data6,
  data6_2,
  data7,
  data7_2,
  data8,
  data9,
} from "./Data";
import dataObject from '../survey'

const Form = ({ accuiredPackage }) => {
  const { onChange, values, setValues, reset } = useForm({
    smoking: false,
    firstName: "",
    middleName: "",
    lastName: "",
    month: "",
    day: "",
    year: "",
    countryOfBirth: "",
    province: "",
    residency: "",
    telephone: "",
    cell: "",
    mailingAddress: "",
    email: "",
    confirmEmailIsCorrect: false,
    owner: false,
    sameAsInsured: false,
    payor: false,
    sameAsInsured2: false,
    name: "",
    name2: "",
    DOB: "",
    DOB2: "",
    relationshipToInsured: "",
    relationshipToInsured2: "",
    share: "",
    share2: "",
    amountOfInsurance: "",
    premium: "",
    number: "",
    provOfIssue: "",
    expiry: "",
    SocialInsuranceNumber: "",
    package: "",
    accuiredPackage: accuiredPackage,
    other1 : null,
    other2 : null,
    gender: "",
    MonthlyAmount: null
  });
  console.log(values);
  // console.log("dataObject",dataObject)
  const sendForm = (e) => {
    e.preventDefault();
    amountEquation()
    emailjs
      .send(
        // "service_avujtaq",
        // "template_uv16jyw",
        // values,
        // "user_GaIetTwZAavFtxpJ4xkdk"

        "service_avujtaq",
        "template_uv16jyw",
        values,
        "user_54m0QHOHGVMNNOVsB8JUH"

      )
      .then(
        function (response) {
          // e.target.reset()
          console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );
  };

  const amountEquation = () => {
    let currentYear =  new Date().getFullYear();
    let age = currentYear - values.year
    // console.log(age)
    let currentMonth = new Date().getMonth() + 1
    // console.log(currentMonth)
    let monthArr =[]
    for(let i =0; i<6; i++){
      monthArr.push(currentMonth)
      currentMonth--
      switch (monthArr[i]) {
        case 0 : 
          monthArr[i] = 12;
          break;
        case -1 : 
          monthArr[i] = 11;
          break;
        case -2 : 
          monthArr[i] = 10;
          break;
        case -3 : 
          monthArr[i] = 9;
          break;
        case -4 : 
          monthArr[i] = 8;
          break;
        case -5 : 
          monthArr[i] = 7;
          break;
        case -6 : 
          monthArr[i] = 6;
          break;
      }
    }
    // console.log(monthArr)
    for(let i of monthArr){
      if(i == values.month){
        age = age + 1
      }
    }
    // console.log(age)
    let accValue = null;
    switch(accuiredPackage){
      case "Bronze" :
        accValue = "A";
        break;
      case "Silver" :
        accValue = "B";
        break;
      case "Gold" :
        accValue = "C";
        break;
      case "Premium" :
        accValue = "D";
        break;
    }
    // console.log("accValue", accValue)
    for (const prop in dataObject) {
      if(prop == values.gender){
        // console.log(prop, values.gender)
        // console.log(dataObject[prop]);
        for (const smokeProp in dataObject[prop]){
          if(age == smokeProp){
            console.log(age,smokeProp)
            let totalAmount = null
            let AmountInsurance = values.amountOfInsurance / 1000
            // console.log(AmountInsurance)
            if(values.Smoking){
              const smokeAmount = dataObject[prop][smokeProp]["smoke"];
              console.log("totalAmount", Math.round(totalAmount))
              switch(accValue){
                case "A" :
                  totalAmount = Math.round(smokeAmount.A * AmountInsurance + 5.39);
                  break;
                case "B" :
                  totalAmount = Math.round(smokeAmount.A * AmountInsurance + 5.39);
                  break;
                case "C" :
                  totalAmount = Math.round(smokeAmount.A * AmountInsurance + 5.39);
                  break;
                case "D" :
                  totalAmount = Math.round(smokeAmount.A * AmountInsurance + 5.39);
                  break;
              }
              // console.log("totalAmount", Math.round(totalAmount))
            }else{
              // console.log(dataObject[prop][smokeProp]["nonSmoke"])
              console.log("totalAmount", Math.round(totalAmount))
              const nonsmokeAmount = dataObject[prop][smokeProp]["nonSmoke"];
              switch(accValue){
                case "A" :
                  totalAmount = Math.round(nonsmokeAmount.A * AmountInsurance + 5.39);
                  break;
                case "B" :
                  totalAmount = Math.round(nonsmokeAmount.A * AmountInsurance + 5.39);
                  break;
                case "C" :
                  totalAmount = Math.round(nonsmokeAmount.A * AmountInsurance + 5.39);
                  break;
                case "D" :
                  totalAmount = Math.round(nonsmokeAmount.A * AmountInsurance + 5.39);
                  break;
              }
            }
            setValues({...values, MonthlyAmount : totalAmount, accuiredPackage: accuiredPackage})
          }
        }
      }
    }
  }

  const handleCheckboxChange = (event) => {
    const value = event.target.checked;
    setValues({ ...values, [event.target.name]: value });
  };
  const handleRadioChange = (event) => {
    const value = event.target.checked
    setValues({ ...values, package: event.target.value, residency : value });
  };

  // amountEquation()
// console.log(accuiredPackage)
  return (
    <form onSubmit={sendForm} className="input-fields">
      <div>
        <label>Name</label>
        <div className="name-input">
          {data.map((item, indx) => (
            <input
              name={item.name}
              value={values && values[item.name]}
              onChange={onChange}
              key={indx}
              type="text"
              placeholder={item.placeholder}
            />
          ))}
        </div>
      </div>
      <div>
        <label>Date of birth</label>
        <div className="date-of-birth-input">
          {data2.map((item, indx) => (
            <input
              name={item.name}
              value={values && values[item.name]}
              onChange={onChange}
              key={indx}
              type="number"
              placeholder={item.placeholder}
              min={item.min}
              max={item.max}
            />
          ))}
        </div>
      </div>
      <div className="check-box-country">
      <FormControlLabel
          className="each-check-box-country"
          control={
            <Checkbox
              onChange={handleCheckboxChange}
              name="Smoking"
              value={values.Smoking}
            />
          }
          label="Smoking"
        />
      </div>
      <div className="check-box-country">
        <FormControl component="fieldset">
        <FormLabel style={{marginTop:30,fontWeight:"bold",color:"#10171c", marginBottom:6}}>Gender</FormLabel>
          <RadioGroup aria-label="gender" name="gender" value={values.gender} onChange={onChange}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="country-input-container">
        {data3.map((item, indx) => (
          <div key={indx} className="country-input">
            <label>{item.placeholder}</label>
            <input
              name={item.name}
              value={values && values[item.name]}
              onChange={onChange}
              className={item.className}
              type="text"
              placeholder={item.placeholder}
            />
          </div>
        ))}
      </div>
      <div className="check-box-country">
          <div style={{ width: "50%" }}>
            <FormControl component="fieldset">
            <RadioGroup
              onChange={handleRadioChange}
              // value={values.residency}
              className="each-check-box-country"
            >
            {data4.map((item, indx) => (
              <FormControlLabel
                key={indx}
                value={item.name}
                control={<Radio color="secondary" />}
                label={item.placeholder}
              />
              ))}
            </RadioGroup>
            </FormControl>
          </div>
      </div>
      <div className="country-input-container">
        {data5.map((item, indx) => (
          <div key={indx} className="country-input">
            <input
              name={item.name}
              value={values && values[item.name]}
              onChange={onChange}
              className={item.className}
              type="text"
              placeholder={item.placeholder}
            />
          </div>
        ))}
      </div>
      <div className="country-input-container">
        <div className="country-input mailing-address">
          <input
            name="mailingAddress"
            value={values.MailingAddress}
            onChange={onChange}
            type="text"
            placeholder="Mailing address"
          />
        </div>
      </div>
      <div className="email">
        <input
          name="email"
          value={values.email}
          onChange={onChange}
          type="text"
          placeholder="Email"
        />
        <FormControlLabel
          className="each-check-box-country"
          control={
            <Checkbox
              onChange={handleCheckboxChange}
              name="confirmEmailIsCorrect"
              value={values.confirmEmailIsCorrect}
            />
          }
          label="Confirm email is correct"
        />
      </div>
      <div className="owner-other">
        <FormControlLabel
          className="each-check-box"
          control={<Checkbox onChange={handleCheckboxChange} name="owner" value={values.owner}/>}
          label="Owner"
        />
        <FormControlLabel
          className="each-check-box"
          control={
            <Checkbox onChange={handleCheckboxChange} name="sameAsInsured" value={values.sameAsInsured}/>
          }
          label="same as insured"
        />
        <div style={{ width: "45%" }}>
          <label>other</label>
          <input type="number" placeholder="Mailing address" name="other1" onChange={onChange} value={values.other1}/>
        </div>
      </div>
      <div className="payor-other">
        <FormControlLabel
          className="each-check-box"
          control={<Checkbox onChange={handleCheckboxChange} name="payor" value={values.payor}/>}
          label="Payor"
        />
        <FormControlLabel
          className="each-check-box"
          control={
            <Checkbox onChange={handleCheckboxChange} name="sameAsInsured2" value={values.sameAsInsured2}/>
          }
          label="same as insured"
        />
        <div style={{ width: "45%" }}>
          <label>other</label>
          <input type="number" placeholder="Mailing address" name="other2" onChange={onChange} value={values.other2}/>
        </div>
      </div>
      <div className="country-input-container">
        {data6.map((item, indx) => (
          <div key={indx} className="country-input">
            <label>{item.placeholder}</label>
            <input
              name={item.name}
              value={values && values[item.name]}
              onChange={onChange}
              className={item.className}
              type="text"
              placeholder={item.placeholder}
            />
          </div>
        ))}
      </div>
      <div className="country-input-container">
        {data7.map((item, indx) => (
          <div key={indx} className="country-input">
            <label>{item.placeholder}</label>
            <input
              name={item.name}
              value={values && values[item.name]}
              onChange={onChange}
              className={item.className}
              type="text"
              placeholder={item.placeholder}
            />
          </div>
        ))}
      </div>
      <div className="country-input-container">
        {data6_2.map((item, indx) => (
          <div key={indx} className="country-input">
            <label>{item.placeholder}</label>
            <input
              name={item.name}
              value={values && values[item.name]}
              onChange={onChange}
              className={item.className}
              type="text"
              placeholder={item.placeholder}
            />
          </div>
        ))}
      </div>
      <div className="country-input-container">
        {data7_2.map((item, indx) => (
          <div key={indx} className="country-input">
            <label>{item.placeholder}</label>
            <input
              name={item.name}
              value={values && values[item.name]}
              onChange={onChange}
              className={item.className}
              type="text"
              placeholder={item.placeholder}
            />
          </div>
        ))}
      </div>
      <p>Which plan does insured qualify?</p>
      <span>{accuiredPackage}</span>
      <div className="country-input-container">
        {data8.map((item, indx) => (
          <div key={indx} className="country-input">
            <label>{item.placeholder}</label>
            <input
              name={item.name}
              value={values && values[item.name]}
              onChange={onChange}
              className={item.className}
              type="text"
              placeholder={item.placeholder}
            />
          </div>
        ))}
      </div>
      <div className="">
        <label htmlFor="">Picture ID: [ ie driver’s license]</label>
        <div className="country-input-container">
          {data9.map((item, indx) => (
            <div key={indx} className="country-input number-prov-ex">
              <input
                name={item.name}
                value={values && values[item.name]}
                onChange={onChange}
                className={item.className}
                type="text"
                placeholder={item.placeholder}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="country-input-container">
        <div className="country-input mailing-address">
          <input
            name="SocialInsuranceNumber"
            value={values.SocialInsuranceNumber}
            onChange={onChange}
            type="text"
            placeholder="Social Insurance number"
          />
        </div>
      </div>
      <button className="submit-form">Submit</button>
    </form>
  );
};

export default Form;
