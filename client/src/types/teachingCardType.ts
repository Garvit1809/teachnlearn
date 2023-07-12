import { reviewProps } from "./reviewType";

export interface teachinCardProps {
  announcements: string[];
  averageRating: number;
  callLink: string;
  cardBanner: string;
  classEndsAt: string;
  classStartsAt: string;
  createdBy: {
    name: string;
    photo: string;
    _id: string;
    userName: string;
  };
  date: string;
  description: string;
  interestedStudents: string[];
  isLearningCardReferred: boolean;
  preferredLanguage: string;
  price: number;
  programme: string;
  ratingQuantity: number;
  reviews: reviewProps[];
  standard: string;
  studentsEnrolled: string[];
  subject: string;
  tags: string[];
  topic: string;
  _id: string;
}
