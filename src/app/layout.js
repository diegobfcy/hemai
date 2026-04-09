import './globals.css'

export const metadata = {
  title: 'HemAI — Portable AI Diagnostics for Rural Healthcare',
  description:
    'HemAI combines a low-cost optical device with deep learning to turn smartphones into portable microscopes — delivering fast blood disease diagnosis in rural LATAM communities.',
  keywords: 'rural diagnostics, AI healthcare, portable microscope, malaria detection, anemia, LATAM health, HemAI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}