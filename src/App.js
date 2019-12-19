import React from 'react';
import Navbar from './component/navbar'
import LeadSection from './component/LeadSection'
import ItemServise from './component/itemServices' 
import Brands from './component/brands'
import Statistical from'./component/statistical'
import Office from './component/office'
import Offcards from './component/offcards'
import Footer from './component/footer'

import './App.css';

const doctorspatients =["We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.","We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."]
const ItemServises=[{title:"For patients",h1:"Find a doctor, book a visit and solve any health-related doubt",select:["choose country","tunis"],image:"https://www.docplanner.com/img/screen-marketplace@2x.png"},
{title:"For doctors",h1:"Save time managing visits and cut no-shows by half",image:"https://www.docplanner.com/img/screen-saas@2x.png"}]
const cards=[{image:"https://www.docplanner.com/img/flag.png", 
title:"Leader in 10 countries",
 text:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",
  class:"x"},
{image:"https://www.docplanner.com/img/visits.png", 
title:"1.5 million appointments", 
text:"booked last month", 
class:"patients"}, 
{image:"https://www.docplanner.com/img/patients.png", 
title:"30 million unique patients", 
text:" visit us every month", 
class:"x"},
{image:"https://www.docplanner.com/img/doctors.png", 
title:"2 million active doctors", 
text:"trust in our solutions", 
class:"patients"}];
const cardsoff=[
{href:"/career?&amp;loc=poland#jobs-offers",src:"https://www.docplanner.com/images/warsaw.png",srcset:"https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x", title:"warsaw"},
{href:"/career?&amp;loc=rome#jobs-offers",src:"https://www.docplanner.com/images/barcelona.png" ,srcset:"https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x", title:" Barcelona"},
{href:"/career?&amp;loc=poland#jobs-offers",src:"https://www.docplanner.com/images/istanbul.png",srcset:"https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x", title:"Istanbul"},
{href:"/career?&amp;loc=italy#jobs-offers",src:"https://www.docplanner.com/images/rome.png",srcset:"https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x", title:" Rome"},
{href:"/career?&amp;loc=mexico#jobs-offers",src:"https://www.docplanner.com/images/mexico-city.png",srcset:"https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x", title:" Mexico City"},
{href:"/career?&amp;loc=brazil#jobs-offers",src:"https://www.docplanner.com/images/curitiba.png",srcset:"https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x", title:"Curitiba"}
]





  
  

function App() {
  return (
    <div>
<Navbar />
<main>
<LeadSection parag={doctorspatients}/>
<ItemServise ItemServises={ItemServises}/>
<Brands/>
<Statistical card={cards}/>
<Office/>
<Offcards cards={cardsoff}/>
<Footer/>
</main>
    </div>
  );
  
}
export default App;
