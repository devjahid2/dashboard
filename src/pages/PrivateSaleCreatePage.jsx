import React from 'react';
import Container from '../components/container/Container';
import PrivateSaleCreate from '../layouts/PrivateSale/PrivateSaleCreate';

const PrivateSaleCreatePage = () => {
    return (
        <Container selected={3}>
            <PrivateSaleCreate/>
        </Container>
    );
}

export default PrivateSaleCreatePage;
