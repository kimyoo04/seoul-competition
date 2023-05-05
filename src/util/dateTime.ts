export function timeYmd(date: string) {
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
  const rtf = new Intl.RelativeTimeFormat("ko-KR", {
    style: "long",
  });

  // 시간 경과 정도에 따라 상대적 시간 표기
  if (seconds <= 60) {
    // 초전
    return rtf.format(-seconds, "second");
  } else if (seconds <= 3600) {
    // 분전
    const minutes = Math.floor(seconds / 60);
    return rtf.format(-minutes, "minute");
  } else if (seconds <= 21600) {
    // 시간전 (6시간까지)
    const hours = Math.floor(seconds / 3600);
    return rtf.format(-hours, "hour");
  } else {
    // 날짜
    const ymdDate = new Intl.DateTimeFormat("ko-KR").format(new Date(date));
    return ymdDate;
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
