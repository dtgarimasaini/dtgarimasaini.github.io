// To add a new blog: copy one entry below, give it a unique slug, and write your paragraphs.
export type BlogBlock =
  | string // a plain paragraph
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: string;
  excerpt: string;
  content: BlogBlock[]; // paragraphs, headings and images in order
};

import neckImg from "@/assets/blog/desk-yoga-neck.jpg";
import twistImg from "@/assets/blog/desk-yoga-twist.jpg";
import catcowImg from "@/assets/blog/desk-yoga-catcow.jpg";
import breathingImg from "@/assets/blog/desk-yoga-breathing.jpg";

export const blogs: BlogPost[] = [
  {
    slug: "5-minute-desk-yoga",
    title: "5-Minute Desk Yoga for Busy Professionals",
    date: "2026-10-01",
    category: "Corporate Wellness",
    excerpt:
      "A simple 5-minute desk yoga routine to release tension, reset focus and bring wellness into the workday — no mat or workout clothes required.",
    content: [
      "In today's fast-paced corporate world, long meetings, back-to-back deadlines, and hours of screen time can leave employees feeling stressed, stiff, and mentally exhausted. With workplace wellbeing, employee mental health, and holistic wellness becoming important priorities for organizations, small wellness habits can make a meaningful difference.",
      "One simple solution? 5-minute desk yoga.",
      "Desk yoga is an accessible form of workplace wellness that helps professionals incorporate gentle movement, mindful breathing, and short relaxation breaks into their workday — without leaving their desks or changing into workout clothes.",
      "For companies looking to strengthen their corporate wellness programs, desk yoga offers a practical way to encourage healthier work habits and build a more mindful workplace culture.",
      { type: "heading", text: "Why Desk Yoga Is Trending in Corporate Wellness" },
      "Modern corporate wellness initiatives increasingly focus on more than physical fitness. Organizations are exploring employee wellbeing, stress management, mindfulness at work, and sustainable productivity as part of a holistic approach to workplace health.",
      "A short desk yoga session can help employees step away from continuous screen time, release everyday muscle tension, and reset their attention between tasks. When offered as part of a broader employee wellness program, these small breaks can support a workplace culture that values both performance and personal wellbeing.",
      "For HR teams and people leaders, desk yoga can also be an easy entry point into corporate yoga sessions, wellness challenges, and employee engagement activities.",
      { type: "heading", text: "5-Minute Desk Yoga Routine You Can Do Anywhere" },
      "No yoga mat required. Keep movements gentle and breathe naturally.",
      { type: "image", src: neckImg, alt: "Professional woman doing a gentle neck and shoulder release at her office desk" },
      { type: "heading", text: "Minute 1: Neck and Shoulder Release" },
      "Sit upright and gently tilt your head toward each shoulder. Roll your shoulders backward and forward slowly to ease everyday stiffness.",
      { type: "heading", text: "Minute 2: Seated Spinal Twist" },
      { type: "image", src: twistImg, alt: "Office professional doing a gentle seated spinal twist on an office chair" },
      "Sit tall, place one hand on the opposite thigh, and gently rotate your torso. Repeat on the other side without forcing the stretch.",
      { type: "heading", text: "Minute 3: Seated Cat-Cow" },
      { type: "image", src: catcowImg, alt: "Woman doing seated cat-cow stretch at her desk, chest lifted as she inhales" },
      "Inhale as you gently lift your chest and open your shoulders. Exhale as you round your upper back. Repeat slowly.",
      { type: "heading", text: "Minute 4: Wrist and Hand Stretches" },
      "Extend each arm and gently stretch the wrists and fingers. This offers a movement break for people who spend hours typing.",
      { type: "heading", text: "Minute 5: Mindful Breathing" },
      { type: "image", src: breathingImg, alt: "Professional woman taking a calm mindful breathing break with eyes closed at her desk" },
      "Relax your shoulders, soften your gaze, and take slow, comfortable breaths. Bring your attention back to the present before resuming work.",
      "Stop if a movement causes pain or dizziness, and adapt stretches to your comfort.",
      { type: "heading", text: "How Companies Can Make Desk Yoga Part of Their Wellness Strategy" },
      "HR teams can introduce desk yoga through daily movement reminders, virtual yoga breaks, weekly guided corporate yoga sessions, and workplace mindfulness workshops. Offering flexible, inclusive activities can help employees participate regardless of fitness level or work location.",
      "For stronger engagement, companies can incorporate desk yoga into employee wellness programs, holistic wellbeing initiatives, stress management workshops, and healthy workplace challenges. These approaches align with the growing emphasis on integrated, sustainable workplace wellbeing.",
      { type: "heading", text: "Conclusion: Small Breaks, Healthier Workdays" },
      "Five minutes may seem insignificant in a busy schedule, but regular movement and mindful breathing can help employees create healthier workday habits. Desk yoga is simple, accessible, and easy to integrate into everyday routines.",
      "For organizations, it is a practical starting point for building a culture where employee wellbeing matters alongside business goals. Encourage your team to pause, stretch, breathe, and return to work with renewed attention.",
      "Ready to bring wellness into your workplace? Start with five minutes of desk yoga today.",
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
