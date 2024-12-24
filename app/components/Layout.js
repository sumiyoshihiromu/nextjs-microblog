import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../utils.module.css";

export const siteTitle = "Next.js blog";

export default function Layout({ children }) {
  const name = "すみちゃん";
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        <Image
          src="/images/profile.png"
          alt="プロフィール画像"
          width={50}
          height={50}
          className={utilStyles.borderCircle}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
