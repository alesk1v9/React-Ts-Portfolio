import { useState }from 'react'
import classes from "./Contact.module.css";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {

    
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert("Please input all the requirements")
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };
    
    emailjs.send('service_akf43kc', 'template_hphs9vj', templateParams, 'AfaI_7_I8d_WMyVoV')
    .then(() => {
      alert("Email sent");

      setName ('');
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      alert(`Something went wrong, ${err.message} !`);
    })
  }

  return (
    <div className={classes.contact_container}>
      <form data-aos="fade-left" onSubmit={sendEmail}>
        <h2>Get in touch</h2>
        <input placeholder='name' onChange={(e)=> setName(e.target.value)} 
        type="text" value={name}/>
        <input placeholder='email' onChange={(e) => setEmail(e.target.value)} 
        type="email" value={email} />
        <textarea placeholder='type here your message' onChange={(e) => setMessage(e.target.value)} 
        value={message} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact