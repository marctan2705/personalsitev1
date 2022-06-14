import enterprise from "./Resources/ESG.png"
import GA from "./Resources/GlobalAngle.jpeg"
import react from "./Resources/react.jpeg"
import html from "./Resources/html.png"
import css from "./Resources/css.png"
import js from "./Resources/js.png"
import treehouse from "./Resources/treehouse.jpeg"
import shopee from "./Resources/shopee.png"
import nftuc from "./Resources/nftuc.jpeg"
import rsm from "./Resources/rsm.png"
import bloomberg from "./Resources/bloomberg.png"
import mongodb from "./Resources/mongodb.png"
import sql from "./Resources/sql.png"
import JaneStreet from "./Resources/jane-street.png"

let Skilllist = [
    {
        Name: "Management & Tech Consultancy",
        Description: ["My experience in Management and Tech Consultancy lies in my two internship stints at Global Angle (a boutique management consultancy firm) and ESG (Enterprise Singapore Group).", "At Global Angle, I helped managed cross border projects for a multitude of client companies, including a cosmetic brand project involving more than 60 brands around the globe, as well as a project helping a company break into a foreign market. Through rigorous market research and proficient use of Microsoft Office Tools including Word, Excel and Powerpoint, I provided support to various projects. ",  "At ESG, I was a Land Transport Technology Intern, and served as a point of contact between ESG and over 5 different client start-ups. I leveraged on different technologies to streamline workflows for these clients, as well as crafted digitalisation timelines to help each start-up solve their problems based on their specific needs. These technologies range from IoT devices, to various software products. I also helped crafted plans to help startups overcome the difficult period of COVID-19."],
        Icons: [enterprise, GA],
        id: 0
    },
    {
        Name: "Web Development",
        Description: ["My web development experiences lie in the projects that I have taken up during my time in NTU. Through which I have developed a proficiency in UIUX design, as well as ReactJS, HTML and CSS. I take pride in developing interactive, creative and useful ideas for people. While I have mostly been a frontend developer, I am also currently learning the backend.", "You can find some of my projects below!"],
        Icons: [react, html, css, js],
        id: 1
    },
    {
        Name: "Product Management",
        Description: ["I worked as a Product Management Intern for both start-ups and large scale MNCs, being given the opportunity to lead the end-to-end development of various products.", "Treehouse is a start-up in the Web 3.0 Space that aims to provide comprehensive and insightful analytics of your decentralised assets. Here, I was given the opportunity to manage the development of the Terra production pipeline, as well as aid in the UAT and launch of other chains such as EVM and BSC.", "At Shopee, I manage the Backend Products for Shopee's Marketplace (Listing) department. Here I saw through the end-to-end development of projects such as an automated system for brand suggestions and a cross-border Natural Language Processing Model for an attribute recommendation model in Poland, working hand in hand with both local and foreign teams.", "In these two internships, I had to work with different teams from different countries, effectively coordinating and executing different stages of the product development lifecycle." ],
        Icons: [treehouse, shopee],
        id: 2
    },
    {
        Name: "Web 3.0",
        Description: ["I am an avid believer of the Web 3.0 space. Some of my experiences include Treehouse, a software start-up that provides insights and analysis to your decentralised assets, and NFTUC, a DApp that I co-founded for a blockchain innovation hackathon.", "At Treehouse, I aided in a multitude of chains, ranging from EVM to BSC to FTM to Terra. I helped oversee the integration of various protocols onto their respective chains by scoping their respective smart contracts and helped code yml files that allowed the software to call smart contract functions to provide accurate analytics. I also aided in the integration of Columbus 4 API calls onto the Terra section of Treehouse's analytics.", "NFTUC was a DApp that I registered with my team into the NTU Blockchain Innovation challenge, where we attained first runners-up. NFTUC aims to integrate traditional vouchers into the DeFi space by creating a platform for users to mint vouchers for various companies in the form of NFTUC. I primarily served as a frontend developer and product manager for the DApp, and integrated the them with EVM compatible smart contracts using packages such as Web3js and Etherjs. You can find out more about this project below!"],
        Icons: [treehouse, nftuc],
        id: 3
    },
    {
        Name: "Finance and Accountancy",
        Description: ["Beyond my curriculum in school, I have also actively developed an interest in finance and accountancy.", "I have obtained a certificate in Bloomberg Market Concepts in Dec 2021, where I went through a rigorous course teaching various market and economical concepts, as well as how to use the Bloomberg Terminal. The completion of this course is certified by Bloomberg themselves.", "I have also done a corporate finance internship in RSM, in the corporate restructuring and liquidation department. I aided in conducting market valuations of multiple financially distressed companies, and also helped develop and execute corporate restructuring plans for them. I also aided in the daily accounting for various restructuring projects with the use of Microsoft Excel.", "I am also familiar with trading concepts. In the first semester of AY 2021/2022, I participated in the Jane Street Electronic Trading Challenge, a competition where teams pit their quantitative trading bots against each other. By leveraging on python and our knowledge on quantitative and financial trading strategies, my team and I clinched 9th place in the final hour with out algorithmic trading bot."],
        Icons: [JaneStreet, bloomberg, rsm],
        id: 4
    },
    {
        Name: "Databases",
        Description: ["Familiar with both relational databases (SQL) and non-relational databases (Json/ MongoDB). In my various internships and projects, I had to work with different databases to query information as well as conduct UATs.", "At Treehouse, for example, I worked with a non-relational database, utilising MongoDB to analyse, and obtain data, as well as call and process data from various APIs. I also had to query information on various transaction using SQL queries to aid in both UAT and development."],
        Icons: [mongodb, sql],
        id: 5
    }
]

export default Skilllist