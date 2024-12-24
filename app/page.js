import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Layout from "./components/Layout";
import utilStyles from "./utils.module.css";
import { getPostsData } from "@/lib/post";
import { log } from "console";

export default async function Home() {
  const allPostsData = await getPostsData();
  return (
    <>
      <Layout>
        <section className={utilStyles.headingMd}>
          <p>我々は宇宙人だ</p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>📝エンジニアブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <Image
                    src={`${thumbnail}`}
                    alt="サムネイル01"
                    width={50}
                    height={50}
                    className={styles.thumbnailImage}
                  ></Image>
                </Link>
                <Link href={`/posts/${id}`} className={utilStyles.boldText}>
                  {title}
                </Link>
                <br />
                <small className={utilStyles.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
