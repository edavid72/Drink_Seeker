import React, { useContext } from 'react';
import { ContextCategories } from '../context/ContextCategories';

const Form = () => {
  const { categories } = useContext(ContextCategories);

  console.log(categories);

  return (
    <form className="p-2">
      <h2 className="text-xl text-center capitalize p-2 mb-2 text-darkGrey tablet:text-4xl">
        Search drinks by ingredient or category
      </h2>

      <div className="flex flex-col laptop:flex-row text-darkGrey laptop:justify-between">
        <input
          type="text"
          name="ingredient"
          placeholder="Ingredient"
          className="text-xl text-center p-1 mb-1 bg-grey tablet:text-4xl laptop:w-5/12 laptop:mr-2 laptop:text-3xl"
        />

        <select
          name="category"
          className="text-xl text-center p-1 mb-1 bg-grey tablet:text-3xl laptop:w-5/12 laptop:mr-2 laptop:text-3xl"
        >
          <option value="">--Select Category--</option>
          {categories.map((category) => {
            return (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            );
          })}
        </select>

        <input
          type="submit"
          value="Search"
          className="cursor-pointer border-2 border-orange delay-75 hover:bg-white hover:text-orange text-xl text-center p-1 mb-1 bg-orange text-grey font-bold tablet:text-4xl laptop:w-2/12 laptop:text-3xl"
        />
      </div>
    </form>
  );
};

export default Form;
