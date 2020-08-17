import React from "react";
import "../css/TermsCondition.css";
import { Box, Text, Flex, Divider, Stack } from "@chakra-ui/core";
import PageWrapper from "./shared/PageWrapper";
import constants from "../utils/constants";

const terms = [
  {
    section: "",
    heading: [
      "Thank you for reviewing our privacy policy (“Privacy Policy”). This website (www.dr-finance.in) (“Website”) is owned and operated by Swadishaa Financial Services Private Limited (“Company”, “We” or “Us”). We take your privacy seriously and have outlined herein our policy for collecting, storing, transmitting and sharing your sensitive information (“SI”). In this Privacy Policy, we refer to our users as “user”, “you” or “your”",
      "The Company is strongly committed to protect the privacy of its customers and has taken necessary and reasonable measures consistent with best industry practices to protect the sensitivity and confidentiality of your information and it shall not be held liable for disclosure of SI when done in accordance with this Privacy Policy or pursuant to terms of the Terms of Use of this Website.",
      "This Privacy Policy explains how we protect SI that you or others provide on our Website and how we use that information in connection with the services offered through the Website (hereinafter termed 'Services').",
    ],
  },
  {
    section: "Sensitive Information ",
    heading: [
      "SI means any information, documents or details that relate to a natural person, which either directly or indirectly, or in combination with other information available or likely to be available with the Company, can identify such person. ",
    ],

    id: 2,
  },
  {
    section: "Applicability ",
    heading: [
      "This Privacy Policy is applicable to the Sensitive Information (including but not limited to details pertaining to your name, parentage, marital status, nationality, state of residence, city of residence, email address, date of birth, gender, contact number/mobile number, user ids, passwords, recent photograph, signature image, e-KYC through UIDAI, Aadhaar based e-Signature and other Know Your Customer (KYC) documents like address proof, identity proof, income proof, PAN or such other officially valid documents/details (OVDs) accepted for concluding a financial transaction) which are shared or uploaded by you, as and when you apply for the products and services vide the online application forms and questionnaires through usage of Website and which Company may become privy to.",
      "By visiting and/or using our Website, you agree to this Privacy Policy. Further, this Privacy Policy applies to all current and former visitors to the Website and to our online customers. It is strongly recommended for you to return to this page periodically to review the most current version of the Privacy Policy. Company reserves the right at any time, at its sole discretion, to change or otherwise modify the Privacy Policy without prior notice, and your continued access or use of this Website signifies your acceptance of the updated or modified Privacy Policy. However, if we make any material change to the Privacy Policy, we will notify you by email (sent to the e-mail address specified in your account) or by means of a notice on this Website prior to the change becoming effective.",
    ],

    id: 3,
  },
  {
    section: "Express Consent ",
    heading: [
      "You while providing the details/documents over the Website, including but not limited to Sensitive Information as mentioned hereinabove, expressly consent to Company (its affiliates and business partners) to contact you, to make follow up calls in relation to the services provided through the Website, for imparting product knowledge, offering promotional offers running on Website & various other offers offered by its partners on the Sites.",
      "The usage of the Website may also require you to provide consent for keying in or uploading your Sensitive Information and Sensitive Information (including but not limited to user ids and passwords), as may be necessary to process your application through the Website. Sensitive information keyed in or uploaded shall be required for enabling easy, quick and paperless (to the extent possible) processing of applications for financial products so chosen or availed by you.",
      "You hereby authorize and expressly consent us to share your demographic and Sensitive Information with third parties including but not limited to Credit Information Companies to do an aggregate check of your credit profile and for Company to send you targeted communications and offers by agreeing to the Terms of Use while accessing the Website. You hereby also consent Company to procure credit information and indicative scores from the credit information companies on your behalf.",
      "If you are no longer interested in sharing your Personal and Sensitive Information, please e-mail your request  Support@dr-finance.in Please note that it may take up to 72 business hours to process your request. By using the Website, you expressly waive the Do Not Call (DNC) and Do Not Disturb (DND) registrations on your phone/mobile numbers for contacting you for this purpose. Hence, there is no DNC or DND check required for the number you have provided on our Website. Such modes of contacting you may include sending SMSs, email alerts and telephonic calls.",
      "Company reserves the right (and you expressly authorize Company) to share or disclose your Sensitive Information when Company determines, in its sole discretion, that the disclosure of such information is necessary to provide you the Services and appropriate under the law.",
    ],
  },
  {
    section: "Opt-Out ",
    heading: [
      "In case you do not want to be disturbed over telephonic calls, kindly fill up the details requested under this section below, including the details of the telephone number(s) on which you do not wish to be contacted and submit the same at support@dr-finance.in from your email address registered at Company. The details that you provide through the opt-out email will remain confidential and once you have submitted them to us, your telephone number(s) will be removed from all our telemarketing calling lists within 15 business days. We will make every effort to ensure that you do not get any further telemarketing calls on such telephone number(s). The details to be submitted for opting-out shall be as below:",
      "Title*",
      "First Name*",
      "Last Name*",
      "Country*",
      "State*",
      "City*",
      "Email",
      "Mobile Number #",
      "Landline Phone Number #",
      "* Mandatory fields",
      "# Please enter your 10-digit mobile number. For International Numbers, please do not enter your country code",
    ],
  },
  {
    section: "Purpose and Usage ",
    heading: [
      "Company will not sell or rent your Sensitive Information to anyone, for any reason, at any time. However, we will be sharing your Sensitive Information with our affiliates and business partners including credit information companies, where we feel that you will be assisted better for the purpose of underwriting and approval of your credit card, loan and approving investment in Mutual Fund or any other financial product transaction/related transaction or for doing an aggregate check of your credit profile on your behalf and ending you targeted communications and offers. Company uses the information collected and appropriately notifies you to manage its business and offer an enhanced, personalized online experience to you on its Website. By registering on the Website, you authorize Company to send texts and email alerts to you and any other service requirements, including promotional mails and SMSs Further, it enables Company to:",
      "Analyze usage of the Website and to improve the Service;",
      "Send you any administrative notices, offer alerts and communications relevant to your use of the Service;",
      "Enable you to apply for certain products and services for which you have chosen to apply;",
      "Carry market research, project planning, troubleshooting issues, detecting and protecting against error, fraud or other criminal activity;",
      "Bind third-party contractors that provide services to Company and are bound by these same privacy restrictions;",
      "Comply with all applicable laws and regulations;",
      "Enforce Company Terms of Use",
      "In the event that you access the Service as brought to you by one of our partners either through the Website (www.dr-finance.in) or on being redirected from a co-branded URL otherwise referred to as a white-label site, your name, e-mail address, mobile number, date of birth, employment type, residency status, income details/proofs, Form 26 AS, PAN, details of loan, credit card, Mutual Fund applied for and loan, credit card and Mutual Fund status or any other financial product status as may be provided to that partner when your application is submitted and whenever the status of application is updated. Company has a business relationship with these partners and you may not opt-out of sharing your information with these partners if you have applied via a co-branded URL or directly through the Website as the case may be.",
      "For availing the Service such as applying for a loan, credit card, Mutual Fund or any other financial product we will require you to provide or upload on the Website the details such as a your name, parentage, marital status, email address, nationality, location, mobile number, PAN, employment & income details/proofs, Form 26 AS, recent photograph, signature image, other Know Your Customer (KYC) documents like address proof, identity proof and personally identifying information about a potential co-loan applicant (should you select this option), and to participate on our forum boards, a username (collectively the Registration Information).",
      "You may opt out of location based services at any time by editing the setting of your browser.",
      "In order to provide your bank statement or pay slip electronically along with your loan application, you also must provide your third-party account credentials (Account Credentials) to allow Company to retrieve your account data at those other financial institutions (Account Information) for your use. Your Account Credentials are only used once to retrieve your bank statements/pay slips, Form 26 AS and are not stored in our system. However, Company shall not be liable to you against any liability or claims which may arise out of such transactions being carried on your own accord.",
      "We may also use third party service providers to provide the Service to you, such as sending e-mail messages on our behalf or hosting and operating a particular feature or functionality of the Service. Our contracts with these third parties outline the appropriate use and handling of your information and prohibit them from using any of your Sensitive Information for purposes unrelated to the product or service they're providing. We require such third parties to maintain the confidentiality of the information provide to them.",
    ],
  },
  {
    section: "Disclosure / Sharing",
    heading: [
      "Company does not disclose Sensitive Information of a customer except as directed by law or as per mandate received from the customer or applicant. Upon your written request Company will provide you with information on whether we hold any of your personal information. No specific information about customer accounts or other personally identifiable data is shared with non-affiliated third parties unless any of the following conditions is met:",
      "To help complete a transaction initiated by you;",
      "To perform support services through a third party service provider, provided it conforms to the Privacy Policy of the Company and your prior consent to do so is obtained;",
      "You have specifically authorized it;",
      "The disclosure is necessary for compliance of a legal obligation or as required by law, such as to comply with a subpoena, or similar legal process;",
      "The information is shared with Government agencies mandated under law;",
      "The information is shared with any third party by an order under the law;",
      "When we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.",
      "There are number of products/services such as loans, credit cards, mutual funds, offered by third Parties on the Website, such as lenders, banks, credit card issuers. If you choose to apply for these separate products or services, disclose information to these providers, then their use of your information is governed by their privacy policies. Company is not responsible for their privacy policies.",
    ],
  },
  {
    section:
      "	Intimation by Customers Regarding change in Registration Information ",
    heading: [
      "If your Registration Information provided to us when you had applied for a product on our Website or Sites changes, you may update it whenever you apply for a new product via our Website or Sites. To review and update your Sensitive Information and to ensure that the same is accurate while your application is in process, you may contact us at support@dr-finance.in. You will not be able to update the information you have provided in an application after a decision has already been made on it; however, you may create and submit a new application with your updated information.",
      "Note: We will retain your information for as long as your account is active or as needed to provide you Services. If you wish to cancel your account or request that we no longer use your information to provide you services, contact us at support@dr-finance.in. We will respond to your request within a reasonable timeframe. However, we will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and to enforce our agreements.",
    ],
  },
  {
    section: "Email & SMS Communications from US and our partners ",
    heading: [
      "We provide our registered customers with periodic emailers and email and SMS alerts. We also allow users to subscribe to email newsletters and from time to time may transmit emails promoting Company or third-party products. Subject to the express consent clause above, Company’s Website subscribers may opt-out of receiving our promotional emails and terminate their newsletter subscriptions by following the instructions in the emails. Opting out in this manner will not end transmission of service-related emails/SMS, such as email/SMS alerts. The above services are also provided by our partners.",
    ],
  },
  {
    section: "Log Files ",
    heading: [
      "This information may include internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and/or clickstream data. We may use the collected log information about you to improve services offered to you, to improve marketing, analytics, or Website functionality. ",
    ],
  },
  {
    section: "Tracking Technologies ",
    heading: [
      "Company and its partners use cookies or similar technologies to analyze trends, administer the website, track users’ movements around the website, and to gather demographic information about our user base as a whole. You can control the use of cookies at the individual browser level, but if you choose to disable cookies, it may limit your use of certain features or functions on our website or service. To manage Flash cookies, please visit the flash player support page.",
    ],
  },
  {
    section: "Behavioural Targeting / Re-Targeting ",
    heading: [
      "We partner with a third party service providers to either display advertising on our Website or to manage our advertising on other sites. Our third party partners may use technologies such as cookies to gather information about your activities on this Website and other Sites in order to provide you advertising based upon your browsing activities and interests. If you wish to not have this information used for the purpose of serving you interest-based ads, you may opt-out by clicking here. Please note this does not opt you out of being served ads. You will continue to receive generic ads.",
    ],
  },
  {
    section:
      "Third Parties will not be given your personal Information unless you direct company to do so ",
    heading: [
      "There are several products and services, such as loans, credit cards, Mutual Fund and other financial products being offered by third parties on our Website, such as lenders, banks, credit card issuers and mutual funds (collectively Offers). If you choose to apply for these separate products or services, disclose information to the providers, or grant them permission to collect information about you, then their use of your information is governed by their privacy policies. You should evaluate the practices of these external services providers before deciding to use their services. Company is not responsible for their privacy practices.",
    ],
  },
  {
    section: "Testmonials, Blogs and other forums on dr-finance. in Website ",
    heading: [
      "With your consent Company may post your testimonial along with your name. If you want your testimonial removed, please contact Company at support@dr-finance.in.If you use a blog or other public forum on Website, any information you submit there can be read, collected or used by other users and could be used to send you unsolicited messages. Company is not responsible for the Sensitive Information you choose to submit in these forums.",
    ],
  },
  {
    section: "Additional Policy Information ",
    heading: [
      "Widgets:",
      "Our website includes Widgets, which are interactive mini-programs that run on our Website to provide specific services from another company (e.g. displaying the news, opinions, music, etc). Sensitive Information, such as your email address, may be collected through the Widget. Cookies may also be set by the Widget to enable it to function properly. Information collected by this Widget is governed by the privacy policy of the company that created it and not by the Company.",
      "Single Sign-On:",
      "You can log in to our Website using sign-in services such as Facebook Connect or an Open ID provider. These services will authenticate your identity and provide you the option to share certain Sensitive Information with us such as your sign-in information, name and email address to link between the sites. Social networking media services like Facebook & Twitter give you the option to post information about your activities on this Website to your profile page to share with others within your network.",
      "Like Button:",
      "If you use the 'Like' button to share something that item will appear on your Facebook profile page and also on your friends’ newsfeed depending on your Facebook privacy settings. You may also receive updates in your Facebook newsfeed from this Website or item in the future. Facebook also collects information such as which pages you have visited on this and other sites that have implemented the 'Like' button.",
      "Links to 3rd Party Sites:",
      "Our Website includes links to other websites whose privacy practices may differ from those of Company. If you submit your Sensitive Information to any of those sites, your information is governed by their privacy policies. We encourage you to carefully read the privacy policy of any website you visit.",
    ],
  },
  {
    section: "We keep your data secure ",
    heading: [
      "We follow generally accepted standards to protect the Sensitive Information submitted to us, both during transmission and once we receive it. Since no method of transmission over the Internet, or method of electronic storage, is 100% secure, therefore, we cannot guarantee its absolute security. If you have any questions about security on our Website, you can contact us at support@dr-finance.in.",
      "We use a combination of firewalls, encryption techniques and authentication procedures, among others, to maintain the security of your online session and to protect Company online accounts and systems from unauthorized access.",
      "When you register for the Service, Company requires a password from you for your privacy and security. Company transmits information such as your Registration Information for Website or Account Credentials securely.",
      "Our servers are in secure Microsoft data facilities where access requires multiple levels of authentication, including an identity card and biometrics recognition procedures. Security personnel monitor the facilities 7 days a week, 24 hours a day.",
      "Our databases are protected from general employee access both physically and logically. We encrypt your Services password so that your password cannot be recovered, even by us. All backup drives and tapes also are encrypted.",
      "No employee may put any sensitive content on any insecure machine (i.e., nothing can be taken from the database and put on an insecure laptop). Company has been verified for its use of SSL encryption technologies.",
      "However, it is important to understand that these precautions apply only to our Website and systems",
    ],
  },
  {
    section: "All private information is Encrypted and communicated Securely ",
    heading: [
      "All communications between your computer and our Website that contain any Sensitive Information are encrypted. This enables client and server applications to communicate in a way that is designed to prevent eavesdropping, tampering and message forgery.",
    ],
  },
  {
    section:
      "You are responsible for maintaining the confidentiality of your login ID and Password ",
    heading: [
      "You are responsible for maintaining the security of your Login ID and Password, and may not provide these credentials to any third party. If you believe that they have been stolen or been made known to others, you must contact us immediately at support@dr-finance.in. We are not responsible if someone else accesses your account through Registration Information they have obtained from you or through a violation by you of this Privacy Policy or the Company Terms of Use.",
      "If you have any security related concern, please contact us at support@dr-finance.in. We will work closely with you to ensure a rapid and personal response to your concerns.",
    ],
  },
  {
    section: "Contact us with any questions or concerns (Grievance Redressal) ",
    heading: [
      "If you have grievance or complaint, questions, comments, concerns or feedback in relation to the processing of information or regarding this Privacy Policy or any other privacy or security concern, send an e-mail to support@dr-finance.in.",
      "The name and contact details of the Grievance Officer is Mrs. Saujanya Reddy,  Flat # 302, sarvodaya residency,tulasi nagar colony,Golnaka,Amberpet,Hyd -500013.",
      "NOTICE:",
      "The effective date of this Privacy Policy, as stated below, indicates the last time this Privacy Policy was revised or materially changed.",
      "Effective Date:",
      "'May 15th , 2020'",
    ],
  },
];
const headings = terms.map((term) => term.section);
headings[0] = "Introduction";

function PrivacyPolicy() {
  const [active, setActive] = React.useState(0);
  const sectionRef = React.useRef();

  let heights = [];

  React.useEffect(() => {
    const listener = document.addEventListener(
      "scroll",
      function (event) {
        const element = event.target;
        if (element.id === "ui__scroll") {
          if (heights.length === 0 && element.childElementCount > 0) {
            const count = element.childElementCount;
            for (let i = 0; i < count; i++) {
              const childElement = element.children[i];
              heights[i] = [i === 0 ? 0 : heights[i - 1][1] + 1, 0];
              heights[i][1] =
                i === 0
                  ? childElement.offsetHeight
                  : childElement.offsetHeight + heights[i][0];
            }
          }

          heights.forEach((values, index) => {
            const [min, max] = values;
            if (element.scrollTop >= min && element.scrollTop <= max) {
              setActive(index);
            }
          });
          console.log("scrolling", element.scrollTop, { heights });
        }
      },
      true // Capture event
    );
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);

  const onClick = (event, idx) => {
    const sectionId = `#section-${idx}`;
    if (sectionRef.current && sectionRef.current.querySelector(sectionId)) {
      const view = sectionRef.current.querySelector(sectionId);
      // sectionRef.current.scrollTop = view.offsetTop;
      view.scrollIntoView();
      if (window.innerWidth <= constants.MOBILE_VIEW) {
        sectionRef.current.querySelector("#terms__content").scrollIntoView();
      } else {
        sectionRef.current.scrollIntoView();
      }
    }
    setActive(idx);
  };

  return (
    <Box ref={sectionRef}>
      <PageWrapper className="" my={16}>
        <Box py={8} textAlign={{ base: "center", md: "left" }}>
          <Text
            maxW={{ base: "240px", md: "580px" }}
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            color="blue.400"
            lineHeight="1"
            mx={{ base: "auto", md: "0" }}
          >
            {" "}
            Privacy Policy
          </Text>
          <Text maxW="480px" mt="16px" fontSize="xl" color="#A1A1A1 ">
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
            pt={{ base: 24, md: 0 }}
            id="terms__content"
            w={{ base: "100%", md: "70%" }}
          >
            <Box
              id="ui__scroll"
              p={{ base: 1 }}
              height="1250px"
              overflow="hidden"
              overflowY="auto"
            >
              {terms.map((term, idx) => (
                <Box
                  key={idx}
                  id={`section-${idx}`}
                  p={{ base: 2, md: 6 }}
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
          </Box>
        </Flex>
      </PageWrapper>
    </Box>
  );
}

export default PrivacyPolicy;
