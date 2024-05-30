import React from 'react'
import Header from "./Header.jsx";
import Cart from './Cart.jsx';
import Img from "./Featuringimg.jsx";
import Item from './Item';
import Footer from './Footer';



const Allcomponents = () => {
  
  return (
    <>
     <Header/>
    <div className="line"> 
    <Cart imgsrc="https://img.freepik.com/premium-vector/special-offer-lettering-tags-label-vector_58085-28.jpg"/>
    <Cart imgsrc="https://t3.ftcdn.net/jpg/01/91/23/46/360_F_191234646_8T4Xkch2Eg6Uye1gR57goysmix4QLKYK.jpg" />
    <Cart imgsrc="https://previews.123rf.com/images/valentint/valentint1704/valentint170400622/75401329-travel-icon-travel-website-button-on-white-background.jpg"/>
    </div>
    <Img/>
    <h3 className="text-center my-4">Featured Product</h3>
    <div className="line">
    <Item imgurl='https://i.pinimg.com/736x/f6/43/8d/f6438d3515d4b8227997475e1d75c148.jpg'/>
    <Item imgurl='https://www.bringitonline.in/uploads/2/2/4/5/22456530/dsc06987_orig.jpg'/>
    <Item imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKa1B7NdNjJpD8qKFHNPkSSCZIvaaQtfXM8PhicirrIbT7gXPTHCvbYsENgSR9GMutNiU&usqp=CAU'/>
    <Item imgurl='https://www.bringitonline.in/uploads/2/2/4/5/22456530/dsc07428_orig.jpg'/>
    </div>
    <Footer/>
    </>
  )
}

export default Allcomponents
