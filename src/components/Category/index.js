import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Articles from "../../components/Articles";

const Category = () => {
  // SAME AS ARTICLE

  const [categories,setCategories] = useState()

   const getData =async() => {
   axios.get(`${process.env.REACT_APP_API_KEY}/api/categories`).then((res)=>{
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
    <div>
            <div>
              <div className="uk-section">
                <div className="uk-container uk-container-large">
                  {
                    categories?.length && categories.map((category, index) => 
                      <div key={index} className="mt-5">
                           <Link to={`/category/${category.attributes.slug}`}>
                          <p className="text-xl font-bold">Category : <span className="font-semibold">{category.attributes.name}</span></p>
                          </Link>
                        </div>
                    )
                  }
                  {/* <h1>{categories.data[0].attributes.name}</h1> */}
                  {/* <Articles articles={categories.data[0].attributes.data} /> */}
                </div>
              </div>
            </div>
    
    </div>
  );
};

export default Category;