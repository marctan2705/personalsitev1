import parku1 from "./Resources/parku1.png"
import parku2 from "./Resources/parku2.png"
import parku3 from "./Resources/parku3.png"
import nftuc1 from "./Resources/nftuc0.png"
import nftuc2 from "./Resources/nftuc2.png"
import nftuc3 from "./Resources/nftuc3.png"
import nftuc4 from "./Resources/nftuc5.png"
import nftuc5 from "./Resources/nftuc6.png"
import secretshop1 from "./Resources/SecretShop1.jpg"
import secretshop2 from "./Resources/SecretShop2.jpg"

let ProjectsList = [
    {
        number: 0,
        name: "Secret Shop",
        title: "Product Manager | Frontend Developer",
        github:"https://github.com/secret-shop-sg/main",
        description: ["Secret Shop was developed because we realised the lack of an effective, easy to use marketplace for console gamers. Secret Shop provides a one-stop alternative: to connect, trade, rent, and transact games with other console gamers.", "Produced the product timeline, feature requirements and product requirements, as well as conducted market research.", "Managed weekly sprints.", "Developed the listing portion of the frontend, as well as the login and signup page and various other portions of the landing page."],
        images: [[secretshop1, 0, "w"], [secretshop2, 1, "w"]],
       
    },
    {
        number: 1,
        name: "NFTUC",
        title: "Product Manager | Frontend Developer",
        github:"https://github.com/marctan2705/BlockchainInnovationPitch",
        description: ["NFTUC offers an ecosystem where consumers can mint vouchers for various companies as NFTs. On top of that, the vouchers would be consolidated in a decentralised wallet for easy accessibility and management, and can also be traded with other users. For consumers, this means streamlined voucher management, gamified minting of vouchers, as well as more targeted loyalty programmes with airdrops and the like. For businesses, this means greater outreach into the ever growing DeFi community, more creative marketing programmes, as well as reduced tampering of vouchers.", "1st runners-up for the NTU Blockchain Innovation Pitch.", "Produced the feature requirements for the application, conducted market research and feasibility studies, as well as drafted product requirement documents.","Facilitated sprints, managed scrums, and conducted UAT.", "Developed the landing page for NFTUC and integrated them with frontend packages such as Web3js and Etherjs."],
        images: [[nftuc1, 0, "w"], [nftuc2, 1, "w"], [nftuc3, 2, "w"], [nftuc4,3, "t"], [nftuc5,4, "t"]],
    },
    {
        number: 2,
        name: "ParkU",
        title: "Technical Product Manager | Frontend Developer",
        github: "https://github.com/keanekwa/ParkU",
        description: ["ParkU is an all-in-one parking app aimed to streamline travel and parking within Singapore. Services provided include directions to carpark and location, availability tracking, distance estimation and time & cost tracking.", "Facilitated scrums and planned the system architecture of the app.", "Produced freature request forms, product requirement documents, class diagrams, system architecture diagrams, sequence diagrams, as well as facilitated sprints and UAT.", "Developed the landing page of the app, including the search bar, map functions and search suggestion."],
        images: [[parku1, 0, "t"], [parku2, 1, "t"], [parku3, 2, "t"]],
        
    }
]
export default ProjectsList