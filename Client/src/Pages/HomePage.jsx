import { Link } from "react-router-dom";
import homeimg from "../Assets/Images/Homepage2.png";
import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
    return (
        <HomeLayout>
            <div className="pt-10 text-white flex flex-col md:flex-row items-center justify-center mx-5 gap-10 lg:mx-16 h-[50rem] sm:h-[90vh]">
                {/* Text section */}
                <div className="mt-16 sm:mt-0 flex flex-col justify-center space-y-6">
                    <h1 className="text-xl sm:text-5xl ">
                        Find out the best
                        <span className="border rounded-md px-2 py-0 bg-cyan-900 ml-2">
                            Online Courses
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-200">
                        Explore a vast library of high-quality courses taught by
                        skilled faculty — all at an affordable price.
                    </p>

                    <div className="space-x-4 flex flex-wrap items-center gap-4">
                        <Link to="/courses">
                            <button className="border rounded-md hover:text-black px-5 py-3  font-semibold text-lg cursor-pointer hover:bg-white transition-all ease-in-out duration-300">
                                Explore Courses
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button className="border rounded-md hover:text-black px-5 py-3  font-semibold text-lg cursor-pointer hover:bg-white transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>

                    {/* AI-based generator CTA */}
                    <div className="mt-6 text-sm sm:text-base">
                        <p className="mb-1">✨ Try our AI-based course generator — it's free!</p>
                        <a
                            href="https://sublime-eta.vercel.app/"
                            // target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-500 underline hover:text-cyan-300"
                        >
                            Visit Sublime-IQ
                        </a>
                    </div>
                </div>

                {/* Image section */}
                <div className="lg:w-1/4 flex items-center justify-center">
                    <img src={homeimg} alt="Homepage visual" className="w-full h-auto" />
                </div>
            </div>
        </HomeLayout>
    );
}

export default HomePage;

