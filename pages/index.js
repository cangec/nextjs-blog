import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';


const Home = ({allPostsData}) => {

  console.log(allPostsData);

  return (<Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>Neki neki js js bla bla</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <Link href="/posts/first-post">our Next.js tutorial</Link>.)
      </p>
    </section>

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
        ))}
      </ul>
    </section>
  </Layout>)
}

export default Home;

export const getStaticProps = async() => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
