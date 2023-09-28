import "./CategoriesStyle.css";
const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Couple Art",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Single Person Art",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Kids Art",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Pencil Art",
    },
  ]

  return (
    <>
    <div className="categories">
    <div className='category'>

<div className="categoriesHeading">Categories</div> 
<div className="categoriesContainer">
{data.map((value, index) => {
  return (
    <div className='categoriesBox ' key={index}>
      <img src={value.cateImg} alt=''  className="CategoryImages"/>
      <span>{value.cateName}</span>
    </div>
  )
})}
</div>

</div>
    </div>
   
    </>
  )
}

export default Categories
