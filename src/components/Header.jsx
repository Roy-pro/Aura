import { useEffect, useState } from "react";

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();

  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning ☀️";
  } else if (hour < 17) {
    greeting = "Good Afternoon 🌤️";
  } else {
    greeting = "Good Evening 🌙";
  }

  return (
    <header className="header">
      <h1>Aura 🌿</h1>

      <p className="time">
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>

      <p className="greeting">{greeting}</p>

      <p className="date">
        {time.toLocaleDateString([], {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </p>
    </header>
  );
}

export default Header;