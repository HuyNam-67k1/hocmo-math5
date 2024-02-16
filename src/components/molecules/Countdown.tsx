"use client";

import { useEffect, useRef, useState } from "react";

function Countdown({ seconds, onEnd }: { seconds: number; onEnd: () => void }) {
  const intervalRef = useRef<any>();
  const deadlineRef = useRef(new Date().getTime() + seconds * 1000);
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      if (now < deadlineRef.current) {
        setRemaining(Math.round((deadlineRef.current - now) / 1000));
      } else {
        setRemaining(0);
        clearInterval(intervalRef.current);
        onEnd();
      }
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return <span>{remaining}</span>;
}

export default Countdown;
