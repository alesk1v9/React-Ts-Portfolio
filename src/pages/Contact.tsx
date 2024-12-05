import { useState }from 'react'
import classes from "./Contact.module.css";

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={classes.contact_container}>
      <h2>Get in touch</h2>
      <form>
        <input placeholder='name' onChange={(e)=> setName(e.target.value)} 
        type="text" value={name}/>
        <input placeholder='email' onChange={(e) => setEmail(e.target.value)} 
        type="email" value={email} />
        <input placeholder='type here your message' onChange={(e) => setMessage(e.target.value)} 
        type="textarea" value={message} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact