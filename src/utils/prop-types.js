import PropTypes from "prop-types";

export const ingridientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["bun", "main", "sauce"]),
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
});

export const IngredientDetailsPropTypes = PropTypes.shape({
  idElem: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["bun", "main", "sauce"]),
  src: PropTypes.string.isRequired,
  currency: PropTypes.number.isRequired,
  cardName: PropTypes.string.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  imageLarge: PropTypes.string.isRequired,
});

export const LinksPropTypes = PropTypes.shape({
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
});

export const BurgerIngridientsPropTypes = PropTypes.shape({
  data: PropTypes.object.isRequired,
});

export const ModalPropTypes = PropTypes.shape({
  requestClose: PropTypes.func.isRequired,
  disableOverlayClick: PropTypes.bool,
  isOpen: PropTypes.bool,
  children: PropTypes.object.isRequired,
});

export const ModalOverlayPropTypes = PropTypes.shape({
  handleCloseOverlay: PropTypes.func.isRequired,
});
