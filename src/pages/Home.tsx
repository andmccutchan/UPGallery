import HomePostCard from "@/components/HomePostCard";
import SubmissionForm from "@/components/SubmissionForm";
import { supabase } from "@/supabase-client";
import { useEffect, useState } from "react";

// const cardInfo = [
//   {
//     title: "GNOME rice",
//     description: "A cozy purple-themed GNOME rice",
//     images: [
//       "src/assets/rice1-1.png",
//       "src/assets/rice1-2.png",
//       "src/assets/rice1-3.png",
//     ],
//     profilePhoto: "src/assets/test-pfp.jpg",
//     userName: "user-1",
//   },
//   {
//     title: "Hyprland rice",
//     description: "A fall-vibes Hyprland rice",
//     images: [
//       "src/assets/rice2-1.png",
//       "src/assets/rice2-2.png",
//       "src/assets/rice2-3.png",
//     ],
//     profilePhoto: "src/assets/test-pfp.jpg",
//     userName: "user-2",
//   },
//   {
//     title: "GNOME rice",
//     description: "A cozy purple-themed GNOME rice",
//     images: [
//       "src/assets/rice1-1.png",
//       "src/assets/rice1-2.png",
//       "src/assets/rice1-3.png",
//     ],
//     profilePhoto: "src/assets/test-pfp.jpg",
//     userName: "user-1",
//   },
// ];

const Home = () => {
  type RicePost = {
    distro: string;
    description: string;
    imageUrl: string[];
  };
  const [posts, setPosts] = useState<RicePost[]>([]);

  useEffect(() => {
    const fetchRices = async () => {
      const { data, error } = await supabase.from("rice-info").select("*");

      if (error) {
        console.error(error);
      } else {
        setPosts(data);
      }
    };

    fetchRices();
  }, []);

  return (
    <div id="card-section" className="container grid grid-cols-3 gap-4 mx-auto">
      {posts.map((post, index) => (
        <HomePostCard
          key={index}
          distro={post.distro}
          description={post.description}
          images={post.imageUrl}
        />
      ))}
      <SubmissionForm />
    </div>
  );
};

export default Home;
