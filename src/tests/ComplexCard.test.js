import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { shallow } from "enzyme";
import ComplexCard from "../Components/ComplexCard.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("<ComplexCard />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ComplexCard />);
  });

  it("renders an h2 tag with 'Complex Card' title", () => {
    expect(wrapper.find("h2").text()).toContain("Complex Card");
  });

  it("renders a div with 'complex-card' id", () => {
    expect(wrapper.exists("#complex-card")).toBe(true);
  });

  it("renders a header with 'Recipe Name'", () => {
    expect(wrapper.exists("header")).toBe(true);
  });

  it("renders an avatar for user", () => {
    expect(wrapper.exists("#avatar")).toBe(true);
  });

  it("renders a 'more' button with 'more' id", () => {
    expect(wrapper.exists("#more")).toBe(true);
  });

  it("render a date span with 'date' id", () => {
    expect(wrapper.exists("span#date")).toBe(true);
  });

  it("renders an image", () => {
    expect(wrapper.exists("img")).toBe(true);
  });

  it("renders a p tag of description, with 'description id", () => {
    expect(wrapper.exists("p#description")).toBe(true);
  });

  it("renders a like button, with 'like' id", () => {
    expect(wrapper.exists("button#like")).toBe(true);
  });

  it("renders a share button, with 'share' id", () => {
    expect(wrapper.exists("button#share")).toBe(true);
  });

  it("renders an expand button, with 'expand' id", () => {
    expect(wrapper.exists("button#expand")).toBe(true);
  });
});
