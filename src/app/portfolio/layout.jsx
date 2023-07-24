import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="px-10 flex flex-col lg:items-start items-center">
      <h1 className="lg:mt-12 mt-8 lg:text-6xl text-4xl font-bold">
        Our Works
      </h1>
      {children}
    </div>
  );
};

export default Layout;
