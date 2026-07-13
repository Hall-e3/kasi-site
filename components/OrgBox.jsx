const tones = {
  dark: "bg-navydeep text-paper border-navydeep",
  navy: "bg-navy text-paper border-navy",
  green: "bg-greenbright text-navydeep border-greenbright",
  default: "bg-paper text-navy border-line",
};

export default function OrgBox({ children, tone = "default", small = false }) {
  return (
    <div
      className={`${tones[tone]} border text-center font-display font-600 shadow-sm ${
        small ? "text-xs px-3 py-2.5" : "text-sm px-6 py-3"
      }`}
    >
      {children}
    </div>
  );
}
