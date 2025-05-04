import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./utils";

//redux middleware
//to extend redux with custom functionality.
//it will sit in betwee the action being dispatched and the reducer recieving that action

//middleware can:
//logging actions
//modify or delay the actions
//trigger some side effects (like api calls)

//built in middlewares
//redux-thunk - for async logic like api calls
//redux-logger- logs actions and state changes

function CustomButtons(props) {
    // console.log("CustomButtons", { props });
  
    return (
      <div>
        <button onClick={props?.increment}>Increment</button>
        <button onClick={props?.decrement}>Decrement</button>
      </div>
    );
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(CustomButtons);
  


  