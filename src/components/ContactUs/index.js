import React, {useState} from 'react';
import "./ContactUs.css";
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        client: 'Individual',
        language: '',
        translation: 'Written',
        description: ''
    });

    const { name, email, client, language, translation, description } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log("formData", formData)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        fetch(process.env.BACKEND_URL + 'send-email', requestOptions)
            .then(response => response.json())

        // const loggedInResponse = await post("http://localhost:5000/send-email", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(formData)
        // });
        // const loggedIn = await loggedInResponse.json();
        // if (loggedIn && loggedIn.successfull) {
        //   console.log("Email sent sucessfully")
        // } else {
        //   console.log("error occured")
        // }
    }

    return (
        <div className="contact-us" id="contact">
            <h1 className="title">Contact Us</h1>
            <div className="__container">
                <div className='form-container'>
                    <div className='information'>
                        <form onSubmit={onSubmit}>
                            <label>Full Name:</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={name}
                                onChange={onChange} />
                            <label>Client Type:</label>
                            <select value={client} onChange={onChange}>
                                <option value="Individual">Individual</option>
                                <option value="Corporate">Corporate</option>
                            </select>
                            <label>Email Address:</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={email}
                                onChange={onChange}
                            />
                            <label>Language Pair:</label>
                            <input
                                type='text'
                                id='language'
                                name='language'
                                value={language}
                                onChange={onChange}
                            />
                            <label>Translation Type:</label>
                            <select value={translation} onChange={onChange}>
                                <option value="Written">Written</option>
                                <option value="Verbal">Verbal</option>
                            </select>
                            <label>Project Decription:</label>
                            <textarea
                                type='text'
                                id='description'
                                name='description'
                                value={description}
                                onChange={onChange}
                                rows={5}
                            />
                            <input type="submit" className="button" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;