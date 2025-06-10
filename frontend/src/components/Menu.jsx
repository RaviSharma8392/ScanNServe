import React, { useState, useEffect } from 'react'
import data from "../json files/data.json"


const Menu = () => {
  const [foodItems, setFoodItems] = useState([])
    const [foodCategories, setFoodCategories] = useState([])
    console.log(data)


  useEffect(() => {
    setFoodItems(data.Items)
        setFoodCategories(data.foodCategories)

  }, [])

const groupedItems = foodCategories.map(category => ({
  ...category,
  items: foodItems.filter(item => item.CategoryName === category.CategoryName)
}));  console.log(groupedItems)

  return (
    <div className='md:px-20 px-6'>
        <h1 className='flex justify-center my-3 text-2xl font-bold'>Our Menu</h1>
{/* this section for category */}
        <div>

        </div>

        <div className='grid   md:grid-cols-3'>{groupedItems.map((category)=>
        <div className=' md:p-6 gap-5  ' key={category.index}><div className='bg-black rounded-2xl mb-8 pb-5 '>
            <h1 className='justify-center p-8 flex font-bold '><span className='py-2 px-5 rounded-2xl bg-yellow-300'>{category.CategoryName}</span> </h1>
            <div>
               <div className="px-2 text-yellow-500">
  {category.items.slice(0, 10).map(item => (
    <div className=" flex  md:flex-row md:p-4 " key={item._id}>
      <div className="flex-1 items-center md:text-lg font-semibold">{item.name}</div>
      <div className="flex flex-wrap gap-2">
        {item.options.map((option, index) => (
          <div className="flex flex-col  p-2 " key={index}>
            {Object.entries(option).map(([key, value]) => (
              <p key={key} className="text-sm">
                {key}: {value}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

            </div>
        </div>
        </div>
    )
            }</div>
        
             
      </div>
  )
}

export default Menu
