import React from 'react'

export default function statistical({card}) {
    return (
        <div className="statistical">
             <div className="stat-description">
             <h1>The world's biggest healthcare platform</h1>
             <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
             <img src="https://www.docplanner.com/img/logo.png" alt=""/>
            </div> 

            <div className="ggg">
            {card.map(el=><div className={el.class}>
<img src={el.image}/>
<h6>{el.title}</h6>
<p>{el.text}</p>
            </div>)}
            </div>
        </div>
    )
}
