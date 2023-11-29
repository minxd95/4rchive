import { useEffect, useState } from "react";

const useTOC = (ids: string[]) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -60% 0%` }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id) as HTMLElement;
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [ids]);

  return activeId;
};

export default useTOC;
