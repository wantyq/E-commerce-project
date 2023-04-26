import SearchBar from "./SearchBar"
import { render, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

describe("SearchBar component", () => {
    it("renders the search bar correctly", () =>{
        render(<SearchBar/>);
        const searchBar = screen.getByRole('textbox'); // input element
        const searchInput = screen.getAllByPlaceholderText("Search");
        expect(searchBar).toBeInTheDocument();
        expect(searchInput).toBeInTheDocument();
    })

    it("has the correct styling", () => {
        render(<SearchBar/>);
        const searchBar = screen.getByRole("textbox");

        expect(searchBar).toHaveStyle('padding: 10px 40px');
        expect(searchBar).toHaveStyle('border-radius: 4px');
    })
})