import React, { Component } from 'react';
import './App.css';
import DealCycleGallery from './components/galleryComponents/DealCycleGallery';
import SalesDealGallery from './components/galleryComponents/SalesDealGallery';
import '../src/components/galleryComponents/SalesDealGallery.css';
import '../src/components/galleryComponents/DealCycleGallery.css';
import Data from './data.json';
import DealData from './dealcycledata.json';



class App extends Component {
  constructor() {
    super()
    this.state = {
      salesPersonData: Data,
      dealCycleData: DealData
    }
  }
  render() {
    // console.log(data)
    return (
      <div>
        <DealCycleGallery dealCycleData={this.state.dealCycleData}/>
        <SalesDealGallery salesPersonData={this.state.salesPersonData} />
      </div>
    );
  }
}
export default App;


