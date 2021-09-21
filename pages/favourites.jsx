import Head from "next/head";
import { useState, useEffect } from "react";

import Navbar from "../components/Common/navbar";
import BottomNav from "../components/Common/bottomNav";
import Footer from "../components/Common/footer";
import Post from "../components/Post";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/post");
  const data = await res.json();
  return {
    props: { posts: data },
  };
};

export default function Favourites({ posts }) {
  const [likedPost, setLikedPost] = useState([]);

  useEffect(() => {
    let likedIds = localStorage.getItem("likedIds")
      ? JSON.parse(localStorage.getItem("likedIds"))
      : [];

    setLikedPost(posts.filter((post) => likedIds.includes(post.id)));
  }, []);

  return (
    <div className="min-h-screen pb-2 bg-gray-200">
      <Head>
        <title>Noon App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-2 text-center py-16">
        {likedPost.map((singlePost) => (
          <Post singlePost={singlePost} key={singlePost.id} />
        ))}
        {likedPost.length == 0 && (
          <div className="text-sm mx-5 mt-2 mb-4 text-left">
            No images liked
          </div>
        )}
      </main>
      <BottomNav />
      <Footer />
    </div>
  );
}
