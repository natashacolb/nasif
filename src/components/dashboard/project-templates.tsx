import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FileText, SquareArrowOutUpRight } from "lucide-react";

interface ProjectTemplate {
  id: string;
  title: string;
  description: string;
}

interface ProjectTemplatesProps {
  templates?: ProjectTemplate[];
}

export function ProjectTemplates({ templates }: ProjectTemplatesProps) {
  // Default templates
  const defaultTemplates: ProjectTemplate[] = [
    {
      id: "c4009389-42e0-41bb-8ee9-8cfd9d1b7e1e",
      title: "SaaS Web App",
      description:
        'I want to build a web-based platform for [e.g., small business owners] to [e.g., track inventory and sales]. This application simplifies daily operations and provides actionable insights to help users grow their business. Project Name: [e.g., "InventoryTracker Pro"] Target Audience: [e.g., small to mid-sized retail businesses, online store owners] Core Features: 1. [Secure user accounts with admin and user roles] 2. [Real-time sales analytics dashboard with charts and graphs] 3. [Automated low-inventory alerts via email or SMS] 4. [Built-in reporting tools to export data in CSV format] 5. [Integration with popular payment gateways like Stripe] 6. [Basic AI-driven product recommendations (optional)] Tech Stack (Recommended Defaults): • Frontend: Next.js 14, TypeScript, Tailwind CSS, shadcn/UI, Radix UI, Lucide Icons • Backend & Storage: Supabase (database, auth, storage) • Optional AI Integration: GPT-4o or Claude 3.5 Sonnet for generating content or handling user queries Design Preferences: A clean, minimalistic interface with easy-to-read fonts, neutral colors, and clear navigation menus.',
    },
    {
      id: "d0d5ccf4-84a0-4cfa-8368-7c4ad89d3340",
      title: "Modern Landing Page",
      description:
        'I want to build a landing page for [e.g., a new marketing tool or a productivity app]. This page introduces the product\'s core value, highlights key benefits, and guides visitors towards trying or buying the product. Project Name: [e.g., "ProGrow"] Target Audience: [e.g., small business owners, freelancers, startup founders] Sections (Replace with your own content): 1. [Top Navigation: Home, About, Features, Pricing, Contact] 2. [Hero Section: A clear headline that states what the product does (e.g., "Grow Your Business Faster"), a short subheading (e.g., "Powerful analytics to boost sales"), and a prominent call-to-action button (e.g., "Get Started")] 3. [Key Benefits Section: Brief bullet points or icons highlighting top benefits (e.g., "Easy Setup," "24/7 Support," "Real-time Insights")] 4. [Testimonials Section: Customer quotes and photos to build trust] 5. [Pricing Section: Simple pricing tiers with a short description of each plan\'s features] 6. [Footer: Links to About, Terms, Privacy Policy, and Social Media icons] Tech Stack (Recommended Defaults): • Frontend: Next.js 14, TypeScript, Tailwind CSS, shadcn/UI, Radix UI, Lucide Icons • Backend & Storage: Supabase (if any backend needed for forms, data capture) • Optional AI Integration: GPT-4o or Claude 3.5 Sonnet for auto-generating marketing copy or headlines Design Preferences: A modern, clean layout with generous white space, a consistent color scheme, and high-quality imagery.',
    },
    {
      id: "065683ad-cc0a-4018-808d-c18de167a153",
      title: "Mobile App",
      description:
        'I want to build a mobile app for [e.g., parents] to [e.g., manage daily tasks and reminders]. The app keeps track of important events, sends helpful notifications, and offers simple tools for staying organized. Project Name: [e.g., "DailyEase"] Target Audience: [e.g., busy parents, working professionals] Core Features: 1. [User profiles with custom to-do lists] 2. [Push notifications for reminders and due dates] 3. [Calendar integration for syncing events] 4. [Simple note-taking for quick ideas or grocery lists] 5. [Cloud backup to access data on multiple devices] 6. [Optional AI suggestions for productivity tips] Tech Stack (Recommended Defaults): • If iOS only: SwiftUI • If iOS & Android: React Native (TypeScript) • Backend & Storage: Supabase (for user data, auth, storage) • Optional AI Integration: GPT-4o or Claude 3.5 Sonnet for intelligent recommendations Design Preferences: A friendly, approachable look with soft colors, clear icons, and straightforward navigation. Large buttons and easy-to-read text for quick interaction.',
    },
    {
      id: "5a4a67e7-b28d-4185-b9f1-434cc0263ef9",
      title: "Website (Multi-Page)",
      description:
        'I want to build a multi-page website aimed at [e.g., showcasing a corporate brand, providing company information, and offering a contact channel]. The goal is to present clear, structured information with an engaging design that reflects professionalism. Project Name [e.g., "AcmeCorp Site"] Target Audience [e.g., potential customers, partners, or job seekers who want to learn about the company] Core Pages/Sections 1. Home Page – Hero banner, brief company introduction, main call-to-action 2. About – Company history, mission, team members 3. Services – Overview of services offered, key benefits, pricing or case studies 4. Blog/News (optional) – Company updates, industry insights, thought leadership content 5. Contact – Contact form, location map, social media links 6. Footer – Quick links, copyright, legal information Tech Stack (Recommended Defaults) • Frontend: Next.js 14, TypeScript, Tailwind CSS, shadcn/UI, Radix UI, Lucide Icons • Backend & Storage: Supabase (if the site needs user data, forms, or other dynamic content) • Optional AI Integration: GPT-4o or Claude 3.5 Sonnet for generating blog posts or marketing copy Design Preferences A clean, modern layout with consistent branding, easy navigation, and strong visual hierarchy (e.g., large hero image, clear typography, and intuitive menu).',
    },
  ];

  const displayTemplates = templates || defaultTemplates;

  return (
    <Card className="w-full bg-white text-neutral-950 shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.05)_0_1px_2px_0] transition-all ease-in-out duration-[0.3s] rounded-lg border-2 [animation-duration:.3s]">
      <CardHeader className="flex flex-col bg-[linear-gradient(to_right,rgba(239,246,255,0.5),rgba(219,234,254,0.5))] p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-blue-50 p-2 rounded-lg">
              <FileText className="h-5 w-5 text-blue-500 dark:text-blue-400" />
            </div>
            <div className="ml-2 mr-0">
              <CardTitle className="text-2xl leading-none font-semibold -tracking-wide m-0 md:text-2xl text-xl md:leading-none leading-7">
                Project Templates
              </CardTitle>
              <CardDescription className="text-sm leading-5 text-neutral-500 m-0">
                Quick start templates for your projects
              </CardDescription>
            </div>
          </div>
          <a href="/project-templates">
            <button className="text-sm normal-case bg-transparent bg-none cursor-pointer inline-flex h-9 items-center justify-center whitespace-nowrap leading-5 font-medium transition-colors ease-in-out duration-[0.15s] m-0 px-3 py-0 rounded-md [appearance:button]">
              View all
            </button>
          </a>
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <div className="space-y-4">
          {displayTemplates.map((template, index) => (
            <div
              key={template.id}
              className={`flex w-full min-w-0 items-center justify-between border-neutral-200 transition-colors ease-in-out duration-[0.15s] p-4 rounded-lg ${index !== displayTemplates.length - 1 ? "border-b" : "border-0"} ${index !== 0 ? "mt-4 mb-0" : ""}`}
            >
              <div className="flex w-full min-w-0 flex-col">
                <h3 className="font-medium transition-colors ease-in-out duration-[0.15s] m-0">
                  {template.title}
                </h3>
                <p className="max-w-[300px] overflow-hidden whitespace-nowrap text-ellipsis text-sm leading-5 text-neutral-500 mt-1 mb-0 mx-0">
                  {template.description}
                </p>
              </div>
              <div>
                <a href={`/new-project?template=${template.id}`}>
                  <button className="text-sm normal-case bg-transparent bg-none cursor-pointer inline-flex h-10 w-10 items-center justify-center whitespace-nowrap leading-5 font-medium text-blue-500 transition-colors ease-in-out duration-[0.15s] m-0 p-0 rounded-md [appearance:button]">
                    <SquareArrowOutUpRight className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
