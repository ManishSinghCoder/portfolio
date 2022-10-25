import Head from "next/head";

export const MetaTags = () => {
  return (
    <Head>
      <title>Manish Portfolio</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <meta property="og:title" content="Manish singh Portfolio" />
      <meta
        name="description"
        content="I am a frontend developer."
      />
      <meta property="og:image" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Manish singh Portfolio" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      {/* <link rel="shortcut icon" href="/vsp_icon.svg" as="image" /> */}
    </Head>
  );
};
