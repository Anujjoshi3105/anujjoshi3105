"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { FaCertificate, FaCode } from "react-icons/fa6";
import { getTotalProjects } from "@/action/project";
import Perk from "@/components/Perk";
import { Skeleton } from "@/components/ui/skeleton";
import { perkData } from "@/data/data";
import { containerVariants } from "@/utils/animate";

export default function PerkSection() {
  const [ratings, setRatings] = useState<{ [key: string]: any }>({});
  const [totalProjects, setTotalProjects] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const fetchData = useMemo(() => {
    return async () => {
      setLoading(true);

      const ratingPromises = perkData.map((perk) =>
        fetch(
          `${process.env.NEXT_PUBLIC_CONTEST_API}/${perk.platform}?username=${perk.username}`
        )
          .then((res) => res.json())
          .catch(() => null)
      );

      const [leetcode, codeforces, codechef, gfg, projects] = await Promise.all(
        [...ratingPromises, getTotalProjects()]
      );

      setRatings({ leetcode, codeforces, codechef, gfg });
      setTotalProjects(projects as number);
      setLoading(false);
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const experienceYears = useMemo(() => new Date().getFullYear() - 2022, []);

  const renderPerkItems = useMemo(() => {
    return perkData.map(({ platform, icon, link }) =>
      loading ? (
        <Skeleton key={platform} className="h-24 w-full m-2" />
      ) : (
        <Perk
          key={platform}
          link={link}
          value={ratings[platform.toLowerCase()]?.rating ?? "NA"}
          title={platform}
          subtitle={ratings[platform.toLowerCase()]?.level}
          icon={icon}
        />
      )
    );
  }, [loading, ratings]);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2">
        {loading ? (
          <>
            <Skeleton className="h-24 w-full m-2" />
            <Skeleton className="h-24 w-full m-2" />
          </>
        ) : (
          <>
            <Perk
              value={totalProjects}
              title="Projects Completed"
              icon={FaCode}
            />
            <Perk
              value={experienceYears}
              title="Years Experience"
              icon={FaCertificate}
            />
          </>
        )}
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid sm:grid-cols-2 lg:grid-cols-4">
        {renderPerkItems}
      </motion.div>
    </>
  );
}
