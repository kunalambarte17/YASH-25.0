import { motion } from 'framer-motion';
// import logo from "../../assets/logo.png";

const Sponsors = () => {
    const sponsorData = [
        {
            src: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/sponsors/gitConsultancy.png",
            alt: "Git Consultancy",
            width: "150"
        },
        {
            src: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/sponsors/cojag.png",
            alt: "cojag",
            width: "220"
        },
        {
            src: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/sponsors/new-Mk.png",
            alt: "MK",
            width: "150"
        },
        {
            src: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/sponsors/unstop-logo.svg",
            alt: "unstop",
            width: "200"
        },
        {
            src: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/sponsors/DBMart.png",
            alt: "DB Mart",
            width: "180"
        },
        {
            src: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/sponsors/webgurukul.png", 
            alt: "Webgurukul",
            width: "180"
        },
        {
            src: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/sponsors/time.png",
            alt: "TIMES",
            width: "180"
        },
        {
            src: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/sponsors/brLifeStyle.png",
            alt: "BR Life Styles",
            width: "180"
        },
        {
            src: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/sponsors/dahiya.jpg",
            alt: "Dahiya Momos",
            width: "180"
        },
        {
            src: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/sponsors/travosa.png",
            alt: "Travosa",
            width: "200"
        },
        {
            src: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/sponsors/SHIVTWISTER.jpg",
            alt: "Shiv Twister",
            width: "200"
        },
        {
            src: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/sponsors/SubhiMocktils.png",
            alt: "Subhi Mocktails",
            width: "180"
        },
    ];

    return (
        <div>
            <div className="relative pb-36">
                {/* Sponsors content */}
                <div className="relative z-10 ">
                    <h1 className="text-white text-center text-6xl font-extrabold mt-16">SPONSORS</h1>
                    <div className='flex justify-center items-center'>
                        <div className="relative w-[90%] overflow-hidden">
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: '0',
                                    backgroundImage: 'linear-gradient(to right, #090A0F, white, #090A0F)',
                                    opacity: '0',
                                    borderRadius: '0'
                                }}
                            ></div>
                            <motion.div
                                className="flex pt-20"
                                animate={{
                                    x: ["0%", "-100%"], // Scroll left and loop back
                                }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                style={{
                                    display: "flex",
                                    width: `calc(390px * 12)`,
                                }}
                            >
                                {sponsorData.concat(sponsorData).map((slide, i) => (
                                    <div
                                        key={i}
                                        className="flex-shrink-0 flex justify-center items-center bg-white w-[250px] h-[250px] mx-[70px] rounded-xl relative"
                                    >
                                        <img
                                            src={slide.src}
                                            alt={slide.alt}
                                            width={slide.width}
                                            height={250}
                                            className="rounded-lg"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;