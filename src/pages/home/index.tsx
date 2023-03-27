import { Outlet } from "react-router-dom";
import { ImportantPosts } from "../../components/importantPosts";
import { RecentPosts } from "../../components/recentPosts";
import { Footer } from "../../layout/footer";

export function Home() {
  return (
    <>
      <div>
        <ImportantPosts />
        <RecentPosts />
      </div>
      <Footer />
    </>
  );
}
