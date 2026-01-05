import React from "react";

const BurgerMenu = ({ toggle, setToggle }) => {
  return (
    <div
      onClick={() => setToggle((prev) => !prev)}
      className="space-y-2 md:hidden"
    >
      <div
        className={`h-1 w-8 rounded-sm ${
          toggle && "rotate-45 top-1"
        } bg-white duration-500 transition-all relative `}
      ></div>
      <div
        className={`h-1 w-8 ${toggle && "hidden"} rounded-sm bg-white`}
      ></div>
      <div
        className={`h-1 w-8 rounded-sm ${
          toggle && "-rotate-45 bottom-2"
        } bg-white duration-500 transition-all relative `}
      ></div>
    </div>
  );
};

export default BurgerMenu;
