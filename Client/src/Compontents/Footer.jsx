import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative left-0 bottom-0 sm:h-[5vh] h-[15vh] py-5 sm:px-20 sm:pb-2 flex flex-col sm:flex-row items-center justify-between text-white bg-black">
            <section className="text-sm sm:text-base">
                © {currentYear} | All rights reserved
            </section>
            <section className="flex items-center justify-center gap-5 text-2xl">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-all ease-in-out duration-300"
                >
                    <BsFacebook />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-all ease-in-out duration-300"
                >
                    <BsInstagram />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-all ease-in-out duration-300"
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-all ease-in-out duration-300"
                >
                    <BsTwitter />
                </a>
            </section>
        </footer>
    );
}

export default Footer;
