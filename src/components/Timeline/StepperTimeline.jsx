import { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const timelineContent = [
    //Sports
    {
      iconurl: 'https://media.giphy.com/channel_assets/sports/P658KMA9mwy4/200h.gif',
      date: '7th and 8th Feb 2025',
      event1: 'Tug of War(BOYS)',
      event2: 'Vollyball',
      event3: 'Box Cricket (BOYS/GIRLS)',
      event4: '',
    },
    
  // Cultural
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ21yb3dza2Q2MjhlN2F6ZXIwdjVxZGN4bmNudzYydGdyNWd4dWQ5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9LvxxqmsgGdBrKn0ax/giphy.gif',
    date: '9 Feb 2025',
    event1: 'Symphonica prelims (10-12 pm)',
    event2: ' Raaz Matazz prelims (12-2 pm)',
    event3: '',
  },
  //Technical
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA0YWJpbDlhdml0ejc1b3p0MjBrcG4yN2YzMDhlbHBnbjVwNW0zcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZbOJHSRcz1Gn95PXpO/giphy.gif',
    date: '9 Feb 2025',
    event1: 'Microsoft Webinar',
    event2: 'Visual Vibes',
    event3: '',
  },
  //Sports
  {
    iconurl: 'https://media.giphy.com/channel_assets/sports/P658KMA9mwy4/200h.gif',
    date: '9th and 10th Feb 2025',
    event1: 'FIFA (mobile)',
    event2: 'VALORANT',
    event3: 'BGMI and Free Fire',
    event4: 'Smash Karts',
  },  
  // Cultural
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ21yb3dza2Q2MjhlN2F6ZXIwdjVxZGN4bmNudzYydGdyNWd4dWQ5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9LvxxqmsgGdBrKn0ax/giphy.gif',
    date: '10 Feb 2025',
    event1: 'Flashmob',
    event2: 'DJ Night (4pm onwards)',
    event3: '',
  },
  //Technical
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA0YWJpbDlhdml0ejc1b3p0MjBrcG4yN2YzMDhlbHBnbjVwNW0zcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZbOJHSRcz1Gn95PXpO/giphy.gif',
    date: '10 Feb 2025',
    event1: 'Debate Competition',
    event2: 'Turning Tussle',
    event3: '',
  },
  //Sports
  {
    iconurl: 'https://media.giphy.com/channel_assets/sports/P658KMA9mwy4/200h.gif',
    date: '10th Feb 2025',
    event1: 'Carrom',
    event2: 'Chess',
    event3: 'Box Cricket (BOYS)',
  },
  // Cultural
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ21yb3dza2Q2MjhlN2F6ZXIwdjVxZGN4bmNudzYydGdyNWd4dWQ5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9LvxxqmsgGdBrKn0ax/giphy.gif',
    date: '11 Feb 2025',
    event1: 'Traditional Day (11 am onwards)',
    event2: '',
    event3: '',
  },
  //Technical
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA0YWJpbDlhdml0ejc1b3p0MjBrcG4yN2YzMDhlbHBnbjVwNW0zcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZbOJHSRcz1Gn95PXpO/giphy.gif',
    date: '12 Feb 2025',
    event1: 'Cognitive Clash',
    event2: 'Resume It',
    event3: '',
  },
  // Cultural
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ21yb3dza2Q2MjhlN2F6ZXIwdjVxZGN4bmNudzYydGdyNWd4dWQ5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9LvxxqmsgGdBrKn0ax/giphy.gif',
    date: '12 Feb 2025',
    event1: 'Freshers',
    event2: 'Open mic (12-3pm)',
    event3: 'Bandocylpse (3-6pm)',
  },
  //Sports
  {
    iconurl: 'https://media.giphy.com/channel_assets/sports/P658KMA9mwy4/200h.gif',
    date: '12th and 13th Feb 2025',
    event1: 'FIFA (Console)',
  },
  //Technical
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA0YWJpbDlhdml0ejc1b3p0MjBrcG4yN2YzMDhlbHBnbjVwNW0zcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZbOJHSRcz1Gn95PXpO/giphy.gif',
    date: '13 Feb 2025',
    event1: 'Codista ',
    event2: 'Tech Art Fusion',
    event3: 'PCB Nexus',
  },
  // Cultural
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ21yb3dza2Q2MjhlN2F6ZXIwdjVxZGN4bmNudzYydGdyNWd4dWQ5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9LvxxqmsgGdBrKn0ax/giphy.gif',
    date: '13 Feb 2025',
    event1: 'Marathi Drama (10-12 pm)',
    event2: 'Symphonica finals (12-2pm)',
    event3: 'Farzi mushaira + jashn-e-mehfil (2.30 - 5pm)',
  },
  //Technical
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA0YWJpbDlhdml0ejc1b3p0MjBrcG4yN2YzMDhlbHBnbjVwNW0zcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZbOJHSRcz1Gn95PXpO/giphy.gif',
    date: '13 Feb 2025',
    event1: 'Robo Soccer',
    event2: 'IEEE Workshop',
    event3: 'Lazer Gun',
    event4: 'Science Exhibition',
  },
  
  //Sports
  {
    iconurl: 'https://media.giphy.com/channel_assets/sports/P658KMA9mwy4/200h.gif',
    date: '14th Feb 2025',
    event1: 'Commando Room',
  },
  // Cultural
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ21yb3dza2Q2MjhlN2F6ZXIwdjVxZGN4bmNudzYydGdyNWd4dWQ5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9LvxxqmsgGdBrKn0ax/giphy.gif',
    date: '14 Feb 2025',
    event1: ' Meghashree (10-12 pm)',
    event2: 'Raaz mataz finals (12-1.30pm)',
    event3: 'Fashionista (2-5 pm)',
  },
  //Technical
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA0YWJpbDlhdml0ejc1b3p0MjBrcG4yN2YzMDhlbHBnbjVwNW0zcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZbOJHSRcz1Gn95PXpO/giphy.gif',
    date: '14 Feb 2025',
    event1: 'Blueprint to Bridge',
    event2: 'Buzz Wire',
    event3: 'NoCode AI Innovators',
    event4: 'Code & Canvas',
  },
  // Cultural
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ21yb3dza2Q2MjhlN2F6ZXIwdjVxZGN4bmNudzYydGdyNWd4dWQ5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9LvxxqmsgGdBrKn0ax/giphy.gif',
    date: '15 Feb 2025',
    event1: 'Bharavi (all day)',
    event2: '',
    event3: '',
  },
  
  
  
];

const StepperTimeline = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint if needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div id="schedule" className='w-[90%] '>
      <VerticalTimeline animate={!isMobile}>
        {timelineContent.map((content, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element animate__animated animate__fadeIn "
            contentStyle={{
              background: 'rgba(0, 0, 0, 0.7)',
              borderRadius: '20px',
              border: '2px solid teal-800',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '20px',
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.2)' }}
            iconStyle={{
              background: 'rgba(0.2, 0.5, 0, 0.2)',
              color: '#fff',
              display: 'flex',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
            }}
            icon={
              <img
                src={content.iconurl}
                alt=""
                style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                className='bg-black'
              />
            }
          >
            <div
              style={{
                display: 'flex',
                // justifyContent: 'space-between',
                // alignItems: 'center',
                width: '100%',
                
              }}
            >
              <div >
                  <h4 className="text-2xl md:text-base lg:text-3xl font-extrabold text-white">
                    {content.date}
                  </h4>
                <h5 className="text-2xl md:text-base lg:text-2xl text-white mr-2">
                  {content.event1}
                </h5>
                <h4 className="text-2xl md:text-base lg:text-2xl text-white mr-2">
                  {content.event2}
                </h4>
                <h4 className="text-2xl md:text-base lg:text-2xl text-white mr-2">
                  {content.event3}
                </h4>
                <h4 className="text-2xl md:text-base lg:text-2xl text-white mr-2">
                  {content.event4}
                </h4>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default StepperTimeline;
