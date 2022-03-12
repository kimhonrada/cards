import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { shallow } from "enzyme";
import Card from "../Components/Card.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("<Card />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  it("renders an h2 tag with 'Basic Card' title", () => {
    expect(wrapper.find("h2").text()).toContain("Basic Card");
  });

  it("renders a div with card id", () => {
    expect(wrapper.exists("#card")).toBe(true);
  });

  it("renders a header with 'Word of the day'", () => {
    expect(wrapper.find("header").text()).toContain("Word of the day");
  });

  it("renders the word of the day as an h4 tag with id of word", () => {
    expect(wrapper.exists("h4#word")).toBe(true);
  });

  it("renders a h6 tag with an id of 'word-type'", () => {
    expect(wrapper.exists("h6#word-type")).toBe(true);
  });

  it("renders a p tag with an id of 'meaning'", () => {
    expect(wrapper.exists("p#meaning")).toBe(true);
  });

  it("renders a button tag with an id of 'button'", () => {
    expect(wrapper.exists("button")).toBe(true);
  });
});
