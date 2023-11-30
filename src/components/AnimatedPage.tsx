export default function AnimatedPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="animate-fadeIn">{children}</div>;
}
