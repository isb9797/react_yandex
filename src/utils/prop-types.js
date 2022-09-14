import PropTypes from "prop-types";

export const ingridientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageLarger: PropTypes.string.isRequired,
  imageMobile: PropTypes.string.isRequired,
});

export const IngredientDetailsPropTypes = PropTypes.shape({
  idElem: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  currency: PropTypes.number.isRequired,
  cardName: PropTypes.string.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  imageLarge: PropTypes.string.isRequired,
});
