import { useEffect, useState } from "react";

interface CurrentTimeProps {
  showSeconds?: boolean;
  isAmPm?: boolean;
}

export function useCurrentTime({
  showSeconds = false,
  isAmPm = false,
}: CurrentTimeProps = {}) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "pm" : "am";

    if (isAmPm) {
      hours = hours % 12;
      hours = hours ? hours : 12;
    }

    const strTime = `${hours.toString().padStart(isAmPm ? 1 : 2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}${
      showSeconds ? `:${seconds.toString().padStart(2, "0")}` : ""
    }${isAmPm ? ` ${ampm}` : ""}`;
    return strTime;
  };

  return formatTime(time);
}
