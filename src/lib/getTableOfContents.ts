import parse from "node-html-parser";

export default function getTableOfContents(content: string) {
  const root = parse(content);
  const headings = root.querySelectorAll("h2, h3");
  const tableOfContents = headings.map((heading) => ({
    id: heading.id,
    text: heading.text,
    level: parseInt(heading.tagName[1]),
  }));

  return tableOfContents;
}
