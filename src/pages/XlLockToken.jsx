import React from "react";
import Container from "../components/container/Container";
import Header from "../layouts/Header/Header";
import XlLockTokenBody from "../components/xlLockToken/XlLockTokenBody";

const XlLockTokenPage = () => {
  const filterMenu = [
    { id: 1, name: "Token" },
    { id: 2, name: "liquidity" },
  ];
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
};

export default XlLockTokenPage;
