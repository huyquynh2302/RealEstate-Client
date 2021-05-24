import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/screens/Homepage/Homepage'
import ApartmentRent from './components/screens/ViewAll/ApartmentRent'
import HometownRent from './components/screens/ViewAll/HometownRent'
import ApartmentSale from './components/screens/ViewAll/ApartmentSale'
import HometownSale from './components/screens/ViewAll/HometownSale'
import Detail from './components/screens/ViewDetail/Detail'
import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/cho-thue/can-ho">
        <ApartmentRent />
      </Route>
      <Route path="/cho-thue/nha-pho">
        <HometownRent />
      </Route>
      <Route path="/mua-ban/can-ho">
        <ApartmentSale />
      </Route>
      <Route path="/mua-ban/nha-pho">
        <HometownSale />
      </Route>
      <Route path="/chi-tiet/:id">
        <Detail />
      </Route>
    </Switch>
)
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <Header />
        </header>
        <Routing></Routing>
        <Footer />
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
