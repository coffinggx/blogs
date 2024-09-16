import { getAllPostIds, getPostData } from "../../../libs/posts";
import Head from "next/head";
import Date from "@/components/date";
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id);
  return (
    <section>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className=" text-bold">{postData.title}</h1>
        <div className="">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </section>
  );
}
