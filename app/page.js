import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Layout from "./components/Layout";
import utilStyles from "./utils.module.css";

export default function Home() {
  return (
    <>
      <Layout>
        <section className={utilStyles.headingMd}>
          <p>我々は宇宙人だ</p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>📝エンジニアブログ</h2>
          <div className={styles.grid}>
            <article>
              <Link href="/">
                <Image
                  src="/images/thumbnail01.jpg"
                  alt="サムネイル01"
                  width={50}
                  height={50}
                  className={styles.thumbnailImage}
                ></Image>
              </Link>
              <Link href="/" className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </Link>
              <br />
              <small className={utilStyles.lightText}>2024年12月</small>
            </article>
            <article>
              <Link href="/">
                <Image
                  src="/images/thumbnail02.jpg"
                  alt="サムネイル01"
                  width={50}
                  height={50}
                  className={styles.thumbnailImage}
                ></Image>
              </Link>
              <Link href="/" className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </Link>
              <br />
              <small className={utilStyles.lightText}>2024年12月</small>
            </article>
            <article>
              <Link href="/">
                <Image
                  src="/images/thumbnail03.jpeg"
                  alt="サムネイル01"
                  width={50}
                  height={50}
                  className={styles.thumbnailImage}
                ></Image>
              </Link>
              <Link href="/" className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </Link>
              <br />
              <small className={utilStyles.lightText}>2024年12月</small>
            </article>
            <article>
              <Link href="/">
                <Image
                  src="/images/thumbnail04.jpg"
                  alt="サムネイル01"
                  width={50}
                  height={50}
                  className={styles.thumbnailImage}
                ></Image>
              </Link>
              <Link href="/" className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </Link>
              <br />
              <small className={utilStyles.lightText}>2024年12月</small>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
}
