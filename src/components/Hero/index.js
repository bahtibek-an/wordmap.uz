import React, { useState } from 'react'

import './Hero.css'

const Hero = () => {

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   client: 'Individual',
  //   language: '',
  //   translation: 'Written',
  //   description: ''
  // });
  //
  // const { name, email, client, language, translation, description } = formData;
  //
  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value
  //   }))
  // }
  //
  // const onSubmit = async (e) => {
  //   e.preventDefault()
  //   console.log("formData", formData)
  //
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(formData)
  //   };
  //
  //   fetch('http://localhost:5000/send-email', requestOptions)
  //     .then(response => response.json())
  //
  //   // const loggedInResponse = await post("http://localhost:5000/send-email", {
  //   //   method: "POST",
  //   //   headers: { "Content-Type": "application/json" },
  //   //   body: JSON.stringify(formData)
  //   // });
  //   // const loggedIn = await loggedInResponse.json();
  //   // if (loggedIn && loggedIn.successfull) {
  //   //   console.log("Email sent sucessfully")
  //   // } else {
  //   //   console.log("error occured")
  //   // }
  // }

  return (
    <div className='hero'>
      <div className='_container'>
        <div className='text-container'>
          {/* <span><h1>Words<br />Connecting<br />Maps</h1></span> */}
          <h1>The Ultimate Translation Platform for Your Business</h1>
          <p>Find the best transalator for your business</p>
        </div>
      </div>
    </div>
  )
}

export default Hero