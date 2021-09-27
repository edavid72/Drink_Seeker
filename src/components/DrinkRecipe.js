import React, { useContext, useState } from 'react';
import { ContextModalVist } from '../context/ContextModalVist';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const DrinkRecipe = ({ recipe }) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { setGetId, fullRecipe, setFullRecipe } = useContext(ContextModalVist);

  const showIngredients = (fullRecipe) => {
    let ingredients = [];

    for (let i = 1; i < 16; i++) {
      if (fullRecipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {fullRecipe[`strIngredient${i}`]} {fullRecipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="w-11/12 mx-auto p-4 bg-white mb-5 laptop:11/12 laptop:mx-auto">
      <h2 className="text-center text-2xl font-bold text-darkGrey py-2 tablet:text-4xl">
        {recipe.strDrink}
      </h2>

      <img src={recipe.strDrinkThumb} alt={` ${recipe.strDrink}`} />
      <div className="flex justify-center mt-3">
        <button
          type="button"
          className="text-2xl px-4 text-grey font-bold cursor-pointer border-2 border-darkGrey bg-orange tablet:text-4xl tablet:p-2 laptop:text-2xl laptop:p-1 laptop:hover:bg-white laptop:hover:text-orange w-full"
          onClick={() => {
            setGetId(recipe.idDrink);
            handleOpen();
          }}
        >
          See Recipe
        </button>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={() => {
            setGetId(null);
            handleClose();
            setFullRecipe({});
          }}
        >
          <div style={modalStyle} className={`${classes.paper}`}>
            <h2
              id="simple-modal-title"
              className="text-darkGrey font-bold text-xl text-center mb-2 tablet:text-4xl"
            >
              {fullRecipe.strDrink}
            </h2>
            <h3 className="text-xl text-darkGrey mb-2 tablet:text-4xl">
              Instructions
            </h3>
            <p
              id="simple-modal-description"
              className="text-md text-darkGrey mb-2 tablet:text-2  xl"
            >
              {fullRecipe.strInstructions}
            </p>
            <img
              src={fullRecipe.strDrinkThumb}
              className="border-2 border-darkGrey"
              alt={fullRecipe.strDrink}
            />

            <h3 className="text-darkGrey text-lg">
              Ingredients and Quantities
            </h3>
            <ul className="text-darkGrey">{showIngredients(fullRecipe)}</ul>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default DrinkRecipe;
