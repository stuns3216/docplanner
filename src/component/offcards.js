import React from "react";

export default function offcards({ cards }) {
  return (
    <div className="office-pic">
      {cards.map(el => (
        <div className="office">
          <a href={el.href} className="office__inner" />
          <figure class="office__image">
            <img
              scr={el.src}
              srcset={el.srcset}
            />
          </figure>
          <div class="office__desc">
            {el.title}
            <button class="btn-small">See openings</button>
          </div>
        </div>
      ))}
    </div>
  );
}
