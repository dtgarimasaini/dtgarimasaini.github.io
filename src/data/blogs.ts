// To add a new blog: copy one entry below, give it a unique slug, and write your paragraphs.
export type BlogPost = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: string;
  excerpt: string;
  content: string[]; // one string per paragraph
};

export const blogs: BlogPost[] = [
  {
    slug: "5-minute-desk-yoga",
    title: "5-Minute Desk Yoga for Busy Professionals",
    date: "2026-10-01",
    category: "Corporate Wellness",
    excerpt: "Simple stretches and breathwork you can do at your desk to release tension and refocus.",
    content: [
      "Long hours at a desk quietly build tension in the neck, shoulders and lower back. The good news: a few mindful minutes can undo much of it.",
      "Start with three slow rounds of belly breathing. Then try seated cat-cow, gentle neck rolls and a seated spinal twist on each side.",
      "Finish by closing your eyes for thirty seconds and noticing how your body feels. Small, consistent practice creates lasting change.",
    ],
  },
  {
    slug: "eating-with-the-seasons",
    title: "Eating With the Seasons: Ancient Wisdom, Modern Science",
    date: "2026-09-15",
    category: "Nutrition",
    excerpt: "Why seasonal, local food supports digestion, energy and balance — and how to start.",
    content: [
      "Traditional Indian food wisdom has always followed the seasons. Modern nutrition science now confirms many of these instincts.",
      "Seasonal produce is fresher, richer in nutrients and naturally suited to what the body needs at that time of year.",
      "Begin by adding one seasonal vegetable and one seasonal fruit to your plate each day, and notice the difference in your energy.",
    ],
  },
];
