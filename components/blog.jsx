import { getSortedData } from "@/libs/posts";
import Link from "next/link";
export async function getStaticProps() {
  const allPostsData = getSortedData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function BlogsCompo() {
  const allPostsData = getSortedData();
  return (
    <section>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            {date}
          </li>
        ))}
      </ul>
    </section>
  );
}

