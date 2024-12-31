import axios from 'axios';
import { useState } from 'react';

const BookAppointment: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phNo, setPhNo] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8084/book', {
        name: name,
        email: email,
        phNo: phNo,
        message: message
        },
      );
      console.log(response.data);

    } catch (error: any) {
      console.error(error.response?.data || 'Appointment booking failed.');
    }
  };

  return (
    <>
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor='email'>Email: </label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor='phNo'>Phone Number: </label>
        <input
          id="phNo"
          type="tel"
          value={phNo}
          onChange={(e) => setPhNo(e.target.value)}
          required
        />

        <label htmlFor='message'>Message: </label>
        <input
          id="message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">
          Book
        </button>
      </form>
    </div>
    </>
  );
};

export default BookAppointment;