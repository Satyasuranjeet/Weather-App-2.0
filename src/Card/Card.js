import './card.css';
import wind from "./images/wind.png";
import humidity from "./images/humidity.png";
import visibility from "./images/visibility.png";
const Card=(props)=>{
    return(
     <div className="black-box">
        <div className="inner-box">
            <img className="icon" src={wind} alt=""/>
            <br/>
            <div className="text">{props.wind}Km/h</div>
            <div className="text-t">Wind</div>
        </div>
        <div className="inner-box">
            <img className="icon" src={humidity} alt=""/>
            <br/>
            <div className="text">{props.humid}%</div>
            <div className="text-t">Humidity</div>
        </div>
        <div className="inner-box">
            <img className="icon" src={visibility} alt=""/>
            <br/>
            <div className="text">{props.visi}Km</div>
            <div className="text-t">Visibility</div>
        </div>
    </div>
    );
}

export default Card;

