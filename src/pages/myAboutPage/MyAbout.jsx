import MyHeader from '../../components/myHeaderSec/MyHeader'
import styles from './myAbout.module.css'
export default function MyAbout() {
  const aboutBoxItems = [
    {
      icon: 'bi bi-lightbulb',
      title: 'Graphic Design',
      mainColor: '#2c98f0'
    },
    {
      icon: 'bi bi-globe-americas',
      title: 'Web Design',
      mainColor: '#ec5453'
    },
    {
      icon: 'bi bi-database',
      title: 'Software',
      mainColor: '#f9bf3f'
    },
    {
      icon: 'bi bi-phone',
      title: 'Application',
      mainColor: '#a84cb8'
    },

  ]
  return (
    <div className={`${styles.myAbout_handler} container  my-5`}>
        <div className="row justify-content-center">
          <div className="col-md-10">
              <MyHeader title={'ABOUT US'} subTitle={'WHO AM I?'}/>
              <div className={`${styles.about_info}`}>
                <p>
                  <strong>Hi Im Jackson Ford</strong> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.
                </p>
                <p>
                  Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
              </div>
              <div className="about_main_skills row my-4">
                {
                  aboutBoxItems?.map((el,idx)=>(
                    <div  key={idx} className="col-lg-3 col-md-6">
                      <div className={`${styles.aboutBoxItem} `} style={{borderBottomColor:`${el?.mainColor}`}}>
                        <i className={el?.icon} style={{color:`${el?.mainColor}`}}></i>
                        <h2>
                          {el?.title}
                        </h2>
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
