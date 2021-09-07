import './seasonDisplay.css'
import React from 'react';


const seasonConfig = {
    summer: {
        displayText: "let's hit the beach!!",
        iconName: "sun"
    },
    winter: {
        displayText: "Blurr, It's cold",
        iconName: "snowflake"
    }
};

const getSeason = (lat, month) => {
 if(month > 2 && month < 9){
     return lat > 0 ? 'summer':'winter';
 }else{
     return lat > 0 ? 'summer' : 'winter';
 }
};

const SeasonDisplay = (props)=>{
    const season = getSeason(props.lat,new Date().getMonth());
    const { displayText, iconName } = seasonConfig[season];
return <div className={`season-display ${season}`}>
    <i className={ `massive ${iconName} icon icon-left`}/>
    <h1>{displayText}</h1>
    <i className={ `massive ${iconName} icon icon-right`}/>
    </div>
};

export default SeasonDisplay;