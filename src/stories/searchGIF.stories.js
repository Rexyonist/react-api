import React, { useEffect } from 'react';
import SearchGifs  from '../components/searchGIF';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/Search',
    component : SearchGifs,
    decorators: [action('API Request'), action('API Response'), action('API Error')]
}

export const Default = () => <SearchGifs/>;

    // worker.start();
    // useEffect(() => {
    //     worker.start();
    //     return () => {
    //         worker.stop();
    //     }
    // }, []);
    
    // return <SearchGifs/>
// };