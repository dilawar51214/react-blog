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
// this is getting the swiper and swiperslide to show slider data
import { Swiper, SwiperSlide} from 'swiper/react';
// swiper css
import "swiper/css";
// swiper navigation , to navigate next and privious slide
import { Navigation } from "swiper";
// navigation css
import "swiper/css/navigation";



const Article = () => {
  let { slug } = useParams();
  // slug is taken from the url
const [details,setDetails] = useState();
// this function is used to fetch data from strapi using axios.
// populate is used to include related fields in the api response.
//axios is a library .it is use to get,post,update and delete the date from external source. 
// here we use axios to get single article data from strapi. for this we use filters in axios to get only selected data .
// in .THEN we get respnse data . but if there is an error then the response fiels will empty and error shown in .CATCH .
// in populate[0] we store all images . cover is the name of image in strapi , in populate[1] we store all the categories. 
// in populate[2] we store the name of article author , in populate[3] we store blocks, that are dynamic section ,
// in populate[4] we store blocks.file (all images), in populate[5] we store blocks.files(sliders images).
// at the end we use filter to get the selective data from strpi . 
 // {/* // .env are environment variables , .env file is use to store secret information in variable , and access these variable by process.env.REACT_APP_VARIABLE_NAME */}


   const getData =async() => {
   axios.get(`${process.env.REACT_APP_API_KEY}/api/articles?populate[0]=cover&populate[1]=category&populate[2]=author&populate[3]=blocks&populate[4]=blocks.file&populate[5]=blocks.files&filters[slug][$eq]=${slug}`).then((res)=>{
    if (res.data.data) {
      // store the strapi data into details ,
      // setDetails is function that is use to store data in details , 
      setDetails(res.data.data[0].attributes)
    }  
    }).catch((error)=>{
      console.log("error message",error)
    })
 
  }
  // this use effect runs first time when the component is rendered, and it fetches the data.
 useEffect(() => {
   getData()
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

 return (
           <div className="flex flex-col items-center w-full">
             <div className="flex justify-start w-[95%] h-16 items-center">
          <div className="flex justify-between w-[70px]">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 12.2679C24.3333 13.0378 24.3333 14.9622 23 15.732L3.5 26.9904C2.16666 27.7602 0.499999 26.7979 0.499999 25.2583L0.5 2.74167C0.5 1.20207 2.16667 0.239817 3.5 1.00962L23 12.2679Z" fill="black"/>
        </svg>

          <p className="font-semibold text-[18px]">Blog</p>
          </div>
        </div>
              <div className="flex flex-col w-full w-[50%] py-5">
            <div className="">
            {/* // .env are environment variables , .env file is use to store secret information in variable , and access these variable by process.env.REACT_APP_VARIABLE_NAME */}

              <img src={details?.cover ? `${process.env.REACT_APP_API_KEY}${details.cover.data.attributes.url}` : null} alt="Blog" height="100" />
            </div>
            <div className="flex w-full justify-between p-3">
              <p >By<span className="font-semibold ml-2">{details?.author?.data?.attributes?.name}</span></p>
             <div>
             <span className="mr-2">published :</span>
             {/* Moment is use to formate the date */}
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
                        {/*we store axios response data in details , that is in array form . here we use map() function on that array to get all the value one by one */}
                   {/* in the details data is in different fromate , data may be rich-text,image, slider,or quote etc  */}
            {details?.blocks.map((value,index)=>(
             <div key={index}>
               {/* to handle different type of data we use if condition , */}
               {/* here we use ternary operator to check which type of data we have received and then make the design according to data inside the if condition */}
               {/* value.__component contin that which type of data is , thats why we apply the check on value.__component */}
               {/* here we are checking that if data is rich-text then we make the design to show the data inside the ReactMarkdown */}
                              { value.__component === "shared.rich-text"?
                              // ReactMarkdown is use to style and show rich text
                               <ReactMarkdown>
                                {value.body}
                               </ReactMarkdown>
                               :
                              //  here again we are checking the data , if data is media(image) then show simple image and the url is comming from strapi api.
                               value.__component === "shared.media"?
                                // .env are environment variables , .env file is use to store secret information in variable , and access these variable by process.env.REACT_APP_VARIABLE_NAME
                                <img alt="media" src={process.env.REACT_APP_API_KEY+value.file.data.attributes.url} className="w-100 h-100"  />
                               :
                              //  here we are checking the data , if data is slider then make the design according to slider
                               value.__component === "shared.slider"?
                               <div className="relative my-3">
                                 {/* Swiper is react slider is use to make design and show slidr  */}
                                 {/* navigation is a button when we click on it . it show the next slide as well as privious slide */}
          <Swiper navigation={true} modules={[Navigation]}
          // space between 2 slides
            spaceBetween={15}
            // onclick move one slide next 
            slidesPerView={1}
            className="!pb-14 mySwiper"
          >
            {
              // useing array.map() to show all the slides.
             value?.files?.data ? value.files.data.map((step, index) => (
              //  swiperslide is use to show one slide.
               <SwiperSlide key={index}>
                 <img alt="slider" className="w-full h-[450px]" src={process.env.REACT_APP_API_KEY+step.attributes.url}/>
               </SwiperSlide>
             ))
               : null
}
          </Swiper>
        </div>:
        // checking if data is in quote form then make the design to show the data 
        value.__component === "shared.quote"?
         <div className="text-black flex flex-col my-3 w-full text-left border-2 border-gray-400 rounded-md p-3">
            <p className="">{value.body}</p>
            <h1 className="font-bold text-xl ">{value.title}</h1>
         </div>

         :null 
         }

             </div>
          ))}
           
          </div>
           </div>
          );
       
};

export default Article;