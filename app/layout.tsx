import '@/app/ui/global.css'
import {inter} from '@/app/ui/font' 
import Footer from './ui/Footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}antialiased`}>{children}<Footer/></body>
    </html>
  );
}
