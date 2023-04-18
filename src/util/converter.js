export function Converter(number) {
  const suffixes = ['', 'K', 'M', 'B']; // 각 자리수에 따른 접미사 배열
  const numAbs = Math.abs(number); // 입력된 숫자의 절대값
  const sign = Math.sign(number) === -1 ? '-' : ''; // 입력된 숫자의 부호

  if (numAbs < 1000) {
    return sign + numAbs.toString(); // 1000 미만인 경우 그대로 반환
  }

  const tier = Math.floor(Math.log10(numAbs) / 3); // 숫자의 자리수에 따른 접미사 인덱스 계산
  const scaled = numAbs / Math.pow(10, tier * 3); // 접미사에 해당하는 자리수로 숫자 축소
  const suffix = suffixes[tier]; // 접미사 선택

  // "k"가 붙을 경우 소수점 숨기기
  const formattedNumber =
    suffix === 'K' ? Math.floor(scaled) : scaled.toFixed(1);

  return sign + formattedNumber + suffix; // 접미사와 함께 포맷팅된 문자열 반환
}
