
// eslint-disable-next-line no-unused-vars
import { easeIn, motion } from "motion/react"
import team1 from "../assets/team.jpg"
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1/2 ml-4">
                    <motion.img
                        animate={{ y: [0, 50, 0] }}
                        transition={{ duration: 7, ease: easeIn, repeat: Infinity }}
                        src={team1}
                        className="max-w-sm w-70  rounded-t-[46px] rounded-br-[46px] shadow-2xl
                        border-l-4 border-b-4 border-blue-400
                        "
                    />
                    <motion.img
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 7, ease: easeIn, repeat: Infinity }}
                        src={team1}
                        className="max-w-sm w-70  rounded-t-[46px] rounded-br-[46px] shadow-2xl
                        border-l-4 border-b-4 border-blue-400
                        "
                    />
                </div>
                <div className="ml-5">
                    <motion.h1
                        animate={{ x: 50, color: ['#ffe633', '#33a8ff', '#3f9f15'] }}
                        transition={{ duration: 2, delay: 1, ease: easeIn, repeat: Infinity }}

                        className="text-5xl font-bold">Your Dream Job</motion.h1>
                    <p className="py-6">
                        Jobs that will make you feel like you're on top of the world. That willl make you feel like you're living your dream. That will make you feel like you're unstoppable.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;