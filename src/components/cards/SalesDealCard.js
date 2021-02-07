import React, { Component } from 'react';
import '../galleryComponents/SalesDealGallery.css';




const SalesDealCard = (props) => {
    console.log(props)
    return (
        <div class="middle-cards">
            <p className="dealPath">{props.salesPersonData.dealPath}</p>
            <img src={props.salesPersonData.image}></img>
            {/* <img src={image} alt="image"></img> */}
            <p className="clientCompany">{props.salesPersonData.clientCompany}</p>
            <p className="repName">{props.salesPersonData.salesRepName}</p>
            <p className="dealAmount">{props.salesPersonData.dealAmount}</p>
            <p className="dealStage">{props.salesPersonData.dealStage}</p>
        </div>
    );
};
export default SalesDealCard;

