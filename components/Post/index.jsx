import { useState, useEffect } from "react";

export default function Post({ singlePost }) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    let likedIds = localStorage.getItem("likedIds")
      ? JSON.parse(localStorage.getItem("likedIds"))
      : [];

    if (likedIds.includes(singlePost.id)) {
      setIsLiked(true);
    }
  }, []);

  const onLike = () => {
    let likedIds = localStorage.getItem("likedIds")
      ? JSON.parse(localStorage.getItem("likedIds"))
      : [];

    if (likedIds.includes(singlePost.id)) {
      likedIds = likedIds.filter((x) => x !== singlePost.id);
      setIsLiked(false);
    } else {
      likedIds.push(singlePost.id);
      setIsLiked(true);
    }
    localStorage.setItem("likedIds", JSON.stringify(likedIds));
  };

  return (
    <div className="bg-white border rounded-sm max-w-md my-4">
      <div className="flex px-4 py-3">
        <img className="h-8 w-8 rounded-full" src={singlePost.avatar} />
        <div className="ml-3 flex flex-col content-start">
          <span className="text-sm font-semibold antialiased block leading-tight">
            {singlePost.username}
          </span>
        </div>
      </div>
      <img src={singlePost.img} />
      <div className="flex items-center justify-between mx-4 mt-3 mb-2 cursor-pointer">
        <div className="flex gap-5">
          <svg
            fill="red"
            onClick={() => {
              onLike();
            }}
            className={`fill-current ${
              isLiked ? `text-red-600` : `text-black`
            }`}
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
          </svg>
        </div>
      </div>
      <div className="flex font-semibold text-sm mx-5 mt-2 mb-4">
        {singlePost.likes + (isLiked ? 1 : 0)} likes
      </div>
      <div className="flex flex-wrap caption text-sm mx-5 mt-2 mb-4 text-left">
        <b> {singlePost.username} </b>
        {singlePost.discription}
        <p className="text-sm font-medium text-blue-700 mr-2">
          {singlePost.tags}
        </p>
      </div>
    </div>
  );
}
