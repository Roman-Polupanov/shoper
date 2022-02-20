import React, { useState } from "react";
import {
  Dropbtn,
  Dropbtn_content,
  Dropdown,
  Sort,
  Sortbar_cont,
  Sort_cont,
} from "./sortbar.styles";
import data from "../../mock/data";
import Card from "../card/Card";
import { Cards_container } from "../card/Card.styles";
import { All_button } from "./sortbar.styles";

const Sortbar = () => {
  const [list, setList] = useState(data);
  const handleSort = (type) => {
    const draftList = [...list];
    switch (type) {
      case "Switch0":
        draftList.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Switch1":
        draftList.sort((a, b) => a.price - b.price);
        break;
      case "Switch2":
        draftList.sort((a, b) => b.price - a.price);
        break;
    }
    setList(draftList);
  };

  return (
    <Sortbar_cont>
      <Sort_cont>
        <All_button as="a" href="/">
          All
        </All_button>
        <Dropdown>
          <Dropbtn_content>
            <Sort onClick={() => handleSort("Switch0")}>Name</Sort>
            <Sort onClick={() => handleSort("Switch1")}>
              Price: Low to High
            </Sort>
            <Sort onClick={() => handleSort("Switch2")}>
              Price: High to Low
            </Sort>
          </Dropbtn_content>
          <Dropbtn>Sort by:</Dropbtn>
        </Dropdown>
      </Sort_cont>
      <Cards_container>
        {list.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </Cards_container>
    </Sortbar_cont>
  );
};

export default Sortbar;
