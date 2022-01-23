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
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="COVID-19 in Quebec: What you need to know Friday"
              label="Covid-19"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Quebec police looking for man last seen Dec. 17, who may be in danger"
              label="Lost and Found"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Over 2500 ambulance calls daily from Covid patients in Delhi for past one week"
              label="Medical"
              path="/products"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Eight Delhi Police personnel awarded ‘Medal for Excellence in Police Training’"
              label="Police"
              path="/signin"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
