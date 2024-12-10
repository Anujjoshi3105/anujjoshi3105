"use client";

import { motion } from "framer-motion";
import Perk from "@/components/Perk";
import { childVariants, containerVariants } from "@/utils/animate";
import { useEffect, useState, useMemo, useCallback } from "react";
import {
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
  SiLeetcode,
} from "react-icons/si";
import { Skeleton } from "@/components/ui/skeleton";

export default function Contest() {
  const [ratings, setRatings] = useState<Record<string, Rating | null>>({
    leetcode: null,
    codeforces: null,
    codechef: null,
    gfg: null,
  });

  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async (platform: string, username: string) => {
    try {
      const response = await fetch(
        `https://contestapi.onrender.com/api/ratings/${platform}?username=${username}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching data for ${platform}:`, error);
      return null;
    }
  }, []);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      const leetcodeData = await fetchData("leetcode", "anujjoshi3105");
      const codeforcesData = await fetchData("codeforces", "anujjoshi3105");
      const codechefData = await fetchData("codechef", "anujjoshi3105");
      const gfgData = await fetchData("gfg", "anujjoshi31");

      setRatings({
        leetcode: leetcodeData,
        codeforces: codeforcesData,
        codechef: codechefData,
        gfg: gfgData,
      });
      setLoading(false);
    };

    fetchAllData();
  }, [fetchData]);

  const memoizedPerkComponents = useMemo(() => {
    const perkData = [
      {
        platform: "Leetcode",
        icon: SiLeetcode,
        link: "https://leetcode.com/anujjoshi3105/",
      },
      {
        platform: "Codeforces",
        icon: SiCodeforces,
        link: "https://codeforces.com/profile/anujjoshi3105",
      },
      {
        platform: "Codechef",
        icon: SiCodechef,
        link: "https://www.codechef.com/users/anujjoshi3105",
      },
      {
        platform: "GFG",
        icon: SiGeeksforgeeks,
        link: "https://auth.geeksforgeeks.org/user/anujjoshi31",
      },
    ];

    return perkData.map(({ platform, icon, link }) => {
      const Rating = ratings[platform.toLowerCase()];

      return (
        <motion.div key={platform} variants={childVariants} className="w-full">
          {loading ? (
            <Skeleton className="h-24 m-1 space-y-4 rounded-md" />
          ) : (
            <>
              <Perk
                link={link}
                value={Rating?.rating ?? "NA"}
                title={platform}
                subtitle={Rating?.level}
                icon={icon}
              />
            </>
          )}
        </motion.div>
      );
    });
  }, [ratings, loading]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="grid sm:grid-cols-2 lg:grid-cols-4"
      variants={containerVariants}>
      {memoizedPerkComponents}
    </motion.div>
  );
}
