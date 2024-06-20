import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import styles from './layout.module.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link className={styles.link} href="/" >
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/faq" >
                FAQ
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/testimonials" >
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
