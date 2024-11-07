import { useState } from "react";
import { describe, expect } from "vitest";
import SearchBar from "./SearchBar";
import { fireEvent, render, screen } from "@testing-library/react";


const SearchBarWrapped = () => {
    const [query, setQuery] = useState("");
    const [stockChecked, setStockChecked] = useState(false);

    const [sort, setSort] = useState("asc")

    return (
        <SearchBar query={query} setQuery={setQuery} stockChecked={stockChecked} setStockChecked={setStockChecked} sort={sort} setSort={setSort}/>
    );
};
describe("SearchBar component",  () => {
    it("should render the component", async () => {
        render(<SearchBarWrapped />);
        
        const txt = await screen.findByTestId("search-text");
        const checkbox = await screen.findByTestId("search-checkbox");
        const select = await screen.findByTestId("search-select");

        expect(txt).toBeInTheDocument();
        expect(checkbox).toBeInTheDocument();
        expect(checkbox.nextSibling.textContent).toBe("Only show products in stock");
        expect(select).toBeInTheDocument();


    });
    it("should manipulate the inputs", async () => {
        render(<SearchBarWrapped />);
        
        const txt = await screen.findByTestId("search-text");
        const checkbox = await screen.findByTestId("search-checkbox");
        const select = await screen.findByTestId("search-select");

        fireEvent.change(txt, { target: {value: "Sample"}});
        expect(txt.value).toBe("Sample");

        fireEvent.click(checkbox);
        expect(checkbox.checked).toBeTruthy();

        fireEvent.click(checkbox);
        expect(checkbox.checked).toBeFalsy();

        fireEvent.change(select, { target: {value: "desc"}});
        expect(select.value).toBe("desc");
        
        fireEvent.change(select, { target: {value: "asc"}});
        expect(select.value).toBe("asc");
        
    });
})