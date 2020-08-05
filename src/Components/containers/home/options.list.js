import Apply from "../../../Assets/Apply.svg";
import Offer from "../../../Assets/Best Offers.svg";
import Documents from "../../../Assets/Submit Documents.svg";
import Approval from "../../../Assets/Approval.svg";
import Receive from "../../../Assets/Receive.svg";


import Loans1 from "../../../Assets/Loan1.svg";
import Loans2 from "../../../Assets/Loan2.svg";
import Invest1 from "../../../Assets/Investments1.svg";
import Insurance1 from "../../../Assets/Insurance1.svg";
import Credit1 from "../../../Assets/Credit Cards1.svg";
import Invest2 from "../../../Assets/Investments2.svg";
import Insurance2 from "../../../Assets/Insurance2.svg";
import Credit2 from "../../../Assets/Credit Cards2.svg";

export const hassleFreeOptions = [
    { title: "Apply for a product", image: Apply },
    { title: "Get the best offers", image: Offer },
    { title: "Submit your documents", image: Documents },
    { title: "Wait for approval", image: Approval },
    { title: "Receive the loan / policy", image: Receive },
]

export const helpYouOptions = {
    loans: {
        image: Loans1, activeImage: Loans2, title: "Loans", list: [
            "Personal",
            "Business",
            "Home",
            "Mortgage",
            "Construction",
            "Professional",
            "Plot",
            "Car",
            "Gold",
            "Education",
            "Equipment",
            "Consumer "//New entry added
        ],
        link: '/loans'
    },
    investments: {
        image: Invest1, activeImage: Invest2, title: "Investments", list: [
            "Fixed deposits",
            "Tax Saving deposits",
            "Recurring deposits",
            "Special saving schemes",
        ],
        link: '/investments'
    },
    insurance: {
        image: Insurance1, activeImage: Insurance2, title: "Insurance",
        list: [
            "Life",
            "Term",
            "Child Education",
            "Retirement",
            "Pension",
            "Group Life Insurance"
        ],
        secondary: {
            title: "Health Insurance",
            list: [
                "Individual",
                "Family",
                "Diabetic",
                "Senior Citizen",
                "Cardiac",
                "Cancer",
                "Special Children Health",
                "Accidental",
                "Overseas Medical Insurance",
                "Travel Insurance",
                "Group Health",
                "Top-up Insurance",
                
            ],
        },
        link: '/insurance'
    },
    creditCard: {
        image: Credit1, activeImage: Credit2, title: "Credit Card", list: [
            "Credit Cards of all the banks"
        ],
        link: 'creditcards'
    },
}