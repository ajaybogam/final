import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  FormControl,
  Input,
  FormErrorMessage,
  Select,
  Stack,
  Text,
  Flex,
  Box,
  List,
} from "@chakra-ui/core";
import './ApplyForProduct.css'
import Success from "../../Assets/Success.svg";

import { useForm } from "react-hook-form";
import GotAnyQuestions from "./GotAnyQuestions";
import ApiServices from "../../services/api.services";
import CloseImg from "../../Assets/Close.svg";
import { helpYouOptions } from "../containers/home/options.list";
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
const validateNumber = (num) => {
  var letter = /^[0-9]*$/;
  if (num.match(letter)) {
    return false;
  } else {
    return true;
  }
};

const validator = {
  name: (value) => {
    if (validateName(value)) {
      return "Enter a valid Name";
    }
    return !value ? "Name is required" : true;
  },
  email: (value) => {
    return !value || !validEmailRegex.test(value)
      ? "Email is not valid!"
      : true;
  },
  phone: (value) => {
    if (validateNumber(value)) {
      return "Enter only numbers";
    }
    return !!value && value.length === 10 ? true : "Enter a valid number";
  },
  instrument: (value) => {
    return !value ? "Please select Product" : true;
  },
  category: (value) => {
    return !value ? "Please category Product" : true;
  },
};

const ApplyFormSuccess = (props) => {
  return (
    <React.Fragment>
      <Box d={props.show ? "block" : "none"}>
        <Flex direction="column" align="center" py={12}>
          <img src={Success} alt="Success" />
          <Text color="#4ED489" fontSize="xl" fontWeight="700">
            Application Submitted
          </Text>
          <Text textAlign="center" maxW="256px " fontSize="lg">
            We will get in touch with you soon to get the process started
          </Text>
        </Flex>
      </Box>
    </React.Fragment>
  );
};
const ApplyForProductForm = (props) => {
  const { handleSubmit, errors, register, formState, watch } = useForm();
  console.log({ errors, formState });
  const productsList = Object.keys(helpYouOptions).map(
    (key) => helpYouOptions[key]
  );

  const watchProductSelection = watch("instrument");
  // const productCategories =
  //   (
  //     productsList.filter(
  //       (instrument) => instrument.title === watchProductSelection
  //     )[0] || {}
  //   ).list || [];
  const productCategories = () => {
    const data = productsList.filter((instrument) => instrument.title === watchProductSelection)[0] || []
    const primary = data['list'] || []
    const secondary = data['secondary'] || []
    return primary.concat(secondary['list']) || []
  }

  function onSubmit(values) {
    setTimeout(() => {
      ApiServices.instrument
        .apply({ ...values, dataTime: new Date().getTime() })
        .then((resp) => resp.data)
        .then((response) => {
          props.onSuccess();
        })
        .catch((err) => { });
    }, 1000);
  }
  const Validator = (val) => {
    return console.log(val);
  };

  return (
    <React.Fragment>
      <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name} mb={4}>
          <Input
            placeholder="Name*"
            name="name"
            ref={register({ validate: validator.name })}
            onChange={() => Validator()}
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
          <Select
            name="instrument"
            defaultValue={""}
            ref={register({ validate: validator.instrument })}
          >
            <option value="" disabled>
              Select instrument
            </option>
            {productsList.map((instrument) => (
              <option key={instrument.title} value={instrument.title}>
                {instrument.title}
              </option>
            ))}
          </Select>
          <FormErrorMessage>
            {errors.instrument && errors.instrument.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.category} mb={4}>
          <Select
            name="category"
            defaultValue={""}
            ref={register({ validate: validator.category })}
          >
            <option value="" >
              Select Category
            </option>
            {productCategories().map((category,idx) => (
              <option value={category} key={idx}>
                {category}
              </option>
            ))}
          </Select>
          <FormErrorMessage>
            {errors.category && errors.category.message}
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
  const BackTOApply=()=>{
    onClose();
    setIsSuccess(false)
  }
  return (
    <React.Fragment>
      <Button onClick={onOpen} variantColor="orange">
        Apply
      </Button>
      <Modal blockScrollOnMount isOpen={isOpen} onClose={BackTOApply} size="xl">
        <ModalOverlay />
        <ModalContent
          maxW={{ base: "90%", md: "420px" }}
          borderRadius={8}
          // my={{base:4,md:"auto"}}
          my="auto"
          minH="650px"
         
        >
          <ModalHeader display="Flex" justifyContent="space-between" mt={4}>
            <Box>
              <Text as="h3" fontSize="2xl" color="blue.400" lineHeight={1}>
                Apply for a product
              </Text>
             {!isSuccess&& <Text as="small" color="gray.400" fontWeight="normal">
                Please fill the below details
              </Text>}
            </Box>
            <Box cursor="pointer">
             <Box onClick={BackTOApply}> <img src={CloseImg} alt="close"   /></Box>
            </Box>
          </ModalHeader>

          <ModalBody>
            <Box maxW="520px">
            <ApplyFormSuccess show={isSuccess} />
              {isSuccess ? (
                null
              ) : (
                  <Box maxW={{ base: "100%", md: "280px" }}>
                    {" "}
                    <ApplyForProductForm
                      onClose={onClose}
                      onSuccess={onSuccess}
                    />{" "}
                  </Box>
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
