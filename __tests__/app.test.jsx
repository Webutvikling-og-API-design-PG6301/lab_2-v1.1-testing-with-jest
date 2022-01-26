import React from 'react'
import {render} from "react-dom";
import {FrontPage} from "../App";

describe("Frontpage", () => {

    it("should be shown", () => {
        const element = document.createElement("div");
        render(<FrontPage />, element)
        expect(element.innerHTML).toMatchSnapshot()
    })
})