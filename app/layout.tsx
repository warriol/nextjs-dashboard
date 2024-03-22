import { concert } from './ui/fonts';
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${concert.className} antialiased`}>
        {children}
        <footer>
          <p>esto es FOOTER del layout</p>
        </footer>
      </body>
    </html>
  );
}
