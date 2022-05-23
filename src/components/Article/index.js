import React from "react";
// import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import imageUrl3 from "../../Assets/article.png"



const Article = () => {
//   let { slug } = useParams();
const article =[{attributes:{slug:"slug",description:'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',image:{url:imageUrl3},title:"My Title",published_at:"4/4/2022",author:"william"}}]

//   return (
    // <div>
    //   {({ data: { articles } }) => {
    //     if (articles.data.length) {
    //       const imageUrl =
    //         process.env.NODE_ENV !== "development"
    //           ? articles.data[0].attributes.image.data.attributes.url
    //           : process.env.REACT_APP_BACKEND_URL +
    //             articles.data[0].attributes.image.data.attributes.url;

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
              <img src={article.attributes.image.url} alt="Blog" height="100" />
            </div>
            <div className="flex w-full justify-between p-3">
              <p >By<span className="font-semibold ml-2">{article.attributes.author}</span></p>
             <div>
             <span className="mr-2">published :</span>
              <Moment format="MMM Do YYYY" className="font-semibold">
                {article.attributes.published_at}
              </Moment>
             </div>
            </div>
            <div className="flex flex-col w-full px-3 ">
              <p id="category" className="flex justify-start font-bold text-[24px]">
                {article.attributes.title}
              </p>
              <p id="title" className="flex justify-start text-left">
                {article.attributes.description}
              </p>
            </div>
          </div>
           </div>
          );
        // }
    //   }}
    // </div>
//   );
};

export default Article;