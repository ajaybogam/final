import React, { } from 'react';
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

import { useForm } from 'react-hook-form';
import GotAnyQuestions from './GotAnyQuestions';
import ApiServices from '../../services/api.services';


const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validator = {
    name: (value) => {
        return !value ? "Name is required" : true
    },
    email: (value) => {
        return (!value || !validEmailRegex.test(value)) ? "Email is not valid!" : true
    },
    phone: (value) => {
        return (!!value && value.length === 10) ? true : "Enter a valid number"
    },
    instrument: (value) => {
        return !value ? "Instrument is required" : true
    },
}

const ApplyForProductForm = props => {
    const { handleSubmit, errors, register, formState } = useForm();

    function onSubmit(values) {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            ApiServices
                .product.apply(values)
                .then(resp => resp.data).then(response => {

                }).catch(err => {

                })
        }, 1000);
    }

    return <React.Fragment>
        <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name} mb={4}>
                <Input
                    placeholder="Name*"
                    name="name"
                    ref={register({ validate: validator.name })}
                />
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.name} mb={4}>
                <Input
                    placeholder="Phone*"
                    name="phone"
                    ref={register({ validate: validator.phone })}
                />
                <FormErrorMessage>
                    {errors.phone && errors.phone.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.name} mb={4}>
                <Input
                    placeholder="Email ID*"
                    name="email"
                    ref={register({ validate: validator.email })}
                />
                <FormErrorMessage>
                    {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl mb={4}>
                <Select
                    name="instrument"
                >
                    <option value="" selected disabled>Select Instrument</option>
                    <option value="Loans">Loans</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Investments">Investments</option>
                    <option value="Credit Cards">Credit Cards</option>
                </Select>
            </FormControl>
            <Flex my={4}>
                <Button type="submit" variantColor="orange" mr={3} >Submit</Button>
                <Button variantColor="orange" variant="outline" onClick={props.onClose}>Cancel</Button>
            </Flex>
        </Stack>
    </React.Fragment>
}

const ApplyForProduct = props => {
    const { isOpen, onOpen, onClose } = props
    return <React.Fragment>
        <Button onClick={onOpen} variantColor="orange">Apply</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent my={4}>
                <ModalHeader>
                    <Text as="h3" fontSize="2xl" color="blue.400" lineHeight={1}>Apply for a product</Text>
                    <Text as="small" color="gray.400" fontWeight="normal">Please fill the below details</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box maxW="280px">
                        <ApplyForProductForm onClose={onClose} />
                    </Box>
                </ModalBody>
                <hr />
                <GotAnyQuestions />
            </ModalContent>
        </Modal>
    </React.Fragment>
}

export default ApplyForProduct;