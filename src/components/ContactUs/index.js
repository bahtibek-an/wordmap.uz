import React, {useState} from 'react';
import "./ContactUs.css";
import SuccessModal from "./component/SuccessModal";
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        client: 'Individual',
        language: '',
        translation: 'Written',
        description: ''
    });

    const [ success, setSuccess ] = useState(false);

    const { name, email, client, language, translation, description } = formData;
    const token = "6217576643:AAGnZNEtdZGjpHKM4b9-Lt6RUbwDLfd37Pk";
    const chat_id = "-960297993";

    const txt = JSON.stringify(
        `<b>First Name:</b> ${name}%0A<b>Email:</b> ${email}%0A<b>Language Pair:</b> ${language}%0A<b>Client Type:</b> ${client}%0A<b>Translation Type:</b> ${translation}%0A<b>Message:</b> ${description}%0A`
    ).split('"')[1];

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const data = await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${txt}`, {
            method: "POST",
            data: txt
        });
        setSuccess(true);
        // console.log("formData", formData)
        //
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // };
        //
        // fetch(process.env.BACKEND_URL + 'send-email', requestOptions)
        //     .then(response => response.json())

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
            <div className="description">
                <p>Please complete the form below if you would like to order translation; we will respond to you within 24 hours!</p>
            </div>
            <div className="__container">
                <div className='form-container'>
                    <div className='_information'>
                        <form onSubmit={onSubmit}>
                            {success && <SuccessModal
                                close={() => {
                                    setSuccess(false);
                                    setFormData({
                                        name: '',
                                        email: '',
                                        client: 'Individual',
                                        language: '',
                                        translation: 'Written',
                                        description: ''
                                    })
                                }}
                            />}
                            <label>Full Name:</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={name}
                                required
                                onChange={onChange} />
                            <label>Client Type:</label>
                            <select name="client" value={client} onChange={onChange}>
                                <option value="Individual">Individual</option>
                                <option value="Corporate">Corporate</option>
                            </select>
                            <label>Email Address:</label>
                            <input
                                required
                                type='email'
                                id='email'
                                name='email'
                                value={email}
                                onChange={onChange}
                            />
                            <label>Language Pair:</label>
                            <input
                                required
                                type='text'
                                id='language'
                                name='language'
                                value={language}
                                onChange={onChange}
                            />
                            <label>Translation Type:</label>
                            <select name="translation" value={translation} onChange={onChange}>
                                <option value="Written">Written</option>
                                <option value="Verbal">Verbal</option>
                            </select>
                            <label>Project Decription:</label>
                            <textarea
                                required
                                type='text'
                                id='description'
                                name='description'
                                value={description}
                                onChange={onChange}
                                rows={5}
                            />
                            <input 
                                type="submit" 
                                className="button" 
                                value="Submit" 
                                disabled={success}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;