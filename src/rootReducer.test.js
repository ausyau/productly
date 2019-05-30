import rootReducer from "./rootReducer";

let INITIAL_STATE;

beforeEach(() => {
  INITIAL_STATE = {
    cart: [
      { id: "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9",
        name: "microwave",
        price: 100.00,
        description: "Heat your food with the power of SCIENCE!",
        image_url: "https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"
      }
    ],
    products: {
      "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": {
        "name": "microwave",
        "price": 100.00,
        "description": "Heat your food with the power of SCIENCE!",
        "image_url": "https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"
      },
      "b04b779c-1cfb-48a7-8424-25a8c7e608ae": {
        "name": "toaster oven",
        "price": 20.49,
        "description": "Tasty bread not included.",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg"
      },
      "4260bf52-218a-480e-87ea-4ff42470ce98": {
        "name": "chair",
        "price": 100.89,
        "description": "It's a chair. You can sit in it.",
        "image_url": "https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG"
      }
    }
  };
});

it('does stuff', () => {
  const action = {
    type: "ADD_TO_CART",
    payload: { id: "b04b779c-1cfb-48a7-8424-25a8c7e608ae" }
  }
  expect(rootReducer(INITIAL_STATE, action).cart.length).toEqual(2);
  expect(rootReducer(INITIAL_STATE, action).cart[1].id).toEqual(action.payload.id);
});
