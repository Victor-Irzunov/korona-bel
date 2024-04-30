import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Мотоблоки, Снегоуборщики, Генераторы по низким ценам',
  description: 'Первый поставщик мотоблоков, снегоуборщиков и генераторов Korona в Беларуси. Цены от производителя. Гарантия. Звоните прямо сейчас!',
  alternates: {
    canonical: 'https://koronatools.by/'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#fff" />
        {/* <link rel="shortcut icon" href="/favicon/favicon.ico" /> */}
        <meta name="google-site-verification" content="drBFWdRgRdIX-21trDJ1pyNLLwQsThL9_NPGMWF4Uvo" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(96217033, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
          }}
        />
        <noscript><div><img src="https://mc.yandex.ru/watch/96217033" style={{ position: 'absolute', left: '-9999px'}} alt="" /></div></noscript>

      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
