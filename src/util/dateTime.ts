export function timeYmd(date: string) {
  const ymdDate = new Intl.DateTimeFormat("ko-KR").format(new Date(date));

  return ymdDate;
}

export function timeSince(date: string) {
  // 9시간 더해주기 (UTC - 한국 시간)
  const koreaTimezoneOffset = 9 * 60;

  // 현재 시각 - 댓글이 쓰인 시각 (초 단위)
  const seconds = Math.floor(
    (new Date().getTime() -
      new Date(date).getTime() -
      koreaTimezoneOffset * 60 * 1000) /
      1000
  );

  // RelativeTimeFormat(): "long" 스타일로 상대적 시간을 표현해줌
  const rtf = new Intl.RelativeTimeFormat("ko", {
    style: "long",
  });

  // 시간 경과 정도에 따라 상대적 시간 표기
  if (seconds > 604800) {
    const weeks = Math.floor(seconds / 604800);
    return rtf.format(-weeks, "week");
  } else if (seconds > 86400) {
    const days = Math.floor(seconds / 86400);
    return rtf.format(-days, "day");
  } else if (seconds > 3600) {
    const hours = Math.floor(seconds / 3600);
    return rtf.format(-hours, "hour");
  } else if (seconds > 60) {
    const minutes = Math.floor(seconds / 60);
    return rtf.format(-minutes, "minute");
  } else {
    return rtf.format(-seconds, "second");
  }
}

export function getBarDate(date: Date) {
  // Date > String
  const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const [{ value: year }, , { value: month }, , { value: day }] =
    dateFormatter.formatToParts(date);

  return `${year}-${month}-${day}`; // 예시 "2023-05-01"
}
