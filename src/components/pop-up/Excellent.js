import React from "react";
import "../../styles/Layout.css";
import cheetah from '../../assets/cheetah.gif';
import data from "../../resources/data.json";

const Excellent = (accuracy, correct) => {


  return  <div>
            <div className="popup-header">Таны хурд: {data.cheetah}</div>          
            <div>
              <img className="half-width"src={cheetah} alt="cheetah"/>
              <div className="popup-body">Та {correct} үг, {accuracy}% амжилттай бичлээ.</div>
            </div>
          </div>;
};

export default Excellent;
