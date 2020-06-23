import React from 'react';

import { Flex, Box, useTheme, useDisclosure,Text } from '@chakra-ui/core';
import { useLocation, Link } from 'react-router-dom';
import PhoneImage from '../Assets/Phone_White.svg'
import EmailImage from '../Assets/Email_White.svg'
import copyright from '../Assets/Copyright.svg'
import Footerform from './FooterForm'
function FooterUpdate(){
    const quickLinks = [
        { title: "Home", link: "/", },
        { title: "About Dr.Finance", link: "/about", },
        { title: "Join as referral Partner", link: "/joinasreferral", },
        { title: "Contact", link: "/contact", },
        { title: "Terms and conditions", link: "/termsandconditions", },
        { title: "FAQs", link: "/faqs", },
    ]
    const product=[
        {title:"Loans",link:'/loans'},
        {title:"Investments",link:'/investments'},
        {title:"insurance",link:'/insurance'},
        {title:'Credit Cards',link:'/creditcards'}
    ]
    const head=[{ title:'QUICK LINKS'},{title:'PRODUCT'}]
    
    
    return(

        <Flex  pb={20} bg="rgba(9,47,75,1)" color="white" justifyContent="space-around" pt={20} flexDir={{ base: "column-reverse", md: "row" }}>
            <Box display={{ base: "none", md: "block" }} >
            <TitleView title="QUICK LINKS"/>
            {quickLinks.map((data,idx)=>(
                <Flex
                as={Link}
                fontWeight="bold"
                key={data.link}
                to={data.link}
                fontSize="sm" mb={6}>{data.title}</Flex>
            ))}
            <Flex >
            <Box as="img" mr={2} src={copyright} />
            <Box fontSize="md" fontWeight="300" color="rgba(208,208,208,1)">2020 Dr. Finance</Box>
            </Flex>
           </Box>
           <Box display={{ base: "none", md: "inline" }}>
               <TitleView title="PRODUCTS"/>
               {product.map((data,idx)=>(
                <Flex
                as={Link}
                fontWeight="bold"
                key={data.link}
                to={data.link}
                fontSize="sm" mb={6}>{data.title}</Flex>
            ))}
           </Box>
           <Box  p={{base:"24px",md:"0"}}>
          
           <TitleView title="Get in Touch" />
                    
                            <Flex  fontSize="sm" mb={6}>
                                <Box as="img" mr={2} src={PhoneImage} />
                                <div>+91 95814 76948</div>
                            </Flex >
                            <Flex>
                                <Box as="img" mr={2} src={EmailImage} />
                                <div>support@drfinance.com</div>
                            </Flex>
                            <Flex display={{ base: "flex", md: "none" }} mt={{base:"40px",md:"0"}}>
                            <Box as="img" mr={2} src={copyright} />
                            <Box fontSize="md" fontWeight="300" color="rgba(208,208,208,1)">2020 Dr. Finance</Box>
                            </Flex>
                        
           </Box>
           <Box border={{base:"none",md:'1px solid'}} p={{base:"0",md:"3%"}} px={{base:"24px",md:"3%"}} mr={{base:"0",md:"150px"}}>
               <Footerform/> 
           </Box>

        </Flex>
        

    )
}
const TitleView = ({ title }) => <Text fontWeight="bold" fontSize="md" textTransform="uppercase" mb={4}>{title}</Text>
export default FooterUpdate