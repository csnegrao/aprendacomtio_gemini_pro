export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}