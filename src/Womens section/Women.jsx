import React, { useState } from 'react'
import "./Women.css";
import Item from '../FirstPage/Item';
import Footer from '../FirstPage/Footer';
import MasterHeader from '../FirstPage/MasterHeader';



const Women = () => {
  let d = new Date().toLocaleTimeString() ;
const [ctime , setCtime] = useState(d);
const UpdateTime = () => {
  d = new Date().toLocaleTimeString() ;
  setCtime(d)
};

setInterval(UpdateTime,1000)
  return (
    <>
      <MasterHeader/>
      <div className="container middleimg2">
        <div className="innerbox">
          <div className="rightbox">
            <p className='text-center'> DEAL OF THE DAY</p>
            <h2 className='text-center'>Best women <br />
            street style
            </h2>
            <p className='text-center'>Up comings</p>
            <div className="line">
            <h2>{ctime}</h2>
          
            </div>
          </div>
        </div>
      </div>
      <div className="line">
     <Item imgurl='https://sepiastories.in/wp-content/uploads/2023/10/BAHMAA-PRINTED-COTTON-CO-ORD-SET1.webp'/>
     <Item imgurl='https://img.tatacliq.com/images/i10/437Wx649H/MP000000016703272_437Wx649H_202303021005281.jpeg'/>
     <Item imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReG2MCjKZB_traGDuLuMJJhesAnkWgwffnyt9PcPTZ4g&s'/>
     <Item imgurl='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21334344/2023/10/4/0f1cfc0f-db46-4f83-ad81-927ff4dc1c261696408834019-anayna-Women-Beige-Floral-Printed-Pure-Cotton-Kurta-with-Tro-11.jpg'/>
     
      </div>
      <div className="line">
     <Item imgurl='https://img.tatacliq.com/images/i17//437Wx649H/MP000000021716478_437Wx649H_202403282108271.jpeg'/>
     <Item imgurl='https://images.meesho.com/images/products/367252454/xrmkg_512.jpg'/>
     <Item imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPyrrYAFaWj9lQntV6jrkrTOPfMOxI8aM0pS0iHBctQ&s'/>
     <Item imgurl='https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw6727f37a/images/hires/SS22/AND-S24AV076TR17_WHT-GRN-(4).jpg?sw=400&sh=600&sm=fit'/>
     </div>
     <Footer/>
    </>
  )
}

export default Women
