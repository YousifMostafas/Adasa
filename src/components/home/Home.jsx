import React from "react";
import Hero from "./Hero";
import Articles from "./Articles";
import posts from "../../data/posts.json";
import Category from "./Category";
import Latest from "./Latest";
import Subcribe from "./Subcribe";

export default function Home() {
  const postData = posts.posts;

  return (
    <>
      <Hero />
      <Articles posts={postData} limit={3} />
      <Category />
      <Latest post={postData} limit={6} />
      <Subcribe />
    </>
  );
}
