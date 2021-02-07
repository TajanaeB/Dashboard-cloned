import React, { Component } from 'react';
import DealCycleCard from '../cards/DealCycleCard';
import '../cards/DealCycleCard.css';


const DealCycleGallery = (props) => {
    return (
        <div className='container'>
            {
                props.dealCycleData.map((salesPerson, index) => {
                    console.log(index)
                    console.log(salesPerson[1])
                    return <DealCycleCard DealCycleData={salesPerson} key={index} />
                })
            }
            {/* {listOfComponents} */}
        </div>
    );
};
export default DealCycleGallery;
