import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: "https://github.com/NicolaiBarreraMartinez" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/nicolai-barrera-fullstack-/" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/nicolai.barreramartinez/" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/nicolai_barrera/" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
