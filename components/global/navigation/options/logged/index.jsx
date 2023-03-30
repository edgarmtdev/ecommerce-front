import { dropdownContext } from "context/dropdown";
import Link from "next/link";
import React from "react";
import { HiUser, HiOutlineShoppingCart, HiChevronDown } from "react-icons/hi";
import { OptionsContainer } from "../no-logged/styled";
import DropdownUser from "./dropdown";

const LoggedOptions = React.forwardRef(({ userName }, ref) => {
  const { view, handleViewDropdown } = React.useContext(dropdownContext);

  return (
    <OptionsContainer>
      <Link href={"/cart"}>
        <span>
          <HiOutlineShoppingCart size={24} color={"#3E5067"} />
        </span>
      </Link>
      <span onClick={handleViewDropdown} className="flex items-center">
        <HiUser style={{ cursor: "pointer" }} size={24} color={"#3E5067"} />
        <HiChevronDown
          style={{ cursor: "pointer" }}
          size={18}
          color={"#3E5067"}
        />
      </span>
      {view && <DropdownUser userName={userName} />}
    </OptionsContainer>
  );
});

export default LoggedOptions;
