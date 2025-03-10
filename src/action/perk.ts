"use server";

import { cache } from "react";
import { perkData } from "@/lib/data/data";

export const getPerkRatings = cache(async () => {
  try {
    const ratingPromises = perkData.map((perk) =>
      fetch(
        `${process.env.CONTEST_API}/${perk.platform}?username=${perk.username}`,
        { next: { revalidate: 3600 } }
      )
        .then((res) => res.json())
        .catch(() => null)
    );

    const results = await Promise.all(ratingPromises);

    const ratings = perkData.reduce((acc, perk, index) => {
      acc[perk.platform.toLowerCase()] = results[index];
      return acc;
    }, {} as Record<string, PerkRating>);

    return ratings;
  } catch (error) {
    console.error("Error fetching ratings:", error);
    return {};
  }
});
