import React from 'react';
import Container from '../components/container/Container';
import CreatePageHeader from '../layouts/CreatePageHeader/CreatePageHeader';

const BuyCryptoPage = () => {
    return (
        <Container selected={4}>
            <CreatePageHeader middle={'Buy Crypto'} route={'Fiat'}t title={'Buy Crypto / Fiat'}/>
        </Container>
    );
}

export default BuyCryptoPage;
