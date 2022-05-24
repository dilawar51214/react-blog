import React from "react";
// This Link component is used to navigate to different pages
import { Link } from "react-router-dom";
// import moment to beautify dates
import Moment from "react-moment";

const Card = (props) => {
    var article = props.article;
    console.log(article);
  return (
    
      <div className="flex flex-col w-full w-[26%] py-5">
        <div className="">
          <img className="w-[500px] h-[250px]" src={process.env.REACT_APP_API_KEY+article.attributes.cover.data.attributes.url} alt="Blog" height="100" />
        </div>
        <div className="flex w-full justify-between p-3">
          <p className="text-[14px]">Update :<span className="text-[14px] ml-2"><Moment format="MMM Do YYYY">
            {article.attributes.updatedAt}
          </Moment></span></p>
          {/* moment is use to show the date and formate the date  */}
          <Moment format="MMM Do YYYY" className="text-[14px]">
            {article.attributes.publishedAt}
          </Moment>
        </div>
        <div className="flex flex-col w-full px-3 ">
          <p id="category" className="flex justify-start text-left font-bold text-[24px]">
            {article.attributes.title}
          </p>
          <p id="title" className="flex justify-start text-left">
            {article.attributes.description}
          </p>
        </div>
        
        <div className="flex justify-between p-3">
          {/* Link is use to redirect the user to next page . in TO = {} you have to pass the url of the next page .  */}
          {/* inside the Link we use a p tag . when someone click on the category it redirect the user to next page  */}
        <Link to={`/category/${article.attributes.category.data.attributes.slug}`}>
          <p>Category : <span className="font-semibold">{article.attributes.category.data.attributes.name}</span></p>
          </Link>
          <Link to={`/article/${article?.attributes?.slug}`}>
          <p className="font-bold flex">Read full <span className="ml-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16666 10H15.8333" stroke="#313131" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5 13.3333L15.8333 10" stroke="#313131" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5 6.66666L15.8333 9.99999" stroke="#313131" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          </span></p>
          </Link>
        </div>
      </div>
    
  );
};

export default Card;