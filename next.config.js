// const withSass = require('@zeit/next-sass');
// const { PHASE_DEVELOPMENT_SERVER,PHASE_PRODUCTION_SERVER } = require('next/constants');
const path = require('path');

module.exports = (phase, { defaultConfig }) => {

    const config = {
        distDir: 'build',
        // exportPathMap: function() {
        //     return {
        //         '/': { page: '/index' },
        //         '/faq': { page: '/index-faq' },
        //         '/about-us': { page: '/index-about-us' },
        //         '/contact-us': { page: '/index-contact-us' },
        //         '/pricing': { page: '/index-pricing' },
        //         '/privacy': { page: '/index-privacy' },
        //         '/terms': { page: '/index-terms' },
        //         '/login':{page: '/login'},
        //         '/reset-password':{page:'/reset-password'},
        //         '/verify-email':{page:'/verify-email'},
        //         '/create-account':{page:'/create-account'},
        //         '/admin':{page:'/admin'},
        //         '/admin/reviews':{page:'/AdminPages/reviews'},
        //         '/admin/userdetails':{page:'/AdminPages/userdetails'},
        //         '/admin/backup':{page:'/AdminPages/backup'},
        //         '/admin/deactiveusers':{page:'/AdminPages/deactiveusers'},
        //         '/admin/licenses':{page:'/AdminPages/licenses'},
        //         '/admin/reset-user':{page:'/AdminPages/reset-user'},
        //         '/admin/users-amplitude-id':{page:'/AdminPages/users-amplitude-id'},
        //
        //         '/notes':{page:'/notes'},
        //         '/notes/app':{page:'/notes/app'}
        //
        //     };
        // },
        webpack: (config, { dev }) => {
            config.resolve.alias = {
                ...config.resolve.alias,
                components: path.resolve(__dirname, 'components'),
                styles: path.resolve(__dirname, 'styles'),
                helpers:path.resolve(__dirname,'helpers'),
                static:path.resolve(__dirname,'static')

            };
            return config;
        }
    };



    let additionalConfig = {
        serverRuntimeConfig:null,
    };
    // if (phase === PHASE_DEVELOPMENT_SERVER) {
    //     additionalConfig = {
    //         publicRuntimeConfig: {
    //             base_url: "http://localhost:5000/ukiv-com-sticky-notes/us-central1"
    //         }
    //     };
    // }
    //
    // if (phase === PHASE_PRODUCTION_SERVER) {
    //     additionalConfig = {
    //         publicRuntimeConfig: {
    //             base_url: ""
    //         }
    //     };
    // }

    const fullConfig = Object.assign({},config,additionalConfig);
    return fullConfig;

    // return withSass(fullConfig);
};