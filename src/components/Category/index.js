import React,{useState} from "react";
// import { useParams } from "react-router";
import Articles from "../../components/Articles";
// import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";

const Category = () => {
  // let { slug } = useParams();
  const [categories,setCategories] = useState({data:[{attributes:{data:'This is Category',slug:"slug",name:'Article'}}]})


  return (
    <div>
            <div>
              <div className="uk-section">
                <div className="uk-container uk-container-large">
                  <h1>{categories.data[0].attributes.name}</h1>
                  <Articles articles={categories.data[0].attributes.data} />
                </div>
              </div>
            </div>
    
    </div>
  );
};

export default Category;