import React, { useState, useEffect } from "react";
import "../css/TermsCondition.css";
import { Box, Text, Flex, Divider, Stack } from "@chakra-ui/core";
// import Scrollspy from 'react-scrollspy'
import PageWrapper from "./shared/PageWrapper";
import { Link } from "react-router-dom";

const terms = [
  {
    section: "",
    heading: [
      "Hello and welcome to www.dr-finance.in (“Website”) owned and operated by Swadishaa Financial services Private Limited (“Company” , “We” ,or “Us”), a company incorporated under the provisions of the Companies Act, 1956 and with its registered office at Flat # 302, Sarvodaya Residency,Tulasinagar colony,Golnaka,Amberpet, Hyderabad ,Telangana, 500013 India.",
      "This document, agreement and understanding is an electronic record in conformance with the terms of the Information Technology Act, 2000 ,and is generated electronically and does not require any physical or digital signatures. This document is published in accordance with the provisions of Rule 3 of the Information Technology (Intermediaries Guidelines) Rules, 2011. ",
      "Before accessing, reading or registering your information on the Website, users (hereafter referred to as “you”, “your” or “users”) must ,read and agree to be bound by all of the terms and conditions (“Terms”) herein and the Privacy Policy provided on the Website. By using the Website and the Company's products, software, services (“Services”), you understand and agree that Company will consider your use of the Services to constitute acceptance of these Terms. You may not use the Services if you do not accept the Terms. If you do not agree to be bound by these Terms and the Privacy Policy, you may not use the Website in any way. ",
      "We strongly recommended that you return to this page periodically to review the most current version of the Terms, which are updated ,periodically. The Company reserves the right at any time, at its sole discretion, to change or otherwise modify the Terms without prior notice, and your continued access or use of this Website signifies your acceptance of the updated or modified Terms. If you object to these Terms or any subsequent modifications to these Terms, your only recourse is to immediately terminate use of the Website.",
    ],
  },
  {
    section: "Proprietary rights ",
    heading: [
      "You acknowledge and agree that the Company owns all rights, title and interest in and to the Services, including any intellectual ,property rights which pertain to the Services (whether registered or not). You further acknowledge that the Services may contain information which is designated confidential by the Company and that you shall not disclose such information without the Company’s prior written consent.  ",
      "The Company grants you a limited, non-transferable, temporary license to access and make personal use of the Website, its content and ,the Services. This license does not confer any right to download, copy, create a derivative work from, modify, reverse engineer, reverse assemble or otherwise attempt to discover any source code, sell, assign, sub-license, grant a security interest in or otherwise transfer any right in the Services. You do not have the right to use any of Company's trade names, trademarks, service marks, logos, domain names, and other distinctive brand features. You do not have the right to remove, obscure, or alter any proprietary rights notices (including trademark and copyright notices), which may be affixed to or contained within the Services. You will not copy or transmit any of the Services. ",
    ],

    id: 2,
  },
  {
    section: "Usage of the Website ",
    heading: [
      "The Website is intended for personal and non-commercial use. Only register to become a member of the Website if you are above the age of ,18 and can enter into binding contracts. You are responsible for maintaining the secrecy of your passwords, login and account information. You will be responsible for all use of the Website by you and anyone using your password and login information (with or without your permission). ",
      "You also agree to provide true, accurate, current and complete information about yourself as prompted by the Website. If you provide any ,information that is untrue, inaccurate, not updated or incomplete (or becomes untrue, inaccurate, not updated or incomplete), or the Company has reasonable grounds to suspect that such information is untrue, inaccurate, not updated or incomplete, the Company has the right to suspend or terminate your account and refuse any and all current or future use of the Website (or any portion thereof) or Services in connection with the Website.",
      "By making use of the Website, and furnishing your personal/contact details, you hereby agree that you are interested in availing and ,purchasing the Services that you have selected. You hereby agree that the Company may contact you either electronically or through phone, to understand your interest in the selected products and Services and to fulfil your demand or complete your application. You specifically understand and agree that by using the Website you authorize the Company and its affiliates and partners to contact you for any follow up calls in relation to the Services provided through the Website. You expressly waive the Do Not Call registrations on your phone/mobile numbers for contacting you for this purpose. You also agree that the Company reserves the right to make your details available to partners and you may be contacted by the partners for information and for sales through email, telephone and/or sms. You agree to receive promotional materials and/or special offers from the Company through emails or sms.",
      "The usage of the Website may also require you to provide consent for keying in your Sensitive Information (“SI”) (including but not ,limited to user ids and passwords), as may be necessary to process your application through this Website. SI keyed in shall be required for enabling easy, faster and paperless (to the extent possible) processing of applications for financial products selected by you. The Company shall adhere to best industry practices including information security, data protection and privacy law while processing such applications and hosting the SI interface where key in of SI is required. However, the Company shall not be liable to you against any liability or claims which may arise out of such transactions.",
      "You may only use the Website to search for and to apply for loans, credit cards or other financial products as may be displayed on the ,Website from time to time and you shall not use the Website to make any fraudulent applications. You agree not to use the Website for any purpose that is unlawful, illegal or forbidden by these Terms, or any local laws that might apply to you. Since the Website is in operation in India, while using the Website, you shall agree to comply with laws that apply to India and your own country (in case of you being a foreign national). We may, at our sole discretion, at any time and without advance notice or liability, suspend, terminate or restrict your access to all or any component of the Website.",
      "You are prohibited from posting or transmitting to or through this Website: (i) any unlawful, threatening, libellous, defamatory, ,obscene, pornographic, or other material or content that would violate rights of publicity and/or privacy or that would violate any law; (ii) any commercial material or content (including, but not limited to, solicitation of funds, advertising, or marketing of any good or services); and (iii) any material or content that infringes, misappropriates or violates any copyright, trademark, patent right or other proprietary right of any third party. You shall be solely liable for any damages resulting from any violation of the foregoing restrictions, or any other harm resulting from your posting of content to this Website. ",
    ],

    id: 3,
  },
  {
    section: "Privacy Policy ",
    heading: [
      "By using the Website, you hereby consent to the use of your information as we have outlined in our Privacy Policy.",
    ],
  },
  {
    section: "Our partners ",
    heading: [
      "Display of loan, mutual funds, credit card or other financial products, offered by third parties, on the Website does not in any way ,imply, suggest, or constitute any sponsorship, recommendation, opinion, warranty, advice or approval of the Company against such third parties or their products. You agree that the Company is in no way responsible for the accuracy, timeliness or completeness of information it may obtain from these third parties. Your interaction with any third party accessed through the Website is at your own risk, and the Company will have no liability with respect to the acts, omissions, errors, representations, warranties, breaches or negligence of any such third parties or for any personal injuries, death, property damage, or other damages or expenses resulting from your interactions with the third parties",
      "You agree and acknowledge that the credit shall be at the sole discretion of the Company’s financial partners (lenders, credit card ,companies, mutual fund companies) while making any application through the Website for a financial product offered by such financial partners; the Company shall not be held liable for any delay, rejection or approval of any application made through its Website. ",
    ],
  },
  {
    section: "Disclaimer of warranty ",
    heading: [
      'The Website and all content and Services provided on the Website are provided on an "as is" and "as available" basis. The Company ,expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, and security and accuracy, as well as all warranties arising by usage of trade, course of dealing, or course of performance. The Company makes no warranty, and expressly disclaims any obligation, that: (a) the content will be up-to-date, complete, comprehensive, accurate or applicable to your circumstances; (b) The Website will meet your requirements or will be available on an uninterrupted, timely, secure, or error-free basis; (c) the results that may be obtained from the use of the Website or any Services offered through the Website will be accurate or reliable; or (d) the quality of any products, services, information, or other material obtained by you through the Website will meet your expectations. ',
    ],
  },
  {
    section: "Limitation of liability",
    heading: [
      "The Company (including its officers, directors, employees, representatives, affiliates, and providers) will not be responsible or liable ,for (a) any injury, death, loss, claim, act of god, accident, delay, or any direct, special, exemplary, punitive, indirect, incidental or consequential damages of any kind (including without limitation lost profits or lost savings), whether based in contract, tort, strict liability or otherwise, that arise out of or is in any way connected with (i) any failure or delay (including without limitation the use of or inability to use any component of the Website), or (ii) any use of the Website or content, or (iii) the performance or non-performance by us or any provider, even if we have been advised of the possibility of damages to such parties or any other party, or (b) any damages to or viruses that may infect your computer equipment or other property as the result of your access to the Website or your downloading of any content from the Website",
      "The Website may provide links to other third party websites. However, since the Company has no control over such third party websites, ,you acknowledge and agree that the Company is not responsible for the availability of such third party websites, and does not endorse and is not responsible or liable for any content, advertising, products or other materials on or available from such third party websites. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party websites.",
    ],
  },
  {
    section: "	Indemnity ",
    heading: [
      "You agree to indemnify and hold the Company and its affiliates (and their officers, directors, agents and employees) harmless from any ,and against any claims, causes of action, demands, recoveries, losses, damages, fines, penalties or other costs or expenses of any kind or nature, including reasonable attorneys' fees, or arising out of or related to your breach of this Terms, your violation of any law or the rights of a third party, or your use of the Website. ",
    ],
  },
  {
    section: "Additional terms",
    heading: [
      "You may not assign or otherwise transfer your rights or obligations under these Terms. The Company may assign its rights and duties ,under these Terms without any such assignment being considered a change to the Terms and without any notice to you. If we fail to act on your breach or anyone else's breach on any occasion, we are not waiving our right to act with respect to future or similar breaches. Other terms and conditions may apply to loans, mutual funds, credit cards or other financial products that you may apply on the Website. You will observe these other terms and conditions. The laws of the India, without regard to its conflict of laws rules, will govern these Terms, as well as your and our observance of the same. If you take any legal action relating to your use of the Website or these Terms, you agree to file such action only in the courts located in Hyderabad, India. In any such action that we may initiate, the prevailing party will be entitled to recover all legal expenses incurred in connection with the legal action, including but not limited to costs, both taxable and non-taxable, and reasonable attorney fees. You acknowledge that you have read and have understood these Terms, and that these Terms have the same force and effect as a signed agreement",
    ],
  },
];

const headings = terms.map((term) => term.section);
headings[0] = "Introduction";

function TermsCondition() {
  const [active, setActive] = React.useState(0);
  const sectionRef = React.useRef();

  const onClick = (event, idx) => {
    const sectionId = `#section-${idx}`;
    if (sectionRef.current && sectionRef.current.querySelector(sectionId)) {
      const view = sectionRef.current.querySelector(sectionId);
      // sectionRef.current.scrollTop = view.offsetTop;
      view.scrollIntoView();
      sectionRef.current.scrollIntoView();
    }
    setActive(idx);
  };

  return (
    <Box ref={sectionRef}>
      <PageWrapper className="" my={16}>
        <Box py={8}>
          <Text
            maxW="580px"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            color="blue.400"
            lineHeight="1"
          >
            {" "}
            Terms & Conditions
          </Text>
          <Text maxW="480px" mt="16px" fontSize="xl">
            {" "}
            Last updated on 24 Jan 2020
          </Text>
        </Box>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "30%" }} py={1}>
            <Box boxShadow="0 1px 8px rgba(0,0,0,.2)" px={4} overflow="hidden">
              {headings.map((heading, idx) => (
                <Text
                  display="block"
                  color={active === idx ? "#1E9ED2" : "#A1A1A1"}
                  fontWeight="bold"
                  my={8}
                  cursor="pointer"
                  onClick={(e) => onClick(e, idx)}
                  key={heading}
                >
                  {heading}
                </Text>
              ))}
            </Box>
          </Box>
          <Box
            w={{ base: "100%", md: "70%" }}
            p={8}
            mt={{ base: 16, md: 2 }}
            height="560px"
            overflow="hidden"
            overflowY="auto"
          >
            {terms.map((term, idx) => (
              <Box
                key={idx}
                id={`section-${idx}`}
                p={{ base: 2, md: 8 }}
                pt={0}
                color="gray.600"
              >
                <Text fontWeight="bold" fontSize="xl" mb={idx === 0 ? 0 : 4}>
                  {term.section}
                </Text>
                <Stack spacing={4}>
                  {term.heading.map((content, index) => (
                    <Text key={index}>{content}</Text>
                  ))}
                </Stack>
                {idx < terms.length - 1 && <Divider mt={8} />}
              </Box>
            ))}
          </Box>
        </Flex>
      </PageWrapper>
    </Box>
  );
}

export default TermsCondition;
