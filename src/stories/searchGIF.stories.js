import React, { useEffect } from 'react';
import SearchGifs  from '../components/searchGIF';
import { mswDecorator } from "msw-storybook-addon"
import { worker } from "../mocks/browser"

export default {
    title: 'Components/Search',
    component : SearchGifs,
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
    
    return <SearchGifs/>
};