import { FaCertificate, FaCode } from "react-icons/fa6";
import { getPerkRatings } from "@/action/perk";
import { perkData } from "@/lib/data/data";
import Perk from "@/components/Perk";
import { containerVariants } from "@/lib/animate";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function PerkAnimation({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className={className}>
      {children}
    </motion.div>
  );
}

export default function PerkSection() {
  const [ratings, setRatings] = useState<
    Record<string, PerkRating> | undefined
  >(undefined);
  const t = useTranslations("perk");
  const totalProjects = useTranslations("project").raw("entries").length;
  const experienceYears = new Date().getFullYear() - 2022;

  useEffect(() => {
    const fetchRatings = async () => {
      const fetchedRatings = await getPerkRatings();
      setRatings(fetchedRatings);
    };
    fetchRatings();
  }, []);

  return (
    <>
      <PerkAnimation className="grid grid-cols-1 sm:grid-cols-2">
        <Perk value={totalProjects} title={t("project")} icon={FaCode} />
        <Perk
          value={experienceYears}
          title={t("experience")}
          icon={FaCertificate}
        />
      </PerkAnimation>
      <PerkAnimation className="grid sm:grid-cols-2 lg:grid-cols-5">
        {perkData.map(({ platform, icon, link }) => (
          <Perk
            key={platform}
            link={link}
            value={ratings?.[platform.toLowerCase()]?.rating ?? "NA"}
            title={platform}
            subtitle={ratings?.[platform.toLowerCase()]?.level}
            icon={icon}
          />
        ))}
      </PerkAnimation>
    </>
  );
}
