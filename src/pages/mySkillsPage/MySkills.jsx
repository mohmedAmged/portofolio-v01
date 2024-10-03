import MyHeader from '../../components/myHeaderSec/MyHeader'
import styles from './mySkills.module.css'
export default function MySkills() {
    const progressBarItems = [
        {
            title: 'Photoshop',
            num: 75,
            mainColor: '#2c98f0'
        },
        {
            title: 'jQuery',
            num: 60,
            mainColor: '#ec5453'
        },
        {
            title: 'HTML5',
            num: 90,
            mainColor: '#f9bf3f'
        },
        {
            title: 'CSS3',
            num: 95,
            mainColor: '#a84cb8'
        },
        {
            title: 'WordPress',
            num: 70,
            mainColor: '#2fa499'
        },
        {
            title: 'SEO',
            num: 80,
            mainColor: '#4054b2'
        },
    ]
    return (
        <div className={`${styles.mySkills__handler} container  my-5`}>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <MyHeader title={'MY SPECIALTY'} subTitle={'MY SKILLS'} />
                    <div className={styles.skillsInfo}>
                        <p>
                            The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
                        </p>
                    </div>
                    <div className={`${styles.skillsProgressBars__handler} row`}>

                        {
                            progressBarItems?.map((el, idx) => (
                                <div key={idx} className={`${styles.progressbar_item} col-md-6`}>
                                    <h2>{el?.title}</h2>
                                    <div className="progress mt-3 mb-4" role="progressbar" aria-label="Example with label" aria-valuenow={el?.num} aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar" style={{width: `${el.num}%`, backgroundColor: `${el?.mainColor}`}}>{el?.num}%</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
