import React, { useState } from "react";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './Contact.css'

function Contact() {
  const [activeTab, setActiveTab] = useState("Technical");

  const data = [
    {name:'Prof. Vaibhaw Doifode',post:'In-Charge StudentActivity',number:'+91 99757 77941'},
    {name:'Dr. Supriya Thombre',post:'Faculty Co-ordinator Technical & Cultural Activities',number:'+91 91588 84767'},
    {name:'Prof. Swati Nitnaware',post:'Faculty Co-ordinator Students Club Activities',number:'+91 98602 08475'},
    {name:'Prof. Swati Mohod',post:'Faculty Co-ordinator NSS Club Activities',number:'+91 83901 80836'},
    { name: 'Jay Kahate', post: 'Secretary - Technical', number: '+91 88550 11347' },
    { name: 'Sakshi Thakre', post: 'Secretary - Cultural', number: '+91 94044 01737' },
    { name: 'Jayesh Giri', post: 'Secretary - Sports', number: '+91 96896 10236' },
    { name: 'Atharva Raut', post: 'Secretary - Design, Photography', number: '+91 73870 45237' },
    { name: 'Saurabh Ghangare', post: 'Secretary - Store, Logistic, Database', number: '+91 75174 73393' },
    { name: 'Akhilesh Bibte', post: 'Secretary - Publicity, Sponsorship', number: '+91 82375 41150' },
    { name: 'Ajinkya Bandawar', post: 'Secretary - Publicity, Sponsorship', number: '+91 76208 71578' },
    { name: 'Harshdeep Ambule', post: 'Secretary - Hall Management, Hospitality, Event Management', number: '+91 80801 22182' },
    { name: 'Geetkumar Rathod', post: 'Disaster Management', number: '+91 98815 86310' },
  ];
   const faculty=[
    {
        name: "Dr. U. P. Waghe",
        post: "Principal",
        namepost: "Chairman"
    },
    {
        name: "Dr. S. V. Prayagi",
        post: "Registrar",
        namepost: "Convener"
    },
    {
        name: "Dr. A. P. Munshi",
        post: "Electrical Engineering",
        namepost: "Advisor"
    },
    {
        name: "Prof. V. R. Doifode",
        post: "In-charge SA",
        namepost: "Secretary"
    },
    {
        name: "Dr. S. S. Thombre",
        post: "Computer Technology",
        namepost: "Sponsorship & Overall Coordination"
    },
    {
        name: "Dr. M. R. Kale",
        post: "B. Tech. First Year Coordinator",
        namepost: "Freshers"
    },
    {
        "name": "Prof. Neha Kumar",
        "post": "Applied Science & Humanities (1 Yr)",
        "namepost": "Freshers"
    },
    {
        name: "Prof. D. P. Bawane",
        post: "Applied Science & Humanities (1 Yr)",
        namepost: "Freshers"
    },
    {
        name: "Dr. S. A. Gomkale",
        post: "Applied Science & Humanities (1 Yr)",
        namepost: "Freshers"
    },
    {
        name: "Dr. A. D. Gedam",
        post: "Applied Science & Humanities (1 Yr)",
        namepost: "Freshers"
    },
    {
        name: "Prof. G. C. Gondhalekar",
        post: "Electrical Engineering",
        namepost: "Publicity & Bhairavi"
    },
    {
        name: "Prof. A. P. Edlabadkar",
        post: "Mechanical Engineering",
        namepost: "Publicity & Bhairavi"
    },
    {
        name: "Dr. S. A. Dhondse",
        post: "Electronics Engineering",
        namepost: "Cultural Activities and Judges Coordination"
    },
    {
        name: "Prof. P. Maturkar",
        post: "Electronics Engineering",
        namepost: "Cultural Activities"
    },
    {
        name: "Prof. X. R. Pote",
        post: "Electrical Engineering",
        namepost: "Cultural Activities"
    },
    {
        name: "Prof. A. D. Gaikwad",
        post: "Information Technology",
        namepost: "Technical Activities"
    },
    {
        name: "Prof. N. S. Mangrulkar",
        post: "Computer Technology",
        namepost: "Technical Activities"
    },
    {
        name: "Prof. S. Dhengre",
        post: "Civil Engineering",
        namepost: "Technical Activities"
    },
    {
        name: "Dr. K. S. Ansari",
        post: "Civil Engineering",
        namepost: "Sports Activity"
    },
    {
        name: "Prof. B. U. Bawankar",
        post: "Information Technology",
        namepost: "Hall Management"
    },
    {
        name: "Dr. V.D. Bondre",
        post: "Electronics & Telecommunication",
        namepost: "Hall Management"
    },
    {
        name: "Prof. V. D. Jayle",
        post: "Civil Engineering",
        namepost: "Hall Management"
    },
    {
        name: "Prof. N. T. Sahu",
        post: "Electrical Engineering",
        namepost: "Hall Management"
    },
    {
        name: "Dr. A. Kaur",
        post: "Applied Science & Humanities (1 Yr)",
        namepost: "Hall Management"
    },
    {
        name: "Prof. P. V. Barekar",
        post: "Computer Technology",
        namepost: "Hall Management"
    },
    {
        name: "Prof. S. Dhengre",
        post: "Civil Engineering",
        namepost: "Hall Management"
    },
    {
        name: "Dr. R. G. Bodkhe",
        post: "Mechanical Engineering",
        namepost: "Hall Management"
    },
    {
        name: "Prof. A. Katiya",
        post: "MBA",
        namepost: "Hall Management"
    },
    {
        name: "Prof. A. Narkhede",
        post: "Mechanical Engineering",
        namepost: "Event Management"
    },
    {
        name: "Dr. A. A. Parkhi",
        post: "Electronics & Telecommunication",
        namepost: "Event Management"
    },
    {
        name: "Dr. P. D. Dorge",
        post: "Electronics & Telecommunication",
        namepost: "Event Management"
    },
    {
        name: "Prof. S. A. Gode",
        post: "Computer Technology",
        namepost: "Event Management"
    },
    {
        name: "Prof. S. A. Sahare",
        post: "Computer Technology",
        namepost: "Event Management"
    },
    {
        name: "Prof. S. K. Mohod",
        post: "Electronics Engineering",
        namepost: "Logistics and Store"
    },
    {
        name: "Prof. S. R. Nitnaware",
        post: "Electronics Engineering",
        namepost: "Yash Carnival"
    },
    {
        name: "Prof. K. G. Pande",
        post: "Electronics Engineering",
        namepost: "Yash Carnival"
    },
    {
        name: "Prof. P. P. Waghale",
        post: "Computer Science & Engineering",
        namepost: "Yash Carnival"
    },
    {
        name: "Prof. N. Sawarkar",
        post: "Information Technology",
        namepost: "Yash Carnival"
    },
    {
        name: "Prof. N. Giradkar",
        post: "Computer Science & Engineering",
        namepost: "Database"
    },
    {
        name: "Prof. K. P. Karule",
        post: "Computer Technology",
        namepost: "Design, Photography & Hospitality"
    }
]
  const eventContacts = {
    Technical: [
      { event: "Resume It", name: "Atharva Gadge, Soham Bakane", contact: "+91 82089 06757, +91 72619 25013" },
      { event: "Codista", name: "Shekhar Nipane, Sachin Bisen", contact: "+91 77967 56745, +91 93220 27926" },
      { event: "Tech Art Fusion", name: "Rishabh Kothari, Palash Shendre", contact: "+91 89563 66909, +91 70588 87437" },
      { event: "Blueprint To Bridge", name: "Janvhi Gulhane, Gunjan Deogade", contact: "+91 78218 72983, +91 89753 73410"},
      { event: "Debate Compitition", name: "Krutika Umale, Gauri Nagpure", contact: "+91 74993 15247, +91 78410 97192" },
      { event: "Turning Tussle", name: "Chetan Pise, Prathmesh Dhawas", contact: "+91 90117 04946, +91 96378 65210" },
      { event: "PCB Nexus", name: "Yash Sayre, Sheikh Safee", contact: "+91 84688 33473, +91 93566 23585" },
      { event: "Robo Soccer", name: "Tushar Ninave, Vaibhav Aktarwar", contact: "+91 86249 54411, +91 70287 05732" },
      { event: "Buzz Wire", name: "Anurag Kamble, Anushree Raut", contact: "+91 80803 61522, +91 95884 09857" },
      { event: "IEEE Workshop", name: "Sahil Girsawale, Anish Joshi", contact: "+91 74993 69990, +91 78230 03112" },
      { event: "Microsoft Webinar", name: "Anshu Vairagade, Vidhi Lonarkar", contact: "+91 90499 41047, +91 98500 17209" },
      { event: "Cognitive Clash", name: "Atharva Date, Jagdish K", contact: "+91 72188 31380, +91 86689 69935" },
      { event: "NoCode AI Innovators", name: "Ayush Turak, Atharva Date", contact: "+91 77589 77625, +91 72188 31380" },
      { event: "Code & Canvas", name: "Anushree Dharpal, Divya Sonekar", contact: "+91 72193 33996, +91 98908 27905" },
      { event: "Visual Vibes", name: "Atharv Gharde", contact: "+91 96045 46925" },
      { event: "Laser Gun", name: "Arya Dangore, Gaurav Ambolikar", contact: "+91 91461  69161, +91 90214  50369" },
      { event: "Avishkar", name: "Atharva Gharde, Chetan Kakde", contact: "+91 96896  10236, +91 92256  35636" },
    ],
    Cultural: [
      { event: "Symphonica", name: " Prajakta Phating", contact: "+91 73852 50464" },
      { event: "Open mic", name: "Saraunsh Rahamatka", contact: "+91 77580 33680" },
      { event: "Band Apocalypse", name: "Bhavesh Nagdeve, Akash Bodkhe", contact: "+91 82374 74720, +91 74482 43218" },
      { event: "RaazMatazz", name: "Janvi Thakre, Umang Gotmare", contact: "+91 82638 76331, +91 84849 77532" },
      { event: "Muktswar", name: "Suyog Chichalkar", contact: "+91 70301 36566" },
      { event: "Reel it real", name: "Neha Geete, Charu Girhe", contact: "+91 84460 79131, +91 82379 01889" },
      { event: "Mini Vlog verse", name: "Vedant Bhoyar, Aarohi Dabhadkar", contact: "+91 76201 67417, +91 83799 92605" },
      { event: "focus fest", name: "Sayali Padmane, Janhavi Pathrabe", contact: "+91 95612 18705, +91 73875 62741" },
      { event: "Fashioninsta", name: "Chaitanya Garaskar", contact: "+91 80102 86843" },
    ],
    Sports: [
      { event: "Futsal Tournament", name: "Abhir Kawale, Palash Patil", contact: "+91 9373718977, +91 72498 18361," },
      { event: "Chess Tournament", name: "Shantanu Tarale, Paras Kosarkar", contact: "+91 87882 70387, +91 73851 57088," },
      { event: "Volleyball Tournament", name: "Vedant Mankar, Aryan Devkar", contact: "+91 81499 55672, +91 86687 75920" },
      { event: "Box Cricket(Boys)", name: "Swayam Tamboli", contact: " +91 87660 54660" },
      { event: "Tug of War (Boys)", name: "Atharva Maind, Mayank Hedaoo", contact: "+91 78881 56307, +91 78410 70240" },
      { event: "BGMI Tournament", name: "Aksahy Bhongade, Aradhya Chilamwar", contact: "+91 84462 56307, +91 94052 55112" },
      { event: "Long Cricket Tournament", name: "Rajjat Hatwar", contact: "+91 96999 26704" },
      { event: "Carrom Tournament", name: "Vaishnav Borkute, Arjun Kadam", contact: "+91 73978 81233, +91 77690 77699" },
      { event: "Valorant Tournament ", name: "Himanshu Akhatkar", contact: "77588 43175" },
      { event: "Smash Karts Tournament", name: "Atharva Sapate, Pratik Gondane", contact: "+91 80877 83997, +91 91467 22028" },
      { event: "Tug of War (Girls)", name: "Sakshi Vemuri, Abhinav Tomar", contact: "+91 93221 64023, +91 88994 46769" },
      { event: "Badminton Tournament(Girls)", name: "Shreya Nandanvar", contact: "+91 87672 47840" },
      { event: "Badminton Tournament(Boys) ", name: "Veddhant Parate, Sanvik Chaudhary", contact: "+91 86691 50576, +91 90670 54927" },
      { event: "Free Fire Tournament", name: "Ayush Wase", contact: "+91 73859 30843" },
      { event: "FIFA Mobile Tournament", name: "Pratik Gondane", contact: "+91 91467 22028" },
    ],
  };
  
  return (
    <div className='Main-contact-box'>
      <Navbar/>
      {/* Commity */}
      <h2 className="title">YASH COMMITTE</h2>
      <div className="table-box">
        <div className="table-container ">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Post</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.post}</td>
                  <td>{item.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* faculty */}

      <h2 className="title">FACULTY COMMITTEE</h2>
<div className="table-box">
  <div className="table-container">
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Post</th>
          <th>Committee Role</th>
        </tr>
      </thead>
      <tbody>
        {faculty.map((member, index) => (
          <tr key={index}>
            <td>{member.name}</td>
            <td>{member.post}</td>
            <td>{member.namepost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      {/* faciulty end */}


      {/* Events */}
      <h2 className="title">Event Organizers Contact Details</h2>
      <div className="tabs">
        {Object.keys(eventContacts).map((eventType) => (
          <button
            key={eventType}
            className={`tab-button ${activeTab === eventType ? "active" : ""}`}
            onClick={() => setActiveTab(eventType)}
          >
            {eventType}
          </button>
        ))}
      </div>
      <div className="table-box">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Name</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {eventContacts[activeTab].map((person, index) => (
              person.name.includes(",") ? (
                person.name.split(",").map((name, idx) => (
                  <tr key={`${index}-${idx}`}>
                    {idx === 0 && <td rowSpan={2}>{person.event}</td>}
                    <td>{name.trim()}</td>
                    <td>{person.contact.split(",")[idx].trim()}</td>
                  </tr>
                ))
              ) : (
                <tr key={index}>
                  <td className="text-xl">{person.event}</td>
                  <td>{person.name}</td>
                  <td>{person.contact}</td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;
