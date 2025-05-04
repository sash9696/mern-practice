import { decrement, increment } from "./actions";


export const mapStateToProps = (state) => ({
    count: state.count,
  });


export const mapDispatchToProps = {
  increment,
  decrement,
};

