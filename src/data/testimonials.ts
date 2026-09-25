/**
 * Real Google reviews for the LeadzSite business profile, where Shivam runs
 * technology delivery. They are reviews of the agency, not personal references —
 * the section is labelled accordingly so nothing is overstated.
 *
 * Source: Google Business Profile, "LeadzSite - Performance Marketing & Website
 * Development", Bengaluru. Captured Sep 2026.
 */

export type Testimonial = {
  quote: string;
  name: string;
  /** Reviewer's Google profile context, e.g. "Local Guide · 16 reviews". */
  meta: string;
  rating: number;
  when: string;
  /** Google truncates longer reviews; true means the quote is the opening excerpt. */
  excerpt?: boolean;
};

export const reviewSummary = {
  source: "Google",
  business: "LeadzSite — Performance Marketing & Website Development",
  rating: 5.0,
  count: 7,
  url: "https://www.google.com/maps/search/LeadzSite+-+Performance+Marketing+%26+Website+Development+Bengaluru",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I had an amazing experience working with this agency! Their team is highly professional, responsive, and truly understands the nuances of performance marketing. They not only helped us scale our ad campaigns with impressive ROI but also",
    name: "Akshay Raj",
    meta: "1 review",
    rating: 5,
    when: "a year ago",
    excerpt: true,
  },
  {
    quote:
      "We've had an amazing experience working with LeadzSite for both lead generation and digital marketing. Their targeted strategies helped us attract high-quality leads, and their digital campaigns significantly improved our online presence.",
    name: "Sirish Narayan",
    meta: "Local Guide · 10 reviews · 34 photos",
    rating: 5,
    when: "a year ago",
    excerpt: true,
  },
  {
    quote:
      "Great work, I have got a website made for our company — it's damn neat and their after services are also very helpful. Got multiple leads from digital marketing.",
    name: "Kunal Khandelwal",
    meta: "4 reviews",
    rating: 5,
    when: "a year ago",
  },
  {
    quote: "Genuine and quality services. Would recommend to friends and family.",
    name: "Siddharth RJ",
    meta: "Local Guide · 16 reviews",
    rating: 5,
    when: "a year ago",
  },
  {
    quote: "Amazing work from the team, they are really good.",
    name: "Sujan Rao",
    meta: "5 reviews · 1 photo",
    rating: 5,
    when: "a year ago",
  },
];
