import './globals.css'

export const metadata = {
  title: 'Flappy Birb',
  description: 'Flap flap',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
