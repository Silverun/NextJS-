import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import Head from "next/head";

import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Tony's Blog</title>
        <meta name="description" content="Tony's dev blog" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
