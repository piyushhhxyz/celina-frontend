export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Sales Director",
    company: "TechCorp Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    quote: "Our conversion rates increased by 300% within the first month. The AI agents are indistinguishable from human sales reps.",
    stats: [
      { label: "Conversion Rate", value: "+300%" },
      { label: "Sales Volume", value: "2.5x" }
    ]
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CEO",
    company: "Growth Dynamics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
    quote: "We're now operating in 12 new countries without hiring a single new sales rep. The ROI is absolutely incredible.",
    stats: [
      { label: "New Markets", value: "12" },
      { label: "Cost Savings", value: "65%" }
    ]
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Head of Sales",
    company: "Scale Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
    quote: "The ability to clone our top performer's personality was a game-changer. Now every call is handled by our 'best' agent.",
    stats: [
      { label: "Success Rate", value: "94%" },
      { label: "Team Efficiency", value: "3.8x" }
    ]
  }
];