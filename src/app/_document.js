// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
                <Script
                    src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
                    strategy="beforeInteractive"
                />
            </body>
        </Html>
    )
}