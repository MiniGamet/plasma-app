import React from "react";
import "./services.css";

const cards = [
  {
    title: "Landscape",
    info: "Design & Build. Check Out More!",
  },
  {
    title: "Excavation & Utilities",
    info: "Residential & Commercial. Check Out More!",
  },
  {
    title: "Maintenance",
    info: "Residential & Commercial. Check Out More!",
  },
];

const Services: React.FC = () => {
  return (
    <div id="services" className="services">
      <div className="servicesTitle">Services</div>
      <div className="servicesOptions">
        {cards.map((card, index) => {
          return (
            <div className="servicesOptions__card">
              <div className="content">
                <h2 className="title">{card.title}</h2>
                <p className="info">{card.info}</p>
                <button className="btn">
                  Learn More<span>&rarr;</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
