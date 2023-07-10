/**
 * 분을 입력하면 일,시간,분으로 변환해주는 포매터
 * @param time min ex) 720
 * @returns ex) 12시간 0분
 */
export const formatTime = (time: number): string => {
  const isMinus = time < 0;
  time = Math.abs(time);
  if (time >= 6000) {
    const hours = time % 1440;
    return (
      Math.floor(time / 1440) +
      '일 ' +
      Math.floor(hours / 60) +
      '시간 ' +
      (hours % 60) +
      '분'
    );
  }
  if (time >= 60) {
    return Math.floor(time / 60) + '시간 ' + (time % 60) + '분';
  }
  return (isMinus ? '-' : '') + time + '분';
};
