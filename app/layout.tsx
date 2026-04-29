import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: 'SOFOM | Soluciones Financieras Empresariales',
  description: 'Sociedad Financiera de Objeto Múltiple especializada en créditos empresariales, personales y soluciones financieras a la medida. León, Guanajuato.',
  keywords: ['SOFOM', 'créditos', 'financiamiento', 'préstamos', 'León', 'Guanajuato', 'México', 'empresarial', 'personal'],
  authors: [{ name: 'SOFOM' }],
  openGraph: {
    title: 'SOFOM | Soluciones Financieras Empresariales',
    description: 'Tu socio financiero de confianza en León, Guanajuato. Créditos empresariales y personales con las mejores condiciones.',
    type: 'website',
    locale: 'es_MX',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#03588C',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
