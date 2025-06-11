import './globals.css'
import './icons.css'
import './css/Loading.css'
import './css/App.css'
import './css/TwinkleStarsBG.css'
// import './css/radix.css'

import { ThemeProvider } from '@/globalComponents/services/Theme-Provider'
import { RobotoFont, Lobster } from './fonts/fonts'
import Tanstack from '@/features/NewData/components/Tanstack'

export const metadata = {
  title: 'Cosmo Collection',
  description: 'Enjoy Stunning Images from The Cosmos',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={` antialiased min-h-screen ${RobotoFont.variable} ${Lobster.variable}`}>
        <ThemeProvider attribute='class' defaultTheme={'dark'} disableTransitionOnChange={false}>
          <Tanstack>{children}</Tanstack>
        </ThemeProvider>
      </body>
    </html>
  )
}
