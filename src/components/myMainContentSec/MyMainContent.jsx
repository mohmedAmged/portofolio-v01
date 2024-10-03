import { Route, Routes } from "react-router-dom";
import MyHome from "../../pages/myHomePage/MyHome";
import MyAbout from "../../pages/myAboutPage/MyAbout";
import styles from './myMainContent.module.css'
import MySkills from "../../pages/mySkillsPage/MySkills";
import MyExperiance from "../../pages/myExperiencePage/MyExperiance";
export default function MyMainContent() {
    return (
        <div className={`${styles.mainContent_handler}`}>
            <Routes>
                <Route path='/' element={<MyHome />} />
                <Route path='/about' element={<MyAbout />} />
                <Route path='/skills' element={<MySkills />} />
                <Route path='/experiance' element={<MyExperiance />} />
            </Routes>
        </div>
    )
}
