import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-center bg-[#1E7200] w-full h-[100px]">
      <div className="w-[95%] px-5 flex justify-between items-center">
        {/* {({ data: { categories } }) => {
          return ( */}
          <div>
            <h1 className="text-3xl font-bold text-white">LOGO</h1>
          </div>
            <div className="flex justify-between text-white text-[22px] w-[20%]">
                <div className="hover:border-white border-[1px] rounded-[8px] px-2 border-[#1E7200]">
                  <ul className="">
                    <li>
                      <Link to="/">Articles</Link>
                    </li>
                  </ul>
                </div>

                <div className="hover:border-white border-[1px] rounded-[8px] px-2 border-[#1E7200]">
                  <ul className="">
                    
                          <Link
                            to={`/category`}
                          >
                            "Category"
                          </Link>
                      

                  </ul>
                </div>
            </div>
          {/* );
        }} */}
      </div>
    </div>
  );
};

export default Nav;