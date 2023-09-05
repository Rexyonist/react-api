import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import TrendGifs from './trendingGIF';

// const axios = require('axios');
// const mock = new MockAdapter(axios);

test('TrendGifs snapshot', () => {
    const {asFragment} = render(<TrendGifs />);
    expect(asFragment()).toMatchSnapshot();
});

// describe('TrendGifs Component', () => {
//     it('renders correctly', async () => {
//         const mockTrendingData = {
//         data: [
//             { id: '1', images: { fixed_height: { url: 'https://example.com/1.gif' } }, title: 'GIF 1' },
//             { id: '2', images: { fixed_height: { url: 'https://example.com/2.gif' } }, title: 'GIF 2' },
//         ],
//         };
//         mock.onGet('https://api.giphy.com/v1/gifs/trending').reply(200, mockTrendingData);

//         render(<TrendGifs />);

//         await waitFor(() => {
//         expect(screen.getByText('Trending GIFs')).toBeInTheDocument();
//         });

//         await waitFor(() => {
//             const gifs = screen.getAllByAltText('GIF');
//             expect(gifs).toHaveLength(2);
//         });
//     });
// });
