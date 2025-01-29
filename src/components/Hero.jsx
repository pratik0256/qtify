
import headphone from "/headphone.png"
import style from "./hero.module.css"
const Hero = () => {
  return (
    <div className={style.heroWrapper}>
        <div className={style.heading}>
            <p>100 Thousand Songs, ad-free</p>        
            <p>Over thousands podcast episodes</p>
        </div>
        <div className={style.imgSection}>
            <img src={headphone} alt="headphone" />
        </div>
    </div>
  )
}

export default Hero