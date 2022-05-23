import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Card = (props) => {
    var article = props.article;
    // console.log(article.attributes.cover.data.attributes.url,"url image")
//   const imageUrl =
//     process.env.NODE_ENV !== "development"
//       ? article.attributes.image.data.attributes.url
//       : process.env.REACT_APP_BACKEND_URL +
//         article.attributes.image.data.attributes.url;
  return (
    
      <div className="flex flex-col w-full w-[26%] py-5">
        <div className="">
          <img src={article.attributes.cover.data.attributes.url} alt="Blog" height="100" />
        </div>
        <div className="flex w-full justify-between p-3">
          <p className="text-[14px]">Update :<span className="text-[14px] ml-2"><Moment format="MMM Do YYYY">
            {article.attributes.updatedAt}
          </Moment></span></p>
          <Moment format="MMM Do YYYY" className="text-[14px]">
            {article.attributes.publishedAt}
          </Moment>
        </div>
        <div className="flex flex-col w-full px-3 ">
          <p id="category" className="flex justify-start font-bold text-[24px]">
            {article.attributes.title}
          </p>
          <p id="title" className="flex justify-start text-left">
            {article.attributes.description}
          </p>
        </div>
        <Link to={`/article`} className="">
        <div className="flex justify-end py-2">
          <p className="font-bold flex">Read full <span className="ml-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16666 10H15.8333" stroke="#313131" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5 13.3333L15.8333 10" stroke="#313131" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5 6.66666L15.8333 9.99999" stroke="#313131" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          </span></p>
        </div>
        </Link>
      </div>
    
  );
};

export default Card;