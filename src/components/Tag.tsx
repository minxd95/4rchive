interface TagProps {
  text: string;
  selected?: boolean;
}

export default function Tag({ text, selected }: TagProps) {
  return (
    <div
      className={`flex items-center h-8 rounded-3xl ${
        selected ? "bg-slate-400" : "bg-slate-200"
      } ${selected ? "dark:bg-slate-500" : "dark:bg-slate-700"} px-4`}
    >
      <span>{text}</span>
    </div>
  );
}
