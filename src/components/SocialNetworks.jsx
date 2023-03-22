import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa"

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
  { name: "linkedin", href: "https://www.linkedin.com/in/%C3%A2ngelo-felin-749ba5158/", icon: <FaLinkedinIn /> },
  { name: "github", href: "https://github.com/angeloRAMM?tab=repositories", icon: <FaGithub /> },
  { name: "instagram", href: "https://www.instagram.com/angelofelin_/", icon: <FaInstagram /> },
]

const SocialNetworks = () => {
  return (
    <section id="social-network">
        {socialNetworks.map((network) => (
            <a href={network.href} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks