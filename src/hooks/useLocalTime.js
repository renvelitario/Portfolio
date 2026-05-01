import { useEffect, useState } from "react";

function formatManilaTime() {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  }).format(new Date());
}

export function useLocalTime() {
  const [localTime, setLocalTime] = useState(formatManilaTime);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLocalTime(formatManilaTime());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return localTime;
}
