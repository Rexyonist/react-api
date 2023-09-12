import React from 'react';
import { rest } from 'msw';
import TrendGifs  from './trendingGIF';
import { trending } from '../mocks/trendingResponse';

export default {
    title: 'Components/Trending',
    component: TrendGifs,
};

export const Default = () => <TrendGifs/>;
Default.parameters = {
    msw: {
        handlers: [
            rest.get('https://api.giphy.com/v1/gifs/trending', (req, res, ctx) => {
                return res(ctx.json(trending))
            })
        ]
    }
}