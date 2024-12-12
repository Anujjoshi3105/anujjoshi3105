const formatDate = (date: string | Date | null) => {
  if (!date) return "ongoing";
  return date instanceof Date
    ? `${date.toLocaleString("en-US", {
        month: "short",
      })}, ${date.getFullYear()}`
    : new Date(date).toLocaleString("en-US", {
        month: "short",
        year: "numeric",
      });
};

export { formatDate };
