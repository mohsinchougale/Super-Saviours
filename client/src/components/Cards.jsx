import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the latest news!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Over 27,000 Police Personnel Deployed for Republic Day Security, Says Delhi Police Chief"
              label="Republic Day"
              path="https://www.news18.com/news/india/over-27000-police-personnel-deployed-for-republic-day-security-says-delhi-police-chief-4690034.html"
            />
            <CardItem
              src="images/img-2.jpg"
              text="COVID-19 in Quebec: What you need to know Friday"
              label="Covid-19"
              path="https://www.cbc.ca/news/canada/montreal/covid-19-quebec-jan-21-1.6322665"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Quebec police looking for man last seen Dec. 17, who may be in danger"
              label="Lost and Found"
              path="https://montreal.ctvnews.ca/quebec-police-looking-for-man-last-seen-dec-17-who-may-be-in-danger-1.5726451"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Over 2500 ambulance calls daily from Covid patients in Delhi for past one week"
              label="Medical"
              path="https://www.livemint.com/news/india/delhi-over-2500-ambulance-calls-daily-from-covid-patients-in-past-one-week-11619074044937.html"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Eight Delhi Police personnel awarded ‘Medal for Excellence in Police Training"
              label="Police"
              path="https://www.indiatoday.in/india/story/eight-delhi-police-officers-awarded-medal-excellence-police-training-1899708-2022-01-13"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
