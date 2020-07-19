import React from "react";
import Button from "./index";
import {shallow} from "enzyme";
import {findByTestAtrr, checkProps } from "../../../utils";


describe("Button Component", ()=>{

    describe("check prop types", ()=>{
        it("should have the right props", ()=>{
            const expectedProps = {
                buttonText: "button text test",
                emitEvent: ()=>{}

            }
        const propsError = checkProps(Button,expectedProps)
        })
    })

    describe("renders well", ()=>{
        let component;
        beforeEach(()=>{
           component = shallow(<Button/>)
        })
        it("renders the button", ()=>{
           const wrapper = findByTestAtrr(component, "button-test");
           expect(wrapper.length).toBe(1);
        })
    })
})