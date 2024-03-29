import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
function App() {
  return (
    <Provider store={appStore}><Body/></Provider> // should only have body component in app as no changes has to be made
  );
}


export default App;
