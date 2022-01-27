import React from 'react'
import {render} from "react-dom";
import {FrontPage} from "../App";
import {MemoryRouter} from "react-router-dom";

describe("Frontpage", () => {

    it("should make all component to snapshot", () => {
        const element = document.createElement("div");
        render(<MemoryRouter><FrontPage /></MemoryRouter>, element)
        expect(element.innerHTML).toMatchSnapshot()

    })

    it("should show answer status", () => {
        const element = document.createElement("div");
        render(<MemoryRouter>
            <FrontPage correctAnswer={3} questionsAnswered={11} />
        </MemoryRouter>, element)
        expect(element.querySelector("[data-testid=status]").textContent)
    })


})