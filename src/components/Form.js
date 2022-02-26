import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Form = () => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
  });

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     errors: {
  //       // name: "",
  //       subject: "",
  //       // phone: "",
  //       email: "",
  //     },
  //   };
  // }

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    // let errors = this.state.errors;

    switch (name) {
      case "name":
        setErrors({
          ...errors,
          name: value.length === 0 ? "Name is not empty" : "",
        });
        // errors.name = value.length === 0 ? "Name is not empty" : "";
        break;
      // case "subject":
      //   errors.subject = value.length < 4 ? "Subject must be at least 4 characters" : "";
      //   break;
      // case "phone":
      //   errors.phone = value.length < 5 ? "phone is not empty" : "";
      //   break;
      case "email":
        setErrors({
          ...errors,
          email: value.length < 5 ? "Email is not empty" : "",
        });
        // errors.email = value.length < 5 ? "Subject is not empty" : "";
        let appos = value.indexOf("@");
        let dots = value.lastIndexOf(".");

        if (appos < 1 || dots - appos < 2) {
          setErrors({ ...errors, email: "please enter valid email" });
          // errors.email = "please enter valid email";
        }
        break;

      default:
        break;
    }
    // setErrors({...errors});
    setErrors({
      ...errors,
      [name]: value,
    });
    // this.setState({ errors, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          MySwal.fire({
            // position: 'top-end',
            icon: "success",
            title: "Thank you for the message!",
            showConfirmButton: false,
            timer: 1800,
            // title: 'Custom width, padding, color, background.',
            // width: 600,
            // padding: '3em',
            color: "#2f2f2f",
            // background: '#fff url(/image/success-dance.gif)',
            // backdrop: `
            //   rgba(0,0,123,0.4)
            //   url("/image/success-dance.gif")
            //   top
            //   no-repeat
            // `
          });

          console.log(result.text);
          // alert("Thank you for your message! Look forward to chatting with you!");
        },
        (error) => {
          MySwal.fire({
            // position: 'top-end',
            icon: "error",
            title: "Form is invalid",
            showConfirmButton: false,
            timer: 1800,
            // title: 'Custom width, padding, color, background.',
            // width: 600,
            // padding: '3em',
            color: "#2f2f2f",
          });

          console.log(error.text);
          // alert("form is invalid");
        }
      );
  };

  // const { errors } = this.state;
  return (
    <form onSubmit={submitHandler} className="form_class">
      <div className="row">
        <div className="col-lg-6">
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Your Name*"
            onChange={handleChange}
          />
          <p>{errors.name}</p>
        </div>
        <div className="col-lg-6">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Your Email*"
            onChange={handleChange}
          />
          <p>{errors.email}</p>
        </div>
        {/* <div className="col-lg-6">
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              placeholder="Subject*"
              onChange={this.handleChange}
            />
            <p>{errors.subject}</p>
          </div> */}
        {/* <div className="col-lg-6">
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Phone*"
              onChange={this.handleChange}
            />
            <p>{errors.phone}</p>
          </div> */}
      </div>
      <textarea
        name="message"
        id="message"
        className="form-control"
        rows="6"
        placeholder="Your Message ..."
        onChange={handleChange}
      ></textarea>
      <button type="submit" id="shadow" className="btn send_btn theme_btn">
        Send Message
      </button>
      {/* </div> */}
    </form>
  );
};

export default Form;
