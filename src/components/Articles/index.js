import React,{ useEffect, useState} from "react";
 import Card from "../Cards/index";

import axios from "axios";

const Articles = () => {
  const [articles,setArticles] = useState()
    // here we use axios to get all the categories data from strapi. 
    // populate[0] contain all the images and populate[1] contaiins all the categories.
//axios is a library .it is use to get,post,update and delete the date from external source. 
// here we use axios to get all articles data from strapi.
// in .THEN we get respnse data . but if there is an error then the response fiels will empty and error shown in .CATCH .
//  {/* // .env are environment variables , .env file is use to store secret information in variable , and access these variable by process.env.REACT_APP_VARIABLE_NAME */}


   const getData =async() => {
   axios.get(`${process.env.REACT_APP_API_KEY}/api/articles?populate[0]=cover&populate[1]=category`).then((res)=>{
      setArticles(res.data.data)
    }).catch((error)=>{
      console.log("error message",error)
    })
 
  }
    // this use effect runs first time when the component is rendered, and it fetches the data.

 useEffect(() => {
   getData()
 }, [])
  return (
      <div className="w-full flex flex-col items-center ">
        <div className="flex justify-start w-[95%] h-16 items-center">
          <div className="flex justify-between w-[70px]">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 12.2679C24.3333 13.0378 24.3333 14.9622 23 15.732L3.5 26.9904C2.16666 27.7602 0.499999 26.7979 0.499999 25.2583L0.5 2.74167C0.5 1.20207 2.16667 0.239817 3.5 1.00962L23 12.2679Z" fill="black"/>
        </svg>

          <p className="font-semibold text-[18px]">Blog</p>
          </div>
        </div>
        <div className="flex w-[90%]">
          <div className="flex justify-evenly flex-wrap w-full">
{/*we store axios response data in details , that is in array form . here we use map() function on that array to get all the value one by one */}
                        {articles && articles.map((article) => {
            return (
              <Card
                article={article}
                key={`article__${article.attributes.slug}`}
              />
            );
          })}
          </div>
        </div>
          </div>
    
  );
};

export default Articles;