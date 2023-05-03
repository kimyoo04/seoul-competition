import { useState } from "react";

export default function PriceFilter() {
  const step = 1000; // 금액 간격
  const fixedMinPrice = 0; // 기본 최소 금액
  const fixedMaxPrice = 100000; // 기본 최대 금액

  // 최소 금액, 최대 금액
  const [minPrice, setMinPrice] = useState(fixedMinPrice);
  const [maxPrice, setMaxPrice] = useState(fixedMaxPrice);

  // price-slider-inner의 left, right 퍼센트 상태
  const [leftPercent, setLeftPercent] = useState(0);
  const [rightPercent, setRightPercent] = useState(0);

  // 2가지 금액, 2가지 확률 상태 dispatch
  const rangeHandler = () => {
    if (maxPrice - minPrice < step) {
      setMaxPrice(minPrice + step);
      setMinPrice(maxPrice - step);
    } else {
      setLeftPercent((minPrice / fixedMaxPrice) * 100);
      setRightPercent(100 - (maxPrice / fixedMaxPrice) * 100);
    }
  };

  // 숫자 포멧 ,000,000 변환
  function formatCurrency(value: number) {
    return value
      .toLocaleString("en-US", {
        style: "currency",
        currency: "KRW",
      })
      .replace("₩", "");
  }

  return (
    <div className="w-full">
      {/* 헤더 */}
      <div className="col-center">
        <span className="font-bold text-font_white">수강료 설정</span>
      </div>

      <div className="mt-6">
        {/* 흰색 바 */}
        <div className="price-slider">
          {/* 회색 바 */}
          <div
            className="price-slider-inner"
            style={{ left: `${leftPercent}%`, right: `${rightPercent}%` }}
          ></div>

          <div className="price-slider-wrap">
            {/* 최소 금액 핸들 */}
            <input
              type="range"
              min={fixedMinPrice}
              max={fixedMaxPrice - step}
              step={step}
              value={minPrice}
              onChange={(e) => {
                setMinPrice(parseInt(e.target.value));
                rangeHandler();
              }}
              className={`price-input`}
            />
            {/* 최대 금액 핸들 */}
            <input
              type="range"
              min={fixedMinPrice + step}
              max={fixedMaxPrice}
              step={step}
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(parseInt(e.target.value));
                rangeHandler();
              }}
              className={`price-input`}
            />
          </div>

          {/* 최저 금액 최대 금액 출력 영역 */}
          <div className="min-max-price">
            <span className="text-font_white">
              {minPrice !== 0 ? `${formatCurrency(minPrice)} 원` : "무료"}
            </span>
            <span className="text-font_white">
              {formatCurrency(maxPrice)} 원
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
