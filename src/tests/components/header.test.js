import React from "react";
import { shallow } from "enzyme"; // shallow renderer
//import toJson from "enzyme-to-json";
//import ReactShallowRenderer from "react-test-renderer/shallow";
import { Header } from "../../components/header";

test("should render header correctly", () => {
  const wrapper = shallow(<Header />);
  //expect(wrapper.find("h1").text()).toBe("Expensifie");
  expect(wrapper).toMatchSnapshot();
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  // console.log(renderer.getRenderOutput());
});

test("should call startLogout on button click", () => {
  const logOutSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={logOutSpy} />);
  wrapper.find("button").simulate("click");
  expect(logOutSpy).toHaveBeenCalled();
});
