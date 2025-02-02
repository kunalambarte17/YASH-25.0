import React, { useState } from "react";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './Contact.css'

function Contact() {
  const [activeTab, setActiveTab] = useState("Technical");

  const eventContacts = {
    Technical: [
      { event: "Resume It", name: "Atharva Gadge, Soham Bakane", contact: "8208906757, 7261925013" },
      { event: "Codista", name: "Shekhar Nipane, Sachin Bisen", contact: "7796756745, 9322027926" },
      { event: "Tech Art Fusion", name: "Rishabh Kothari, Palash Shendre", contact: "89563 66909, 70588 87437" },
      { event: "Blueprint To Bridge", name: "Janvhi Gulhane, Gunjan Deogade", contact: "78218 72983, 89753 73410"},
      { event: "Debate Compitition", name: "Krutika Umale, Gauri Nagpure", contact: "7499315247, 7841097192" },
      { event: "Turning Tussle", name: "Chetan Pise, Prathmesh Dhawas", contact: "9011704946, 9637865210" },
      { event: "PCB Nexus", name: "Yash Sayre, Sheikh Safee", contact: "84688 33473, 93566 23585" },
      { event: "Robo Soccer", name: "Tushar Ninave, Vaibhav Aktarwar", contact: "86249 54411, 7028705732" },
      { event: "Buzz Wire", name: "Anurag Kamble, Anushree Raut", contact: "80803 61522, 95884 09857" },
      { event: "IEEE Workshop", name: "Sahil Girsawale, Anish Joshi", contact: "74993 69990, 78230 03112" },
      { event: "Microsoft Webinar", name: "Anshu Vairagade, Vidhi Lonarkar", contact: "9049941047, 9850017209" },
      { event: "Cognitive Clash", name: "Atharva Date, Jagdish K", contact: "7218831380, 8668969935" },
      { event: "NoCode AI Innovators", name: "Ayush Turak, Atharva Date", contact: "7758977625, 7218831380" },
      { event: "Code & Canvas", name: "Anushree Dharpal, Divya Sonekar", contact: "7219333996, 9890827905" },
      { event: "Visual Vibes", name: "Atharv Gharde", contact: "96045 46925" },
      { event: "Laser Gun", name: "Arya Dangore, Gaurav Ambolikar", contact: "91461 69161, 90214 50369" },
      { event: "Avishkar", name: "Atharva Gharde, Chetan Kakde", contact: "96896 10236, 92256 35636" },
    ],
    Cultural: [
      { event: "Symphonica", name: " Prajakta Phating", contact: "7385250464" },
      { event: "Open mic", name: "Saraunsh Rahamatka", contact: "7758033680" },
      { event: "Band Apocalypse", name: "Bhavesh Nagdeve, Akash Bodkhe", contact: "8237474720, 7448243218" },
      { event: "RaazMatazz", name: "Janvi Thakre, Umang Gotmare", contact: "8263876331, 8484977532" },
      { event: "Muktswar", name: "Suyog Chichalkar", contact: "7030136566" },
      { event: "Reel it real", name: "Neha Geete, Charu Girhe", contact: "8446079131, 8237901889" },
      { event: "Mini Vlog verse", name: "Vedant Bhoyar, Aarohi Dabhadkar", contact: "7620167417, 8379992605" },
      { event: "focus fest", name: "Sayali Padmane, Janhavi Pathrabe", contact: "9561218705, 7387562741" },
      { event: "Fashioninsta", name: "Chaitanya Garaskar", contact: "8010286843" },
    ],
    Sports: [
      { event: "Futsal Tournament", name: "Abhir Kawale, Palash Patil", contact: "9373718977, 72498 18361," },
      { event: "Chess Tournament", name: "Shantanu Tarale, Paras Kosarkar", contact: "87882 70387, 73851 57088," },
      { event: "Volleyball Tournament", name: "Vedant Mankar, Aryan Devkar", contact: "8149955672, 8668775920" },
      { event: "Box Cricket(Boys)", name: "Swayam Tamboli", contact: " 8766054660" },
      { event: "Tug of War (Boys)", name: "Atharva Maind, Mayank Hedaoo", contact: "78881 56307, 78410 70240" },
      { event: "BGMI Tournament", name: "Aksahy Bhongade, Aradhya Chilamwar", contact: "84462 56307, 9405255112" },
      { event: "Long Cricket Tournament", name: "Rajjat Hatwar", contact: "96999 26704" },
      { event: "Carrom Tournament", name: "Vaishnav Borkute, Arjun Kadam", contact: "73978 81233, 77690 77699" },
      { event: "Valorant Tournament ", name: "Himanshu Akhatkar", contact: "77588 43175" },
      { event: "Smash Karts Tournament", name: "Atharva Sapate, Pratik Gondane", contact: "80877 83997, 91467 22028" },
      { event: "Tug of War (Girls)", name: "Sakshi Vemuri, Abhinav Tomar", contact: "93221 64023, 88994 46769" },
      { event: "Badminton Tournament(Girls)", name: "Shreya Nandanvar", contact: "87672 47840" },
      { event: "Badminton Tournament(Boys) ", name: "Veddhant Parate, Sanvik Chaudhary", contact: "86691 50576, 90670 54927" },
      { event: "Free Fire Tournament", name: "Ayush Wase", contact: "73859 30843" },
      { event: "FIFA Mobile Tournament", name: "Pratik Gondane", contact: "91467 22028" },
    ],
  };
  
  return (
    <div className='Main-contact-box'>
      <Navbar/>
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
