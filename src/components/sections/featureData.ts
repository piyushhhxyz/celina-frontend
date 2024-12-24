import { Brain, Globe2, Zap, Clock, Users, Shield, Bot, BarChart3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Brain,
    title: "Superhuman Intelligence",
    description: "Our AI understands context, emotion, and buying signals better than human agents."
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Speak to customers in 100+ languages with perfect cultural understanding."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your sales force never sleeps, ensuring you never miss an opportunity."
  },
  {
    icon: Users,
    title: "Mass Outreach",
    description: "Make thousands of personalized calls simultaneously."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with global privacy standards."
  },
  {
    icon: Bot,
    title: "Personality Cloning",
    description: "Clone your best salespeople's personality and tone of voice."
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Set up in minutes, start selling immediately with zero training."
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Real-time insights into customer sentiment and conversion rates."
  }
];