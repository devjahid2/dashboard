import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LaunchpadCreatePage from '../pages/LaunchpadCreatePage';
import LaunchpadDetailsPage from '../pages/LaunchpadDetailsPage';
import FairLaunchCPage from '../pages/FairLaunchCPage';
import PrivateSaleCreatePage from '../pages/PrivateSaleCreatePage';
import PrivateSaleViewPage from '../pages/PrivateSaleView';
import PrivateSalePage from '../pages/PrivateSalePage';
import XlLockCReatePage from '../pages/Xl_LockCReate';
import XlLockTokenPage from '../pages/XlLockToken';

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route index path='/' element={<HomePage/>}/>

          <Route index path='/private-sales' element={<PrivateSalePage/>}/>
          <Route path ="/launchpad/create" element={<LaunchpadCreatePage/>}/>
          <Route path ="/fair-launch/create" element={<FairLaunchCPage/>}/>
          <Route path ="/private-sale/create"  element={<PrivateSaleCreatePage/>}/>
          <Route path ="/private-sale/view" element={<PrivateSaleViewPage/>}/>
          <Route path ="/xl-lock/create" element={<XlLockCReatePage/>}/>
          <Route path ="/xl-lock/token" element={<XlLockTokenPage/>}/>

          

          <Route path="/launchpad-view/:id" element={<LaunchpadDetailsPage/>}/>
          {/* <Route path="*" element={<NotFoundB/>} /> */}
        </Routes>
      </BrowserRouter>
    );
}

export default AppRoutes;
