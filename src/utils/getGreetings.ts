export const getGreetings = () => {
  const date = new Date();
  const hours = date.getHours();
  const ampm = hours >= 12 ? "pm" : "am";

  const getRandomGreeting = (greetingsArray: string[]) => {
    return greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
  };

  const greetingsByTime = {
    pm: {
      lateNight: [
        "Burning the midnight oil, are we?",
        "Stars are out, and so are you!",
        "Dreamland awaits your arrival.",
        "Recharge those batteries, champ.",
        "Night owls unite!",
        "Sleep is optional, right?",
      ],
      evening: [
        "The sun bids you farewell.",
        "Time to kick back and relax.",
        "The stars are your companions tonight.",
        "Wrap up your day with a smile.",
        "Good vibes only this evening!",
      ],
      dinner: [
        "Bon appétit, food connoisseur!",
        "Refuel your body and soul.",
        "A toast to a day well spent!",
        "Dinner time is winning time!",
        "What’s on the menu tonight?",
        "Well done, you earned this!",
      ],
      afternoon: [
        "The grind never stops—or does it?",
        "A little hustle, a little rest.",
        "You’re halfway to victory!",
        "Keep pushing, you’ve got this.",
        "Take a breather; the finish line is near.",
        "Sunshine and ambition!",
      ],
      lunch: [
        "Food break: activated.",
        "Refuel and recharge for the afternoon!",
        "Lunch is power—use it wisely.",
        "Stretch, smile, and savor the moment.",
        "Hands washed, mind refreshed!",
        "You deserve this tasty pause.",
      ],
    },
    am: {
      morning: [
        "Rise and conquer the day!",
        "Today’s a blank canvas—paint it bright!",
        "Morning magic is in the air.",
        "Seize the sunrise and the opportunities!",
        "Good vibes only this morning.",
        "Good morning, world changer!",
      ],
      earlyMorning: [
        "The world is quiet; your dreams are loud.",
        "Rise and shine, early bird!",
        "The dawn is yours to conquer.",
        "Chasing dreams before the sun wakes up.",
        "This is your time to shine!",
      ],
      lateNight: [
        "The night’s secrets are yours to keep.",
        "Dance in the moonlight or dream away.",
        "Your imagination’s playground begins now.",
        "Embrace the calm of the late hours.",
        "Ghost stories and warm blankets await.",
      ],
      midnight: [
        "A new day begins—embrace the magic.",
        "The clock strikes twelve; anything is possible.",
        "Midnight musings and stargazing.",
        "Dream big under the moon’s glow.",
        "Your night adventure starts now.",
      ],
    },
  };

  const getGreetingByHour = () => {
    if (ampm === "pm") {
      if (hours >= 23) return getRandomGreeting(greetingsByTime.pm.lateNight);
      else if (hours >= 20)
        return getRandomGreeting(greetingsByTime.pm.evening);
      else if (hours >= 18) return getRandomGreeting(greetingsByTime.pm.dinner);
      else if (hours >= 15)
        return getRandomGreeting(greetingsByTime.pm.afternoon);
      else return getRandomGreeting(greetingsByTime.pm.lunch);
    } else {
      if (hours >= 9) return getRandomGreeting(greetingsByTime.am.morning);
      else if (hours >= 6)
        return getRandomGreeting(greetingsByTime.am.earlyMorning);
      else if (hours >= 3)
        return getRandomGreeting(greetingsByTime.am.lateNight);
      else return getRandomGreeting(greetingsByTime.am.midnight);
    }
  };

  return getGreetingByHour();
};
