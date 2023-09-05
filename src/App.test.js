import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import MockAdapter from "axios-mock-adapter";
import { waitFor } from "@testing-library/react";

const axios = require("axios");
const mock = new MockAdapter(axios);

describe('App Component', () => {
    // beforeEach(() => {
    //     mock.reset();
    // })

    it('renders correctly', () => {
        const {container} = render(<App/>);
        expect(container).toMatchSnapshot();
    });

    it('switches to TrendGIF component when "Trending" button is clicked', async () => {
        render(<App />);       
        const trendButton = screen.getByText('Trending');
        fireEvent.click(trendButton);

        await waitFor(() => {
            const trendComponent = screen.queryByTestId('Trend-GIF');
            expect(trendComponent).toBeInTheDocument();
        });

        const searchComponent = screen.queryByTestId('Search-GIF');
        expect(searchComponent).toBeNull();
    });

    it('switches to SearchGIF component when "Search" button is clicked', async () => {
        render(<App />);

        const searchButton = screen.getByText('Search');
        fireEvent.click(searchButton);

        // await waitFor(() => {
        //     const searchComponent = screen.queryByTestId('Search-GIF');
        //     expect(searchComponent).toBeInTheDocument();
        // });

        await screen.findByTestId("Search-GIF");
    
        const trendComponent = screen.queryByTestId('Trend-GIF');
        expect(trendComponent).not.toBeNull();
    });

    it('makes an Axios call when "Search" button is clicked', async () => {
        const mockSearchData = {
            data: [
                { id: '3', images: { fixed_height: { url: 'https://example.com/3.gif' } }, title: 'GIF 3' }
            ],
        };

        mock.onGet('https://api.giphy.com/v1/gifs/search').reply(200, -mockSearchData);

        render(<App />);
        const searchButton = screen.getByText('Search');
        fireEvent.click(searchButton);

        await screen.findByText('GIF 3');

        expect(mock.history.get.length).toBe(1);
        expect(mock.history.get[0].url).toBe('https://api.giphy.com/v1/gifs/search?api_key=API_KEY&q=test');
    })
});