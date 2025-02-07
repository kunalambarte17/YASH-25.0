import { motion } from 'framer-motion';
import brandStore from "../../assets/sponsors/brandStore.png"
import ims from "../../assets/sponsors/ims.png"
import Infinitylounge from "../../assets/sponsors/Infinitylounge.png"
import Infinity1 from "../../assets/sponsors/infinityturf.png"
import kcoverseas from "../../assets/sponsors/kcoverseas.jpg"
import PoolSnooker from "../../assets/sponsors/PoolSnooker.png"
import trusha from "../../assets/sponsors/trusha.png"
import attitude from "../../assets/sponsors/attitideswesome.png"
import fly from "../../assets/sponsors/flyaviation.png"
import water from "../../assets/sponsors/water.jpg"
import cojag from "../../assets/sponsors/cojag.jpg"

const Sponsors = () => {
    const sponsorData = [
        {
            src: brandStore,
            alt: "Brand Store",
            width: "150"
        },
        {
            src: Infinitylounge,
            alt: "Infinity Lounge",
            width: "220"
        },
        {
            src: ims,
            alt: "IMS",
            width: "250"
        },
        {
            src: Infinity1,
            alt: "Infinity Turf",
            width: "250"
        },
        {
            src: kcoverseas,
            alt: "DB Mart",
            width: "180"
        },
        {
            src: PoolSnooker, 
            alt: "Webgurukul",
            width: "180"
        },
        {
            src: trusha,
            alt: "TIMES",
            width: "250"
        },
        {
            src: attitude,
            alt: "TIMES",
            width: "250"
        },
        {
            src: fly,
            alt: "TIMES",
            width: "250"
        },
        {
            src: water,
            alt: "TIMES",
            width: "180"
        },
        {
            src: cojag,
            alt: "TIMES",
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
                                    x: ["0%", "-90%"], // Scroll left and loop back
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
                                        className="flex-shrink-0 flex justify-center items-center bg-black w-[250px] h-[250px] mx-[70px] rounded-xl relative"
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