// Returns a datetime string formatted as:
// wkday mm dd, yyyy h:mm AM/PM EST/EDT
export function formatDateTimeET(strDT) {
  if (!isValidDateTime(strDT)) return strDT;

  const dt = new Date(strDT);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/New_York",
    timeZoneName: "short",
  };

  const dtParts = new Intl.DateTimeFormat("en-US", options)
    .formatToParts(dt)
    .reduce((acc, part) => {
      if (part.type !== "literal") acc[part.type] = part.value;
      return acc;
    }, {});

  const dtFormatted = `${dtParts.weekday} ${dtParts.month} ${dtParts.day}, ${dtParts.year} ${dtParts.hour}:${dtParts.minute} ${dtParts.dayPeriod} ${dtParts.timeZoneName}`;
  return `${dtFormatted}`;
}

// Checks to determine if the datetime string contains
// a valid date and time (vs NET ot TBD date)
export function isValidDateTime(strDT) {
  if (strDT?.length < 3) return false;

  const weekday = strDT.slice(0, 3);
  return "Mon Tue Wed Thu Fri Sat Sun".includes(weekday) && strDT.includes(":");
}

// returns time remaining until the event, formatted as an object
export function getCountdown(eventDate) {
  const now = new Date();
  const timeRemaining = eventDate - now;
  // console.log(now, eventDate);

  if (timeRemaining <= 0) return null;

  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
