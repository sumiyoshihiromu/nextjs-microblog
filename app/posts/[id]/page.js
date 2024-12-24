import { getAllPostIds, getPostData } from "@/lib/post";
import Layout from "../../components/Layout";
import utilStyles from "../../utils.module.css";

export default async function Post({ params }) {
  const postData = await getPostData(params.id);
  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
        <br />
      </article>
    </Layout>
  );
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}
