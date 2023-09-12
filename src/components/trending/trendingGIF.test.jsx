import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import TrendGifs from './trendingGIF';
import axios from 'axios';

jest.mock("axios");

const mockTrendData = {
    data: [
        { id: '1', images: { fixed_height: { url: 'https://example.com/1.gif' } }, title: 'GIF 1' },
        { id: '2', images: { fixed_height: { url: 'https://example.com/2.gif' } }, title: 'GIF 2' }
    ],
};
beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockTrendData });
})

afterEach(() => {
    // cleanup mock
    jest.clearAllMocks()
})

test('TrendGifs snapshot', async () => {

    const {asFragment} = render(<TrendGifs />);

    // tunggu req axios done
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'))

    expect(asFragment()).toMatchSnapshot();
});

describe('TrendGifs Component', () => {
    it('renders correctly', async () => {
        // given
        // const mockTrendData = {
        //     data: [
        //         { id: '1', images: { fixed_height: { url: 'https://example.com/1.gif' } }, title: 'GIF 1' },
        //         { id: '2', images: { fixed_height: { url: 'https://example.com/2.gif' } }, title: 'GIF 2' }
        //     ],
        // };
        // axios.get.mockResolvedValue({ data: mockTrendData });

        // when
        render(<TrendGifs />);

        // then
        // sebelum req axios done
        screen.getByText('Loading...')

        // tunggu req axios done
        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'))

        const gifs = screen.getAllByRole('img')
        gifs.forEach((gif, index) => {
            // expect(screen.getByAltText(mockTrendData.data[index].images.title)).toBeInTheDocument()
            expect(gif).toHaveAttribute('src', mockTrendData.data[index].images.fixed_height.url);
        })
        expect(gifs.length).toEqual(2)

    });
});
