import { Inter } from 'next/font/google';
import '@/utils/styles/globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Provider from '@/components/context/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Event aja',
  description:
    'Event aja adalah website untuk menghubungkan ketiga belah pihak Event, Diantaranya Pemilik Event, Penyedian jasa dan terakhir Sponsor. Dengan even aja diharapkan ketiga belah pihak lebih mudah terhubung',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className + ' h-[100vh]'}>
        <Provider>
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
}
