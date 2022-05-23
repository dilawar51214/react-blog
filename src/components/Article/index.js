// Using axios to fetch data
import axios from "axios";
// Import react and use effect and use state to use in this file
import React, { useEffect, useState } from "react";
// import ReactMarkdown for rendering the blog content from Strapi
import ReactMarkdown from "react-markdown";
// import moment to beautify dates
import Moment from "react-moment";
// this is to get the slug from the url
import { useParams } from "react-router-dom";
// this is the image stored in our assets folder
import imageUrl3 from "../../Assets/article.png"



const Article = () => {
  let { slug } = useParams();
  // slug is taken from the url
const article ={attributes:{slug:"slug",description:'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',image:{url:imageUrl3},title:"My Title",published_at:"4/4/2022",author:"william"}}
const [details,setDetails] = useState();
// this function is used to fetch data from strapi using axios.
// populate is used to include related fields in the api response
   const getData =async() => {
   axios.get(`${process.env.REACT_APP_API_KEY}/api/articles?populate[0]=cover&populate[1]=category&populate[2]=author&populate[3]=blocks&filters[slug][$eq]=${slug}`).then((res)=>{
    if (res.data.data) {
      setDetails(res.data.data[0].attributes)
    }  
    }).catch((error)=>{
      console.log("error message",error)
    })
 
  }
  // this use effect runs first time when the component is rendered, and it fetches the data.
 useEffect(() => {
   getData()
 }, [])
console.log(details) 

          return (
           <div className="flex flex-col items-center w-full">
             <div className="flex justify-start w-[95%] h-16 items-center">
          <div className="flex justify-between w-[70px]">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 12.2679C24.3333 13.0378 24.3333 14.9622 23 15.732L3.5 26.9904C2.16666 27.7602 0.499999 26.7979 0.499999 25.2583L0.5 2.74167C0.5 1.20207 2.16667 0.239817 3.5 1.00962L23 12.2679Z" fill="black"/>
        </svg>

          <p className="font-semibold text-[18px]">T</p>
          </div>
        </div>
              <div className="flex flex-col w-full w-[50%] py-5">
            <div className="">
              <img src={details?.cover ? `${process.env.REACT_APP_API_KEY}${details.cover.data.attributes.url}` : article.attributes.image.url} alt="Blog" height="100" />
            </div>
            <div className="flex w-full justify-between p-3">
              <p >By<span className="font-semibold ml-2">{details?.author?.data?.attributes?.name}</span></p>
             <div>
             <span className="mr-2">published :</span>
              <Moment format="MMM Do YYYY" className="font-semibold">
                {details?.publishedAt}
              </Moment>
             </div>
            </div>
            <div className="flex flex-col w-full px-3 ">
              <p id="category" className="flex justify-start font-bold text-[24px]">
                {details?.title}
              </p>
              <div id="title" className="flex justify-start text-left" dangerouslySetInnerHTML={{ __html: details?.description ?? '' }}></div>
            </div>
            <ReactMarkdown source={details?.blocks?.[0].body ?? 'tttttttt'} >
            {details?.blocks?.[0].body}
              </ReactMarkdown>
          </div>
           </div>
          );
        // }
    //   }}
    // </div>
//   );
};

export default Article;