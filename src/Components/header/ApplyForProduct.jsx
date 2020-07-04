import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Input,
  FormErrorMessage,
  Select,
  Stack,
  Text,
  Flex,
  Box,
} from "@chakra-ui/core";
import Success from "../../Assets/Success.svg";

import { useForm } from "react-hook-form";
import GotAnyQuestions from "./GotAnyQuestions";
import ApiServices from "../../services/api.services";
import CloseImg from "../../Assets/Close.svg";
import { useState } from "react";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateName = (name) => {
  var letter = /^[a-zA-Z\s]*$/;
  if (name.match(letter) && name.length > 2) {
    return false;
  } else {
    return true;
  }
};
const validateNumber=(num)=>{
  var letter= /^[0-9]*$/;
  if(num.match(letter)){
    return false
  }
  else{
    return true
  }
}

const validator = {
  name: (value) => {
    if(validateName(value)){
      return "Enter a valid Name"
    }
    return !value ? "Name is required" : true;
  },
  email: (value) => {
    return !value || !validEmailRegex.test(value)
      ? "Email is not valid!"
      : true;
  },
  phone: (value) => {
    if(validateNumber(value)){
      return "Enter only numbers"
    }
    return !!value && value.length === 10 ? true : "Enter a valid number";
  },
  instrument: (value) => {
    return !value ? "Instrument is required" : true;
  },
};

// const changeHandler = (e) => {
  
  // const { name, value } = e.target;
  // switch (e) {
  //   case "name":
  //    return  !validateName(e) ? setName_error("Enter a valid Name") : "";
  //     break;
    // case "insturment":
    //   errors.subject = !validateSubject(e) ? "Enter a valid subject" : "";
    //   break;
    // case "email":
    //   errors.email = validEmailRegex.test(e) ? "" : "Email is not valid!";
    //   break;
    // case "phone":
    //   errors.phone = e.length === 10 ? "" : "Enter a valid number";
//     default:
//       break;
//   }
// };
const ApplyFormSuccess = (props) => {
  return (
    <React.Fragment>
      <Box>
        <Flex direction="column" align="center" py={12}>
          <img src={Success} alt="Success" />
          <Text color="#4ED489" fontSize="lg" fontWeight="700">
            Application Submitted
          </Text>
          <Text textAlign="center" maxW="256px">
            We will get in touch with you soon to get the process started
          </Text>
        </Flex>
      </Box>
    </React.Fragment>
  );
};
const ApplyForProductForm = (props) => {
  const { handleSubmit, errors, register, formState } = useForm();
  // const [name_error,setName_error]=useState('')
  console.log({ errors, formState });
  function onSubmit(values) {
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      ApiServices.product
        .apply(values)
        .then((resp) => resp.data)
        .then((response) => {
          props.onSuccess();
          // props.onClose();
        })
        .catch((err) => { });
    }, 1000);
  }
  const Validator=(val)=>{
    return (console.log(val))
  }

  return (
    <React.Fragment>
      <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name} mb={4}>
          <Input
            placeholder="Name*"
            name="name"
            ref={register({ validate: validator.name })}
            onChange={()=>(Validator())}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.phone} mb={4}>
          <Input
            placeholder="Phone*"
            name="phone"
            ref={register({ validate: validator.phone })}
          />
          <FormErrorMessage>
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email} mb={4}>
          <Input
            placeholder="Email ID*"
            name="email"
            ref={register({ validate: validator.email })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.instrument} mb={4}>
          <Select name="instrument" defaultValue={""} ref={register({ validate: validator.instrument })}>
            <option value="" disabled>
              Select Instrument
            </option>
            <option value="Loans">Loans</option>
            <option value="Insurance">Insurance</option>
            <option value="Investments">Investments</option>
            <option value="Credit Cards">Credit Cards</option>
          </Select>
          <FormErrorMessage>
            {errors.instrument && errors.instrument.message}
          </FormErrorMessage>
        </FormControl>
        <Flex my={4}>
          <Button type="submit" variantColor="orange" mr={3}>
            Submit
          </Button>
          <Button
            variantColor="orange"
            variant="outline"
            onClick={props.onClose}
            
          >
            Cancel
          </Button>
        </Flex>
      </Stack>
    </React.Fragment>
  );
};

const ApplyForProduct = (props) => {
  const { isOpen, onOpen, onClose } = props;
  const [isSuccess, setIsSuccess] = React.useState(false);
  const onSuccess = () => setIsSuccess(true);
  return (
    // <<<<<<< HEAD
    //     <React.Fragment>
    //       <Button onClick={onOpen} variantColor="orange">
    //         Apply
    //       </Button>
    //       <Modal isOpen={isOpen} onClose={onClose} size="xl">
    // =======
    <React.Fragment>
      <Button onClick={onOpen} variantColor="orange">
        Apply
      </Button>

      <Modal blockScrollOnMount isOpen={isOpen} onClose={onClose} size="xl">
        {/* >>>>>>> aa70cad64b9cd484eb79f485f627dd8ef3afb2d5 */}
        <ModalOverlay />
        <ModalContent maxW={{ base: "90%", md: "420px" }} borderRadius={8} my={{ base: 4 }}>
          <ModalHeader display="Flex" justifyContent="space-between" mt={4}>
            <Box>
              <Text as="h3" fontSize="2xl" color="blue.400" lineHeight={1}>
                Apply for a product
              </Text>
              <Text as="small" color="gray.400" fontWeight="normal">
                Please fill the below details
              </Text>
            </Box>
            <Box cursor="pointer">
              <img src={CloseImg} alt="close" onClick={onClose} />
            </Box>
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Box maxW="520px">
              {isSuccess ? (
                <ApplyFormSuccess />
              ) : (
                  <Box maxW={{base: "100%", md: "280px"}}>  <ApplyForProductForm onClose={onClose} onSuccess={onSuccess} /> </Box>
                )}
            </Box>
          </ModalBody>
          <hr />
          <GotAnyQuestions />
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default ApplyForProduct;
