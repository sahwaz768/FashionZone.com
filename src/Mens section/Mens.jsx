import React from 'react'
import './Mens.css'
import Item from '../FirstPage/Item'
import Footer from '../FirstPage/Footer'
import MasterHeader from '../FirstPage/MasterHeader'

const Mens = () => {
  return (
    <>
    <MasterHeader/>
    <div className="container middleimg">
      <h2>Break the Boundary of Fasion <br />
      with Us
      </h2>
      </div>
      <div className="line">
     <Item imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDXNnZsUC3ajR4c_8vOWTzM7I5Y4947DhJEvAGJel3tw&s'/>
     <Item imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5m6_x6Q_DLEjtrtwfk7Qn_cNAmipRT-HjZmM9svDnZQ&s'/>
     <Item imgurl='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/27566358/2024/2/28/46a9d653-28ee-4f74-aec0-b7e4dc1b45771709099403005-US-Polo-Assn-Denim-Co-Men-Shirts-2271709099402645-1.jpg'/>
     <Item imgurl='https://images.bestsellerclothing.in/data/selected/01-april-2024/236413102_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto'/>
     
      </div>
      <div className="line">
     <Item imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmmgeUFMYvQxO2pzufuZn6_g57ROYUhmbMf-FEju1xw&s'/>
     <Item imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lJugp3uFAEn_cuDGmjs7H1SWWyQq2MbUowMYLbEoQQ&s'/>
     <Item imgurl='https://sslimages.shoppersstop.com/sys-master/images/he0/h4e/32362194468894/WRSS24WSJN2049S_BLACK.jpg_230Wx334H'/>
     <Item imgurl='https://i.pinimg.com/736x/7c/08/30/7c083026ff20a7b9c5048040c0d93f8e.jpg'/>
     </div>
     <Footer/>
    
    </>
  )
}

export default Mens
