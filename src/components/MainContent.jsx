import AboutContainer from "./AboutContainer"
import TecnologiesContainer from "./TecnologiesContainer"
import ProjectContainer from "./ProjectContainer"

import "../styles/components/maincontent.sass"

const MainContent = () => {
  return (
    <main id="main-content">
        <AboutContainer />
        <TecnologiesContainer />
        <ProjectContainer />
    </main>
  )
}

export default MainContent