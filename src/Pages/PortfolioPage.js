import React, { useState } from "react";
import styled from "styled-components";
import Menu from "../Components/Menu";
import Title from "../Components/Title";
import portfolios from "../data/portfolio";
import { InnerLayout, MainLayout } from "../styles/Layout";
import Button from "../Components/Button";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

const PortfolioPage = () => {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"Portfolios"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
};

export default PortfolioPage;
