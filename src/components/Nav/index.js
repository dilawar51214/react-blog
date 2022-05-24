import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Nav = () => {
  const [dropDown,setDropDown] = useState(false)
  const [categories,setCategories] = useState();
  // this function is used to fetch data from strapi using axios.
//axios is a library .it is use to get,post,update and delete the date from external source. 
// here we use axios to get all the categories of article from strapi.
// in .THEN we get respnse data . but if there is an error then the response fiels will empty and error shown in .CATCH .
 // {/* // .env are environment variables , .env file is use to store secret information in variable , and access these variable by process.env.REACT_APP_VARIABLE_NAME */}

  const getData =async() => {
  axios.get(`${process.env.REACT_APP_API_KEY}/api/categories`).then((res)=>{
    // store api response in the categories by usein serCategories() functon.
     setCategories(res.data.data)
   }).catch((error)=>{
     console.log("error message",error)
   })

 }
 console.log(categories)
useEffect(() => {
  getData()
}, [])
  return (
    <div className="flex justify-center bg-[#1E7200] w-full h-[100px]">
      <div className="w-[95%] px-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">LOGO</h1>
          </div>
            <div className="flex justify-between text-white text-[22px] w-[20%]">
                <div className="hover:border-white border-[1px] rounded-[8px] px-2 border-[#1E7200]">
                  <ul className="">
                  {/* This will take you to the home page where all the articles are visible */}
                    <li>
                      <Link to="/">Articles</Link>
                    </li>
                  </ul>
                </div>

                <div className="w-[200px] hover:border-white border-[1px] rounded-[8px] px-2 border-[#1E7200]">
                 
                  {/* This is article button , on click it shows dropdown .*/}
                 <div className="relative">
                   {/* here we use the logic to set dropsown as TRUE or FALSE .  */}
                   {/* if dropdown value is true and we click on the button it change the alue of dropdon to false , and if value is FALSE then its change the value to TRUE */}
                   {/* we change the value using setDropDown() function */}
                  <button onClick={()=>setDropDown(!dropDown)} className="">
                    Category
                  </button>
                  {/* this is the dropdown content  */}
                  <div className="absolute w-full bg-gray-100 mt-8">
                    {/* here we are using the ternary operator to check weather the dropdown value is TRUE or FALSE  */}
                    {/* if value is false then it shows nothing , if value is true then it show the dropdown  */}
                    {/* dropDown means TRUE , and !dropDown means FALSE */}
                    {/* && means if left side of && condition is true then goto the right side condition , else terminate  */}
                  {dropDown && categories?.length && categories.map((category, index) =>
                  <div key={index} className="mt-4 mb-2">
                    {/* here we are using Link to naviagate to next page  */}
                    {/* inside the Link we are showing all the categories . if user click on category it redirct us to that specific page */}
                  <Link to={`/category/${category.attributes.slug}`}>
                 <p onClick={()=>setDropDown(false)} className="hover:text-gray-700 text-xl text-black font-semibold">{category.attributes.name}</p>
                 </Link>
               </div>
                    
                )
                }
                     </div>
                  </div>    

                
                </div>
            </div>
          {/* );
        }} */}
      </div>
    </div>
  );
};

export default Nav;