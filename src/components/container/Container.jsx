import React from 'react';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import useWindowWidth from '../../hooks/useWindowWidth';

const Container = ({children,selected}) => {
  const onSmallScreen = useWindowWidth(1200);
    return (
        <div className={`${onSmallScreen ? 'container-fluid' : 'container'}`}>
        <Sidebar selected={selected || 1} />
        <main className="main_content">
          {
            children
          }
        </main>
      </div>
    );
}

export default Container;
