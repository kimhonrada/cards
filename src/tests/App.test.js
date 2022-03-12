import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { mount } from "enzyme";
import App from "../App";
import Card from "../Components/Card.jsx";
import OutlinedCard from "../Components/OutlinedCard.jsx";
import ComplexCard from "../Components/ComplexCard.jsx";

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

  it("renders OutlineCard component", () => {
    expect(wrapper.exists(OutlinedCard)).toBe(true);
  });

  it("renders a ComplexCard component", () => {
    expect(wrapper.exists(ComplexCard)).toBe(true);
  });
});
