import React from 'react'

const LeadSection = (props) => {
    return (<>
        <section class="lead-section">
                <img class="lead__logo" src="https://www.docplanner.com/img/sygnet.png" srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"/>
                 <h1>Making the healthcare experience more human</h1>
                 
        </section>
        <section class="section-content">
    {props.parag.map(el=><p className="par1">{el}</p>)}
        </section>
        </>
    )
}

export default LeadSection
