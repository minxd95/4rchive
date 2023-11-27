import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // 화면 크기를 설정하는 핸들러 함수
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // 컴포넌트 마운트 시 핸들러 추가
    window.addEventListener("resize", handleResize);

    // 초기 화면 크기 설정
    handleResize();

    // 컴포넌트 언마운트 시 핸들러 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []); // 빈 의존성 배열로 마운트 시에만 실행

  return windowSize;
}
