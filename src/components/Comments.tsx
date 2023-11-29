"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Comments() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Giscus
      id="comments"
      repo="minxd95/4rchive-comments"
      repoId="R_kgDOKzqF0Q"
      category="Announcements"
      categoryId="DIC_kwDOKzqF0c4CbXuJ"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={resolvedTheme}
      lang="ko"
      loading="lazy"
    />
  );
}
