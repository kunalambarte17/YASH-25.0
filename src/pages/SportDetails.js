import des1 from '../assets/Sports/badmintonboys.png';
import des2 from '../assets/Sports/badmintongirls.png';
import des3 from '../assets/Sports/basketball.png';
import des4 from '../assets/Sports/bgmi.png';
import des5 from '../assets/Sports/boxcricketboys.png';
import des6 from '../assets/Sports/boxcricketgirls.png';
import des7 from '../assets/Sports/carrom.png';
import des8 from '../assets/Sports/chess.png';
import des9 from '../assets/Sports/commandoroom.png';
import des10 from '../assets/Sports/fifa.png';
import des11 from '../assets/Sports/freefire.png';
import des12 from '../assets/Sports/futsal.png';
import des13 from '../assets/Sports/volleyball.png';
import des14 from '../assets/Sports/long cricket.png';
import des15 from '../assets/Sports/smashkarts.png';
import des16 from '../assets/Sports/tugofwarboys.png';
import des17 from '../assets/Sports/tugofwargirls.png';
import des18 from '../assets/Sports/valorant.png';


const sportEvents = [
    { id: 1, title: "Badminton Boys || 8TH & 9TH Feb", description: " Get ready to dominate at the Badminton Tournament! 🏸 Compete in the Men's Singles and Doubles categories, showcase your skills, and win amazing prizes at Yash 25.0! 🏆✨", image: des1 , link : "https://docs.google.com/forms/d/e/1FAIpQLSf6s-iKRvUpgNoy00AEfIk6fj_tw3s720u1EcxZqOpYcH9jZw/viewform?usp=header"},
    { id: 2, title: "Badminton Girls || 8TH & 9TH Feb", description: "  Get ready to shine at the Badminton Tournament! 🏸 Compete in the Women's Singles category and showcase your skills to win amazing prizes at Yash 25.0! 🏆✨", image: des2 ,link : "https://docs.google.com/forms/d/e/1FAIpQLScQ9BnIi0UvXkbVEEFdebWZGNWYCNfw83jNC4VnTqzaE4OpuQ/viewform?usp=header"},
    { id: 3, title: "Baskteball || 5TH & 6TH Feb", description: "Get ready to slam dunk! 🏀 Join the Basketball Tournament at Yash 25.0 and compete for glory! Whether you're a sharpshooter or a master at assists, show your skills on the court and win amazing prizes! 🏆", image: des3 ,link : "https://forms.gle/grBPp7rDAQnitHNv5"},
    { id: 4, title: "BGMI Tournament || 9TH & 10TH Feb", description: "Get ready to drop into the battlegrounds! 🪂 BGMI Tournament at Yash 25.0 is here with exciting modes and epic prizes! Whether you prefer the thrill of a Squad Battle Royale or the intensity of a Duo TDM, we've got you covered. Assemble your squad or team up for glory! 🌟", image: des4 ,link : "https://docs.google.com/forms/d/e/1FAIpQLSftBTlvtCYRtCvbrt-oBxMR7krESqW389ptbf7cmpwrxzVb6Q/viewform?usp=header"},
    { id: 5, title: "Box Cricket Boys || 5TH & 6TH Feb", description: "Are you ready to bat, bowl, and conquer? 🏏 Join the Box Cricket Tournament (Boys Category) at Yash 25.0 and showcase your skills and teamwork! Gather your squad and compete for glory! 💪🔥", image: des5 ,link : "https://docs.google.com/forms/d/e/1FAIpQLScT2WDR2qcq-P3Xnpv_nBgq9X5KxVAL3Z5N7Dky0Xi14XTGmg/viewform?usp=header"},
    { id: 6, title: "Box Cricket Girls || 7TH Feb", description: "Are you ready to bat, bowl, and conquer? 🏏 Join the Box Cricket Tournament (Girls Category) at Yash 25.0 and showcase your skills and teamwork! Gather your squad and compete for glory! 💪🔥", image: des6 ,link : "https://docs.google.com/forms/d/e/1FAIpQLScwCojbv4j5PEQlm_OVEMPpNqUE_EpHpkT88jiAuqjWw20S5w/viewform"},
    { id: 7, title: "Carrom || 10TH Feb ", description: "Are you ready to strike, strategize, and win? 🎯 Join the Carrom Tournament at Yash 25.0 and showcase your precision and skills! Aim high, pocket your way to victory, and claim the crown! 🏆✨", image: des7 , link : "https://docs.google.com/forms/d/e/1FAIpQLSeggzWgJmBLbQ9gMxzFICe5kACk722kOyUFT-s5_wJifA9QVg/viewform?usp=header"},
    { id: 8, title: "Chess || 10TH Feb", description: "Checkmate your way to glory! ♟ Join the Chess Tournament at Yash 25.0 and showcase your strategic brilliance on the board. It’s time to prove your mettle and claim victory! 🌟", image: des8 , link : "https://docs.google.com/forms/d/e/1FAIpQLSdWp_S5W2HA0Du11sb_92pAC_XkEa3N3DZ3QDlG9swsNwV2WQ/viewform?usp=header"},
    { id: 9, title: "Commando Room || ", description: "Commando Room is an exciting event inspired by the SSB interview process, designed to test focus, problem-solving, and decision-making under challenging conditions. The event features two rounds that blend creativity, analytical thinking, and psychological evaluation.", image: des9 ,link : "https://forms.gle/prHMUvWswimDqkrt8"},
    { id: 10, title: "FIFA || 9TH & 10TH Feb", description: "Step into the arena and showcase your eSports prowess in the FIFA Mobile Tournament at Yash 25.0! 🌟 Compete solo and aim for glory in this electrifying event. Take your shot and claim victory! 🏆", image: des10 ,link : "https://docs.google.com/forms/d/e/1FAIpQLSftGVPKqDUGXA6MoARL6lKb04XBETr617q7aN0TujUAG-ih_Q/viewform"},
    { id: 11, title: "Freefire || 9TH & 10TH Feb", description: "Survivors, are you ready? 🪂 The ultimate Free Fire (Squad) Tournament at Yash 25.0 is here! Bring your squad, dominate the battlefield, and claim victory royale! 🌟", image: des11 ,link : "https://docs.google.com/forms/d/e/1FAIpQLSdX1kkvbGT16r8hD0EpLgbQmvogGhkgt-UB3x8NYnERBfBoUA/viewform?usp=header"},
    { id: 12, title: "Futsal || 8TH & 9TH Feb", description: "Get ready to hit the field and showcase your skills at the Futsal Tournament! ⚽ Whether you're playing in a team or cheering from the sidelines, it’s time to bring the heat and compete for amazing prizes at Yash 25.0! 🏆", image: des12 ,link : "https://docs.google.com/forms/d/e/1FAIpQLSdovrA6CLMCDYqTX6cOINm-RZ5aUQctevQ0clRPQOEXz21yTg/viewform?usp=header"},
    { id: 13, title: "Volleyball || 7TH & 8TH Feb", description: "Are you ready to serve, spike, and win? 🏐 Join the Volleyball Tournament at Yash 25.0 and showcase your skills on the court! Bring your A-game and compete for glory! 💪", image: des13 ,link : "https://docs.google.com/forms/d/e/1FAIpQLScDkGJ-TG84CkYhtxrB1tneOZ_jrIsXnjRW9hWUU_RL6Wyebg/viewform?usp=header"},
    { id: 14, title: "Long Cricket || 1ST & 10TH Feb", description: "Gear up for the ultimate cricketing experience at the Yash 25.0 Long Cricket Tournament! Build your dream team, battle it out on the field, and take home amazing prizes! 🌟", image: des14 ,link : "https://docs.google.com/forms/d/e/1FAIpQLScZWPs495VU2Xy6uDVAvWIAlZ3X407Rx7TBsz2Lk5ChsSoMWg/viewform?usp=header"},
    { id: 15, title: "Smash Karts || 9TH & 10TH Feb", description: "Ready to race and win? 🚗💨 Join the Smash Karts Tournament at Yash 25.0 and show your speed and skills on the track! Race to the top and claim the prize! 🏆", image: des15 ,link : "https://docs.google.com/forms/d/e/1FAIpQLSdc3DHdz6zmrvVPbae76KJMDkS9ehI_XwSHO__RsFDhg0K6Xg/viewform?usp=header"},
    { id: 16, title: "Tug of Wars Boys || 6TH & 7TH Feb", description: "Are you ready to pull, persevere, and conquer? 💪 Join the Tug of War Tournament at Yash 25.0 and showcase your strength and teamwork! Rope in your squad and compete for victory! 🔥", image: des16 ,link : "https://docs.google.com/forms/d/e/1FAIpQLSfMD_POWQB2kBxDb8JOFwuMLTdxEGl8M23eLgJsRYozDmtiTA/viewform?usp=header"},
    { id: 17, title: "Tug of Wars Girls || 6TH Feb ", description: "Are you ready to pull, persevere, and conquer? 💪 Join the Tug of War Tournament at Yash 25.0 and showcase your strength and teamwork! Rope in your squad and compete for victory! 🔥", image: des17 ,link : "https://docs.google.com/forms/d/e/1FAIpQLSd-3LLLs9sawwMiQvnzekMzuzfzIU9WVx6SU_uIRC8SrdQxag/viewform?usp=header"},
    { id: 18, title: "Valorant || 9TH & 10TH Feb", description: "Get ready for the ultimate team-based Valorant showdown at Yash 25.0! 🖥️🔥 Gather your squad, strategize, and compete in this thrilling online 5v5 esports battle. Play from the comfort of your home and aim for victory!", image: des18 ,link : "https://docs.google.com/forms/d/e/1FAIpQLSc3P-XqGbnh6ZAR9tngmNW3Qi_YOzHtjFoVh3J1EBsaiNDgpw/viewform?usp=header"}
    
  ];
  
  export default sportEvents;
  