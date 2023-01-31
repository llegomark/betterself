import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Discover Wisdom & Comfort in the Word of God with BetterSelf - the cutting-edge virtual Bible. Get relevant verses from your preferred Bible with a click. Start exploring now!"
          />
          <meta property="og:site_name" content="Discover Wisdom and Comfort in the Word of God - Better Self" />
          <meta
            property="og:description"
            content="Discover Wisdom & Comfort in the Word of God with BetterSelf - the cutting-edge virtual Bible. Get relevant verses from your preferred Bible with a click. Start exploring now!"
          />
          <meta property="og:title" content="Discover Wisdom and Comfort in the Word of God - Better Self" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Discover Wisdom and Comfort in the Word of God - Better Self" />
          <meta
            name="twitter:description"
            content="Discover Wisdom & Comfort in the Word of God with BetterSelf - the cutting-edge virtual Bible. Get relevant verses from your preferred Bible with a click. Start exploring now!"
          />
          <meta
            property="og:image"
            content="https://bible.betterself.app/betterself-featured.png"
          />
          <meta
            name="twitter:image"
            content="https://bible.betterself.app/betterself-featured.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
