import React from "react";
import { Dropdown, Menu, Space } from "antd";

import { InputItems } from "./SearchBar.styled";
import { Button } from "../../pages/Generic/Button";
import { ReactComponent as SettingIcon } from "../../assets/svg/settings.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";

// const menu = (
//   <Menu
//     items={[
//       {
//         label: <a href="#">1st menu item</a>,
//         key: "0",
//       },
//       {
//         label: <a href="#">2nd menu item</a>,
//         key: "1",
//       },
//       {
//         type: "divider",
//       },
//       {
//         label: "3rd menu item",
//         key: "3",
//       },
//     ]}
//   />
// );

export const SearchBar = () => {
  return (
    <InputItems>
      <InputItems.Search>
        <span>
          <HomeIcon />
        </span>
        <input
          type="text"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
        />
      </InputItems.Search>
      {/* <Dropdown overlay={menu} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            
          </Space>
        </a>
      </Dropdown> */}
      <Button pt={12} pb={12} pl={16} pr={16} ml={20} type={"secondary"}>
        <span>
          <SettingIcon />
        </span>
        Advanced
      </Button>
      <Button pt={12} pb={12} pl={54} pr={54} ml={20} type={"primary"}>
        <span style={{ position: "relative", top: "0.20em" }}>
          <SearchIcon />
        </span>
        Advanced
      </Button>
    </InputItems>
  );
};

export default SearchBar;
