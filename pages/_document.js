import Document, { Html, Head, Main, NextScript } from 'next/document'

const title = "Iris Research | Quantitative Crypto Trading Bots";
const description = "Iris Reaserch provides Market making and quantitative arbitrage trading bots for cryptocurrency..";
const imageUrl = "/images/image.jpg";
const url = "https://irisresearchtech.com/";
const name = "Iris Research";


class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title itemProp="name">{title}</title>
                    <meta itemProp="description"
                          content={description}/>
                    <meta name="description"
                          content={description}/>
                    <meta property="og:title" content={title}/>
                    <meta property="og:type" content="product" />
                    <meta property="og:image" content={imageUrl} />
                    <meta property="og:url" content={url} />
                    <meta property="og:site_name" content={name} />
                    <meta property="og:description" content={description} />
                    <meta name="twitter:url" content={url} />
                    <meta name="twitter:title" content={title}/>
                    <meta name="twitter:description" content={description}/>
                    <meta name="twitter:image" content={imageUrl} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <script dangerouslySetInnerHTML={{
                    __html: `
                      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','G-DTR66GK404');
               
    `
                }}/>
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=G-DTR66GK404"
                            height="0" width="0" style={{"display":"none","visibility":"hidden"}}></iframe>
                </noscript>


                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument