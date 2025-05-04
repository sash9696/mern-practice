import { connect } from "react-redux";
import { mapStateToProps } from "./utils";
import CustomButtons from "./CustomButtons";



function Counter(props) {
//   console.log("Counterprops", { props });
  return (
    <div>
      <h1>Counter: {props?.count} </h1>
      <CustomButtons/>
    </div>
  );
}

export default connect(mapStateToProps)(Counter);
