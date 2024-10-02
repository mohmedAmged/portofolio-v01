import styles from './myHome.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';
import "swiper/css/autoplay";
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import Autoplay from "../../../node_modules/swiper/modules/autoplay.mjs";
import sliderBg1 from '../../assets/homeSliderImages/sliderImg1.jpg'
import sliderBg2 from '../../assets/homeSliderImages/sliderImg2.jpg'
import { NavLink } from 'react-router-dom';
export default function MyHome() {
    const sliderItems = [
        {
            bg_image: sliderBg1,
            headText1: 'Hi!',
            headText2: 'Im Mohamed',
            infoText: '100% html, css, javascript, react.js',
            btnText: 'Download Cv',
            linkBtn: ''
        },
        {
            bg_image: sliderBg2,
            headText1: 'I am',
            headText2: 'a Developer',
            infoText: '100% html, css, javascript, react.js',
            btnText: 'View Projects',
            linkBtn: ''
        }
    ]
    return (
        <div className={`${styles.myHome_handler} `}>
            <>
                <Swiper
                    className='mySwiper '
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    autoplay={{
                        delay: 2500,
                        pauseOnMouseEnter: true,
                        // disableOnInteraction: false
                    }}
                    // breakpoints={{
                    //     300: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 10
                    //     },
                    //     426: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 20
                    //     },
                    //     600: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 15
                    //     },
                    //     768: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 15
                    //     },
                    //     995: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 20
                    //     },
                    // }}
                >
            {
                sliderItems?.map((el, index) => (
                    <SwiperSlide key={index} 
                    className={`${styles.homeSlide__item} `}
                    style={{ backgroundImage: `url(${el?.bg_image})` }}
                    >
                        <>
                            <div 
                            className={`container`}>
                                <div className={`${styles.homeSlide__info}`}>
                                    <div className="headerText">
                                        <h1>
                                            {el?.headText1}
                                        </h1>
                                        <h1>
                                            {el?.headText2}
                                        </h1>
                                        
                                    </div>
                                    <p>
                                        {el?.infoText}
                                    </p>
                                    <NavLink className={'nav-link'} to={el?.linkBtn}>
                                        <button>
                                            {el?.btnText}
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </>
                    </SwiperSlide>
                ))
            }

                </Swiper>
            </>
        </div>
    )
}
