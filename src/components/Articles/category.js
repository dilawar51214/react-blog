// Import react and use effect and use state to use in this file
import React,{ useEffect, useState} from "react";
// This is a blog card
 import Card from "../Cards/index";
 // this is to get the slug from the url

 import {
    useParams
  } from "react-router-dom";
// SAME AS ARTICLE/INDEX.JS
import axios from "axios";

const Articles = () => {
  // const articles = []
  let { slug } = useParams();
  console.log(process.env.REACT_APP_API_KEY)
  const [articles,setArticles] = useState()
// this function is used to fetch data from strapi using axios.
// populate is used to include related fields in the api response.
//axios is a library .it is use to get,post,update and delete the date from external source. 
// here we use axios to get single article data from strapi. for this we use filters in axios to get only selected data .
// in .THEN we get respnse data . but if there is an error then the response fiels will empty and error shown in .CATCH .
// in populate[0] we store all images . cover is the name of image in strapi , in populate we store all the categories. 
//  {/* // .env are environment variables , .env file is use to store secret information in variable , and access these variable by process.env.REACT_APP_VARIABLE_NAME */}

   const getData =async() => {
   axios.get(`${process.env.REACT_APP_API_KEY}/api/articles?populate[0]=cover&populate[1]=category&filters[category][slug][$eq]=${slug}`).then((res)=>{
    //  store the strapi api data into articles using setArticle() function
    setArticles(res.data.data)
    }).catch((error)=>{
      console.log("error message",error)
    })
 
  }
    // this use effect runs first time when the component is rendered, and it fetches the data.
    // slug is the dependency of useEffect . whenever the value of slug change , useEffect run and also run the getData() function.
    // we can add any dependency in useeffect depending on requirements . 
 useEffect(() => {
   getData()
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [slug])
 
  
  console.log(articles);
  return (
      <div className="w-full flex flex-col items-center ">
        <div className="flex justify-start w-[95%] h-16 items-center">
          <div className="flex justify-between w-[100px]">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 12.2679C24.3333 13.0378 24.3333 14.9622 23 15.732L3.5 26.9904C2.16666 27.7602 0.499999 26.7979 0.499999 25.2583L0.5 2.74167C0.5 1.20207 2.16667 0.239817 3.5 1.00962L23 12.2679Z" fill="black"/>
        </svg>

          <p className="font-semibold text-[18px]">{articles?.[0]?.attributes?.category?.data?.attributes?.name}</p>
          </div>
        </div>
        <div className="flex w-[90%]">
          <div className="flex justify-evenly flex-wrap w-full">
            {/*we store axios response data in articles , that is in array form . here we use map() function on that array to get all the value one by one */}
          {articles && articles.map((article) => {
            return (
         // here we use Card component and pass the article values one by one to that card .
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