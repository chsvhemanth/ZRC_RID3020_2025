import { useState, useEffect } from "react";
import { Card } from "./ui/card";

const CountdownTimer = () => {
  const targetDate = new Date("2025-12-14T08:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Conference Countdown</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {timeUnits.map((unit) => (
            <Card key={unit.label} className="p-6 text-center bg-card shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wide">
                {unit.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
