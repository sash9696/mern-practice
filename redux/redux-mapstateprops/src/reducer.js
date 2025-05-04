import { DECREMENT, INCREMENT } from "./actions";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, //state immutability
        count: state.count + 1,
      };
      case DECREMENT:
        return {
          ...state, //state immutability
          count: state.count - 1,
        };
    default:
      return state;
  }
};

//react
// shopping cart
// [
//     {},
//     {}
// ]

// cart page => add to cart , delete from cart

// total of the cart  =>

//performance optmization

//shallow comparison (reference checks) to detect changes in props and state

//data is immutable

//change the object it means creating a new obj
//react can easily compare the old ref with new ref to detech the change
//efficient re-rendering

//mutability
//react ahs to deep comparison are expensive

// state = [10,20,30]
// state[2] = 40

// state= [...state.slice(0,2), 40]

//predictability  and debug

//track changes over time (eg undo redo functionality)
//immutable data

//    [null, null, null,null, null, null, null, null, null,  ]

//move 0 [null, x, null,null, null, null, null, null, null,  ]
//move 1 [null, x, null,o, null, null, null, null, null,  ]
//move 2 [null, x, null,o, null, x, null, null, null,  ]

//mutable data

//move 0 [null, x, null,o, null, x, null, null, null,  ]
//move 1 [null, x, null,o, null, x, null, null, null,  ]
//move 2 [null, x, null,o, null, x, null, null, null,  ]

//shared state used my multiple components
//if u have accidentaly mutated the shared state(unexpected side effects)



