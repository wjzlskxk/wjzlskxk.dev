const useCarrer = () => {
  const getDurationMonths = (period: string) => {
    const [startRaw, endRaw] = period.split("-").map((part) => part.trim());

    const parsePart = (part: string) => {
      const [year, month] = part.split(".").map((value) => Number(value));
      if (!year || !month) return null;
      return { year, month };
    };

    const start = parsePart(startRaw);
    const end =
      endRaw === "현재" ? { year: new Date().getFullYear(), month: new Date().getMonth() + 1 } : parsePart(endRaw);

    if (!start || !end) return null;

    const months = (end.year - start.year) * 12 + (end.month - start.month) + 1;
    return months > 0 ? months : null;
  };

  const formatDuration = (months: number): string => {
    if (months < 12) {
      return `${months}개월`;
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (remainingMonths === 0) {
      return `${years}년`;
    }

    return `${years}년 ${remainingMonths}개월`;
  };

  return { getDurationMonths, formatDuration };
};

export default useCarrer;
