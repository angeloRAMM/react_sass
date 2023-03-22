import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import "../styles/components/information.sass"

const Information = () => {
  return (
    <section id="information">
       <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
            <h3>Telefone</h3>
            <p>(51)99724-7689</p>
        </div>
       </div> 
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>E-Mail</h3>
                <p>angelofelin@gmail.com</p>
            </div>
        </div> 
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Brochier / RS</p>
            </div>
        </div> 
    </section>
  )
}

export default Information