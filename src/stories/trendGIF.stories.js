import React, { useEffect } from 'react';
import TrendGifs  from '../components/trendingGIF';
import { mswDecorator } from "msw-storybook-addon"
import { worker } from "../mocks/browser"

export default {
    title: 'Components/Trending',
    component: TrendGifs,
    decorators: [mswDecorator]
}

export const Default = () => { 
    
    // worker.start();
    // useEffect(() => {
    //     worker.start();
    //     return () => {
    //         worker.stop();
    //     }
    // }, []);
    
    return <TrendGifs/>
};