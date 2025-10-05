// app/components/ReviewStars.tsx
"use client";

type Props = {
  rating: 1 | 2 | 3 | 4 | 5;
  size?: number; // опціонально
};

export default function ReviewStars({ rating, size = 16 }: Props) {
  const full = "★".repeat(rating);
  const empty = "☆".repeat(5 - rating);

  return (
    <span
      aria-label={`${rating} out of 5 stars`}
      title={`${rating}/5`}
      style={{ fontSize: size, lineHeight: 1, color: "#f59e0b" }} // amber-ish
    >
      {full}
      <span style={{ color: "#d1d5db" }}>{empty}</span>
    </span>
  );
}