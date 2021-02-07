import React, { Component } from 'react';
import SalesDealCard from '../cards/SalesDealCard';
import '../cards/SalesDealCard.css';



    const SalesDealGallery = (props) => {
        return (
            <div className='card-container'>
                {
                    props.salesPersonData.map((salesPerson, index) => {
                        console.log(index)
                        console.log(salesPerson[1])
                        return <SalesDealCard salesPersonData={salesPerson} key={index} />
                    })
                }
                {/* {listOfComponents} */}
            </div>
        );
    };
    export default SalesDealGallery;
