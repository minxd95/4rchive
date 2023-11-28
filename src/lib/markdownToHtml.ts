import { remark } from "remark";
import html from "remark-html";
import { rehype } from "rehype";
import rehypeHighlight from "rehype-highlight";

export default async function markdownToHtml(markdown: string) {
  const raw = (await remark().use(html).process(markdown)).toString();
  const result = await rehype()
    .data("settings", { fragment: true })
    .use(rehypeHighlight)
    .process(raw);
  return result.toString();
}
