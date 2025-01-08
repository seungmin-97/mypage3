import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

//yarn add @emailjs/browser --save
//npm install @emailjs/browser --save

const ContactUs = () => {
  const form = useRef();
  // const [inputs, setInputs] = useState({
  //   fromname:'',
  //   toname:'',
  //   message:'',
  //   phone:'',
  //   email:''
  // });

  const {fromname,toname,message,phone,email} = inputs

  const onChange = (e) => {
    setInputs(e.target.value)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
      //   publicKey: 'YOUR_PUBLIC_KEY',
      // })
      .sendForm('service_5jqfxln', 'template_fvwt8hi', form.current, {
        publicKey: 'Ad8Qc00YIFQsyzfQ9',
      })
      .then(
        (result) => {
          alert('전송되었습니다')
          console.log('SUCCESS!');
        },
        (error) => {
          alert('전송이 실패했습니다')
          console.log('FAILED...', error.text);
        },
      );
      // setInputs({
      //   fromname:'',
      //   toname:'',
      //   message:'',
      //   phone:'',
      //   email:''
      // })
  };

  return (
    <div>
      <h3>메일보내기</h3>
      <form ref={form} onSubmit={sendEmail}>
      <p>
        <label>보내는 사람</label>
        <input type='text' onChange={onChange} name='from_name' />
      </p>
      <p>
      <label>받는사람</label>
      <input type="text" onChange={onChange} name="to_name" />
      </p>
      <p>
      <label>Phone</label>
      <input type="text" onChange={onChange} name="phone" />
      </p>
      <p>
      <label>Email</label>
      <textarea name="email" />
      </p>
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};

export default ContactUs;