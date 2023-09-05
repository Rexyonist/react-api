import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import SearchGifs from './searchGIF';

// const axios = require("axios");
// const mock = new MockAdapter(axios);

test('SearchGifs snapshot', () => {
    const {asFragment} = render(<SearchGifs />);
    expect(asFragment()).toMatchSnapshot();
});

// describe('SearchGifs Component', () => {
//     it('renders correctly', () => {
//         render(<SearchGifs />);
//         const searchInput = screen.getByPlaceholderText('Search for gifs...');
//         expect(searchInput).toBeInTheDocument();
//     });

//     it('displays trending GIFs initially', async () => {
//         const mockTrendingData = {
//         data: [
//             { id: '1', images: { fixed_height: { url: 'https://example.com/1.gif' } }, title: 'GIF 1' },
//             { id: '2', images: { fixed_height: { url: 'https://example.com/2.gif' } }, title: 'GIF 2' },
//         ],
//         };
//         mock.onGet('https://api.giphy.com/v1/gifs/trending').reply(200, mockTrendingData);

//         render(<SearchGifs />);

//         await waitFor(() => {
//         expect(screen.getByText('Trending GIFs')).toBeInTheDocument();
//         });

//         await waitFor(() => {
//             expect(screen.getAllByAltText('GIF')).toHaveLength(2);
//         })
//     });

//     it('displays search results when a search is performed', async () => {
//         const mockSearchData = {
//         data: [
//             { id: '3', images: { fixed_height: { url: 'https://example.com/3.gif' } }, title: 'GIF 3' },
//         ],
//         };
//         mock.onGet('https://api.giphy.com/v1/gifs/search').reply(200, mockSearchData);

//         render(<SearchGifs />);
//         const searchInput = screen.getByPlaceholderText('Search for gifs...');
//         fireEvent.change(searchInput, { target: { value: 'pokemon' } });
//         fireEvent.click(screen.getByText('Search'));

//         await waitFor(() => {
//             expect(screen.getByText('GIF 3')).toBeInTheDocument();
//         });
//     });
// });
