import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/fonts/PPNeueMontreal-Medium.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PPNeueMontreal-Bold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="keywords" content="AS Creative,Creative Agency Buckinghamshire,Social Media Management Buckinghamshire,Social Media Management High Wycombe,Digital Marketing,Design Services,Customised Marketing Solutions,Individualised Marketing,Social Media Management,Social Media Coaching,Social Media Expertise,Professional Photography,Graphic Design,Branding Services,Personalised Marketing,Digital Design,Online Marketing,Business Branding,Content Creation,Visual Design,Social Media Strategy,Digital Media,Business Growth Solutions,Marketing Consultancy,Visual Branding,Online Presence,Social Media Training,Creative Solutions,Custom Graphics,Marketing and Design Expertise,Digital Advertising,Graphic Design Services,Photography Services,Content Strategy,Multimedia Design,Digital Strategy,Web Design,Logo Design,Social Media Optimization,Online Branding,Marketing Best Practices,Business Design Solutions,Tailored Marketing" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
