import './globals.css'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Introduction from "@/components/Introduction"
import Banner from '@/components/Banner'
import Projects from '@/components/Projects'
import Script from 'next/script'

export const metadata = {
  title: 'Satria CV     ',
  description: 'My Personal CV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        <main>
          {children}
          <Introduction />
          <Banner />
          <Projects />
        </main>
        <Footer/>
        <Script src="index.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}
