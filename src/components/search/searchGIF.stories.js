import React from 'react';
import { rest } from 'msw';
import SearchGifs  from './searchGIF';
import { search } from '../mocks/searchResponse';

export default {
    title: 'Components/Search',
    component : SearchGifs,
};

export const Default = () => <SearchGifs/>;
Default.parameters = {
    msw: {
        handlers: [
            rest.get('https://api.giphy.com/v1/gifs/search', (req, res, ctx) => {
                return res(ctx.json(search));
            })
        ]
    }
}