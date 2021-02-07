import React, { Component } from 'react';
import '../cards/DealCycleCard.css';


const DealCycleCard = (props) => {
  return (
      <div className="deal-gallery">
          <p className="status">{props.DealCycleData.status}</p>
          <p className="status-count">{props.DealCycleData.statusCount}</p>
          </div>
  );
};
export default DealCycleCard;