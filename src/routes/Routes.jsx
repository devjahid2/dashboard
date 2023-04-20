import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LaunchpadCreatePage from '../pages/LaunchpadCreatePage';
import LaunchpadDetailsPage from '../pages/LaunchpadDetailsPage';
import FairLaunchCPage from '../pages/FairLaunchCPage';
import PrivateSaleCreatePage from '../pages/PrivateSaleCreatePage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route index path='/' element={<HomePage/>}/>
          <Route path ="/launchpad/create" element={<LaunchpadCreatePage/>}/>
          <Route path ="/fair-launch/create" element={<FairLaunchCPage/>}/>
          <Route path ="/private-sale/create"  element={<PrivateSaleCreatePage/>}/>

          

          <Route path="/launchpad-view/:id" element={<LaunchpadDetailsPage/>}/>
          {/* <Route path="*" element={<NotFoundB/>} /> */}
        </Routes>
      </BrowserRouter>
    );
}

export default AppRoutes;
