import Enzyme, { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-18";

configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;