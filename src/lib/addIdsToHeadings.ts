import parse from "node-html-parser";

// todo: h1태그 어떻게 처리할지 결정
export default function addIdsToHeadings(content: string) {
  const root = parse(content);
  const headings = root.querySelectorAll("h2, h3");
  headings.forEach((heading, index) => {
    heading.setAttribute("id", `heading-${index}`);
  });

  return root.toString();
}
