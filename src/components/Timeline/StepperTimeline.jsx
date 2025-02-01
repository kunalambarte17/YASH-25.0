import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const timelineContent = [
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
    date: '9 Feb 2025',
    event1: 'UI UX Bootcamp',
    event2: '11am-1pm',
    event3: 'This Workshop is about on Web3',
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
    event3: '',
  },
  //Technical
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA0YWJpbDlhdml0ejc1b3p0MjBrcG4yN2YzMDhlbHBnbjVwNW0zcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZbOJHSRcz1Gn95PXpO/giphy.gif',
    date: '13 Feb 2025',
    event1: 'Lazer Gun',
    event2: 'Science Exhibition',
    event3: '',
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
    event3: '',
  },
  //Technical
  {
    iconurl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA0YWJpbDlhdml0ejc1b3p0MjBrcG4yN2YzMDhlbHBnbjVwNW0zcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZbOJHSRcz1Gn95PXpO/giphy.gif',
    date: '14 Feb 2025',
    event1: 'NoCode AI Innovators',
    event2: 'Code & Canvas',
    event3: '',
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
  return (
    <div id="schedule" className='w-[90%] '>
      <VerticalTimeline>
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
                  <h4 className="text-sm md:text-base lg:text-3xl font-extrabold text-white">
                    {content.date}
                  </h4>
                <h5 className="text-sm md:text-base lg:text-2xl text-white mr-2">
                  {content.event1}
                </h5>
                <h4 className="text-sm md:text-base lg:text-2xl text-white mr-2">
                  {content.event2}
                </h4>
                <h4 className="text-sm md:text-base lg:text-2xl text-white mr-2">
                  {content.event3}
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
