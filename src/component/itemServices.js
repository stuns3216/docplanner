import React from "react";

export default function itemServices(props) {
  return (
    <section className="item-services">
      {props.ItemServises.map((el, i) => (
        <div className={i === 0 ? "patients-service" : "doctor-service"}>
          <h2>{el.title}</h2>
          <h1>{el.h1}</h1>
          {el.select && (
            <select className="btn-country-select">
              {el.select.map(element => (
                <option>{element}</option>
              ))}
            </select>
          )}
          <img src={el.image} />
        </div>
      ))}
    </section>
  );
}
