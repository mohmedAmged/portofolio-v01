import MyHeader from '../../components/myHeaderSec/MyHeader'
import styles from './myExperiance.module.css'
export default function MyExperiance() {
    const experianceBoxItems = [
        {
            icon: 'bi bi-pencil',
            title: 'Full Stack Developer',
            desc: 'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.',
            mainColor: '#2c98f0',
            date: '2017-2018'
        },
        {
            icon: 'bi bi-pencil',
            title: 'Front End Developer at Google Company',
            desc: 'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.',
            mainColor: '#d9534f',
            date: '2017-2018'
        },
        {
            icon: 'bi bi-pencil',
            title: 'System Analyst',
            desc: 'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.',
            mainColor: '#f0ad4e',
            date: '2017-2018'
        },
    ]
    return (
        <div className={`${styles.myExperiance__handler} container  my-5`}>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <MyHeader title={'EXPERIENCE'} subTitle={'WORK EXPERIENCE'} />
                    <div className={styles.experianceInfo}>
                        <ul className={styles.experianceItems_handler}>
                        {
                            experianceBoxItems?.map((el, idx)=>(
                                <li key={idx} className={`${styles.experianceItem}`}>
                                    <div className={styles.itemICon} style={{backgroundColor: `${el?.mainColor}`}}>
                                        <i className={el?.icon} ></i>
                                    </div>
                                    <div className={styles.itemText}>
                                        <h2>
                                            {el?.title} <span>{el?.date}</span>
                                        </h2>
                                        <p>
                                            {el?.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
