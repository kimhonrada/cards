import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { shallow } from "enzyme";
import OutlinedCard from "../Components/OutlinedCard.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("<OutlinedCard />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<OutlinedCard />);
  });

  it("renders a div with card id", () => {
    expect(wrapper.exists("#outlined-card")).toBe(true);
  });

  it("renders a header with 'Word of the day'", () => {
    expect(wrapper.find("header").text()).toContain("Word of the day");
  });

  it("renders the word of the day as an h4 tag with id of 'outlined-word'", () => {
    expect(wrapper.exists("h4#outlined-word")).toBe(true);
  });

  it("renders a h6 tag with an id of 'outlined-word-type'", () => {
    expect(wrapper.exists("h6#outlined-word-type")).toBe(true);
  });

  it("renders a p tag with an id of 'outlined-meaning'", () => {
    expect(wrapper.exists("p#outlined-meaning")).toBe(true);
  });

  it("renders a button tag with an id of 'outlined-button'", () => {
    expect(wrapper.exists("button")).toBe(true);
  });
});
