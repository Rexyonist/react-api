import React, { useEffect } from 'react';
import TrendGifs  from '../components/trendingGIF';
import { action } from '@storybook/addon-actions';
import { worker } from '../mocks/browser';

export default {
    title: 'Components/Trending',
    component: TrendGifs,
    decorators: [action('API Request'), action('API Response'), action('API Error')]
}

export const Default = () => { 
    
    // useEffect(() => {
    //     worker.start();
    //     return () => {
    //         worker.stop();
    //     }
    // }, []);
    
    return <TrendGifs/>
};