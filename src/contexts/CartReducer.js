//In the reducer we define the logic for the functions that we need
const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

//variable that is shared in the whole app
export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  //Total amount
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  //Discount percentage (10% => 90, 20% => 80)
  const discountTenPercent = 10;
  const discountTwentyPercent = 20;

  return {
    itemCount,
    total,
    discountTenPercent,
    discountTwentyPercent,
  };
};

//Defining the logic on functions to cosume in the Context
export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.cartItems.filter((item) => item.id !== action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };
    case "INCREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "DECREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case "CLEAR":
      return {
        cartItems: [],
        ...sumItems([]),
      };

    default:
      return state;
  }
};
