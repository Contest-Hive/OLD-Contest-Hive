// Vercel Analytics
import { Analytics } from "@vercel/analytics/react";
import UnderMaintenance from "@/components/UnderUnderMaintenance";
import "@/app/globals.css";

const title = "Contest Hive";
const description =
  "Contests at Your Fingertips. All upcoming contests from 7 platforms in one place";
const keywords =
  "contest, contest hive, contest api, upcoming contest, codeforces api, toph api, kontests api, hackerearth api, hackerrank api, codechef api, atcoder api, leetcode api, nusab taha, nusab19, toph leaderboard";
const url = "https://contest-hive.vercel.app/";

export const metadata = {
  title: title,
  description: description,
  keywords: keywords,
  openGraph: {
    title: title,
    description: description,
    url: url,
  },
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-200">
        {/* Under Maintenance */}

        {/* <body className="bg-gray-950 text-gray-200">
        <UnderMaintenance />
      </body> */}

        {children}
      </body>
    </html>
  );
};

export default layout;
