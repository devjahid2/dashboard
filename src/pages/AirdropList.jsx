import React from 'react';

const AirdropList = () => {
    return (
        <Container>
      <Header
        filterMenuProp={filterMenu}
        showFilter={false}
        title={"XL-Lock"}
        route={"Token"}
        middle={"XL-Lock"}
      />
      <XlLockTokenBody/>
    </Container>
    );
}

export default AirdropList;
