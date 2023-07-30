import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from "next-seo";
import Layout from '@/components/Layout';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
              title={undefined}
              titleTemplate="%s | AS Creative"
              defaultTitle="AS Creative | Digital Marketing and Design Services"
              description="We provide individualised and customised services to you; whether it is providing social media management, social media coaching, photography, or graphic design"
              canonical="https://alyssacreative.co.uk"
              twitter={{
                handle: "@ascreative",
                site: "@ascreative",
                cardType: "summary_large_image",
              }}
              openGraph={{
                type: "website",
                locale: "en_CA",
                url: "https://alyssacreative.co.uk",
                title: "AS Creative | Digital Marketing and Design Services",
                description: "We provide individualised and customised services to you; whether it is providing social media management, social media coaching, photography, or graphic design",
                images: [
                  {
                    url: "https://alyssacreative.co.uk/images/og.png",
                    width: 1200,
                    height: 630,
                    alt: "AS Creative | Digital Marketing and Design Services",
                    type: "image/png",
                  }
                ]
              }}
            />
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <Analytics />
    </>
  )
}
