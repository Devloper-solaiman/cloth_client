"use client";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 2);

  const calculateTimeLeft = () => {
    const difference = +endDate - +new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box className=" text-red-600 font-semibold flex justify-start items-start gap-4">
      <h2>End Time: </h2>
      <p>
        <span>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>{" "}
      </p>
    </Box>
  );
};

export default CountdownTimer;
