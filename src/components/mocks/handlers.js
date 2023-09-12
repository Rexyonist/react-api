import { rest } from "msw"
import trendGIF from "../trending/trendingGIF"
import searchGIF from "../search/searchGIF"

export const handlers = [
    rest.get('/trending', (req, res, ctx) => {
        return res(ctx.json({
            id: '1', images: { fixed_height: { url: 'https://example.com/1.gif' } }
        }))
    }),

    rest.get('/search', (req, res, ctx) => {
        return res(ctx.json({
            id: '3', images: { fixed_height: { url: 'https://example.com/3.gif' } }
        }))
    })
]

    // trendGIF.parameters = {
    //     msw: {
    //         handlers: [
    //             rest.get('https://api.giphy.com/v1/gifs/trending?api_key=CQ4jUWnYsaX3DnV1r4ihtdbHVz74LUF4', (req, res, ctx) => {
    //                 return res(
    //                     ctx.status(200),
    //                     ctx.json({               
    //                         id: '1', images: { fixed_height: { url: 'https://example.com/1.gif' } }, title: 'GIF 1'               
    //                     })
    //                 )
    //             }),
    //             rest.get('https://api.giphy.com/v1/gifs/trending?api_key=CQ4jUWnYsaX3DnV1r4ihtdbHVz74LUF4', (req, res, ctx) => {
    //                 return res(
    //                     ctx.status(200),
    //                     ctx.json({               
    //                         id: '2', images: { fixed_height: { url: 'https://example.com/2.gif' } }, title: 'GIF 2'               
    //                     })
    //                 )
    //             })
    //         ]
    //     }
    // }
        
    // searchGIF.parameters = {
    //     msw: {
    //         handlers: [
    //             rest.get('https://api.giphy.com/v1/gifs/search?api_key=CQ4jUWnYsaX3DnV1r4ihtdbHVz74LUF4', (req, res, ctx) => {
    //                 return res(
    //                     ctx.json({
    //                         id: '3', images: { fixed_height: { url: 'https://example.com/3.gif' } }, title: 'GIF 3'
    //                     })
    //                 )
    //             })
    //         ]   
    //     }
    // }
// }