import React from "react";

import axios from "axios";
import { Input, Button, Box, FormControl } from "@chakra-ui/core";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateName = (name) => {
  var letter = /^[a-zA-Z\s]*$/;
  if (name.match(letter) && name.length > 2) {
    return true;
  } else {
    return false;
  }
};
const validateSubject = (name) => {
  var letter = /^[a-zA-Z0-9\s]*$/;
  if (name.match(letter) && name.length > 2) {
    return true;
  } else {
    return false;
  }
};
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
class FooterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      dateTime: Date(),
      errors: {
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  }
  submitHandler = (e) => {
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      console.log(this.state);
      axios
        .post("http://52.73.189.181/inquiries", this.state)
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            this.setState({
              name: "",
              phone: "",
              email: "",
              subject: "",
              message: "",
              errors: {
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
              },
            });
          }
          alert("submitted Successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Invalid application");
    }
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = !validateName(value) ? "Enter a valid Name" : "";
        break;
      case "subject":
        errors.subject = !validateSubject(value) ? "Enter a valid subject" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "phone":
        errors.phone = value.length === 10 ? "" : "Enter a valid number";
      default:
        break;
    }
  };
  render() {
    const { name, phone, email, subject, message } = this.state;
    const input_style = {
      border: "none",
      outline: "none",
      _hover: "none",
      variant: "unstyled",
      borderBottom: "1px solid rgba(161,161,161,1)",
    };
    return (
      <Box bg="blue.700" color="white">
        <Box fontSize="3xl">Got any questions?</Box>
        <Box fontSize="lg" pb={6} color=" #A1A1A1">
          Please fill the below details
        </Box>
        <form onSubmit={this.submitHandler}>
          <FormControl mb={8}>
            <Input
              type="text"
              name="name"
              value={name}
              required
              onChange={this.changeHandler}
              placeholder="Name*"
              bg="blue.700"
              {...input_style}
            />
            {this.state.errors.name.length > 0 && (
              <Box color="Red" fontWeight="700">
                {this.state.errors.name}
              </Box>
            )}
          </FormControl>

          <FormControl mb={8}>
            <Input
              type="number"
              name="phone"
              maxLength="10"
              pattern="\d{10}"
              title="please enter proper phone number"
              value={phone}
              required
              onChange={this.changeHandler}
              placeholder="Mobile Number*"
              bg="blue.700"
              {...input_style}
            />
            {this.state.errors.phone.length > 0 && (
              <Box color="Red" fontWeight="700">
                {this.state.errors.phone}
              </Box>
            )}
          </FormControl>
          <FormControl mb={8}>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={this.changeHandler}
              placeholder="Email"
              bg="blue.700"
              {...input_style}
            />
            {this.state.errors.email.length > 0 && (
              <Box color="Red" fontWeight="700">
                {this.state.errors.email}
              </Box>
            )}
          </FormControl>
          <FormControl mb={8}>
            <Input
              type="text"
              value={subject}
              name="subject"
              required
              onChange={this.changeHandler}
              placeholder="Subject*"
              bg="blue.700"
              {...input_style}
            ></Input>
            {this.state.errors.subject.length > 0 && (
              <Box color="Red" fontWeight="700">
                {this.state.errors.subject}
              </Box>
            )}
          </FormControl>
          {/* {this.state.errors.subject.length > 0 && (
            <Box color="Red" fontWeight="700">
              {this.state.errors.subject}
            </Box>
          )} */}
          <FormControl mb={8}>
            <Input
              type="text"
              name="message"
              value={message}
              required
              onChange={this.changeHandler}
              placeholder="Message*"
              bg="blue.700"
              {...input_style}
            ></Input>
          </FormControl>
          <Button
            type="submit"
            bg="#EBA71F"
            color="white"
            mt={6}
            s="sm"
            _hover="none"
          >
            Submit
          </Button>
        </form>
      </Box>
    );
  }
}

export default FooterForm;
