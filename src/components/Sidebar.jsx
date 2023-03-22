import Avatar from "../img/picwish4.png"

import '../styles/components/sidebar.sass';
import SocialNetworks from "./SocialNetworks";
import Information from "./Information";

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Angelo Maximo" />
        <p className="title">Desenvolvedor Front-End</p>
        <SocialNetworks />
        <Information />
        <a href="" className='btn'>Download curriculo</a>
    
    </aside>
  )
}

export default Sidebar