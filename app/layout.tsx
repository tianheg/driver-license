import './globals.css'

export const metadata = {
  title: '考驾照',
  description: '中国交通知识',
  icons: {
    shortcut: '/favicon.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
