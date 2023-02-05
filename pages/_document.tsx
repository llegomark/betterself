import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Transform your life with the power of positive words through Betterself's Words of Affirmation website, powered by AI. Get personalized affirmations to boost confidence, strengthen relationships, and bring happiness and fulfillment. Choose from a range of categories and watch as AI creates a rich and thorough affirmation tailored to your needs. Start your self-improvement journey today."
          />
          <meta
            property="og:site_name"
            content="Discover Wisdom and Comfort in the Word of God - Better Self"
          />
          <meta
            property="og:description"
            content="Transform your life with the power of positive words through Betterself's Words of Affirmation website, powered by AI. Get personalized affirmations to boost confidence, strengthen relationships, and bring happiness and fulfillment. Choose from a range of categories and watch as AI creates a rich and thorough affirmation tailored to your needs. Start your self-improvement journey today."
          />
          <meta
            property="og:title"
            content="Discover Wisdom and Comfort in the Word of God - Better Self"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Discover Wisdom and Comfort in the Word of God - Better Self"
          />
          <meta
            name="twitter:description"
            content="Transform your life with the power of positive words through Betterself's Words of Affirmation website, powered by AI. Get personalized affirmations to boost confidence, strengthen relationships, and bring happiness and fulfillment. Choose from a range of categories and watch as AI creates a rich and thorough affirmation tailored to your needs. Start your self-improvement journey today."
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
