import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";

const Footer = () => {
    return (
        <footer
            className=" footer border-t z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white"
        >
            <div className="container m-6 flex justify-around">
                <a className="text-gray-400" href="mailto:tejas27dhanani@gmail.com">
                    tejas27dhanani@gmail.com
                </a>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/tejasdhanani" target="_blank">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://linkedin.com/in/tejasdhanani" target="_blank">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
                {/* <span>LOGO</span> */}
                {/* <p>© [Your Name] [Year]</p> */}
            </div>
            <p className="text-slate-600 text-center mb-6">© Tejas Dhanani 2024</p>
        </footer>
    );
};

export default Footer;