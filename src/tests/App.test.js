import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { mount } from "enzyme";
import App from "../App";
import Card from "../Components/Card.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("renders App component", () => {
    expect(wrapper.find("h1").text()).toBe("Card Component made with React");
  });

  it("renders Card component", () => {
    expect(wrapper.exists(Card)).toBe(true);
  });
});
