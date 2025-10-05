// app/components/ReviewCard.tsx
"use client";
import { Card, CardHeader, CardBody, Avatar, Divider } from "@heroui/react";
import ReviewStars from "./ReviewStars";
import type { ReviewUI } from "../data/reviews";

export default function ReviewCard({ r }: { r: ReviewUI }) {
  return (
    <Card className="review-card">
      <CardHeader className="review-card__header">
        <Avatar
          // важливо: не "full", інакше буде коло
          radius="none"
          isBordered
          size="lg"
          name={r.name}
          src={r.avatar}
          className="review-card__avatar"
          // підстрахуємося, щоб внутрішнє <img> теж мало 12px
          classNames={{ img: "rounded-[12px]" }}
        />
        <div className="review-card__info">
          <p className="review-card__name">{r.name}</p>
          <div className="review-card__stars">
            <ReviewStars rating={r.rating} />
          </div>
        </div>
      </CardHeader>

      <Divider />

      <CardBody className="review-card__body">
        <p className="review-card__text">{r.text}</p>
      </CardBody>
    </Card>
  );
}