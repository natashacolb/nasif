import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { ReactNode } from "react";

interface InspirationItem {
  icon: ReactNode;
  title: string;
}

interface InspirationsProps {
  items?: InspirationItem[];
}

export function Inspirations({ items }: InspirationsProps) {
  // Default inspiration items
  const defaultItems: InspirationItem[] = [
    {
      icon: (
        <svg
          className="lucide lucide-dumbbell w-6 h-6 mb-2 transition-colors text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.4 14.4 9.6 9.6"></path>
          <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path>
          <path d="m21.5 21.5-1.4-1.4"></path>
          <path d="M3.9 3.9 2.5 2.5"></path>
          <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path>
        </svg>
      ),
      title: "Fitness Tracker",
    },
    {
      icon: (
        <svg
          className="lucide lucide-plane w-6 h-6 mb-2 transition-colors text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
        </svg>
      ),
      title: "Local Events",
    },
    {
      icon: (
        <svg
          className="lucide lucide-palette w-6 h-6 mb-2 transition-colors text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle fill="currentColor" r=".5" cy="6.5" cx="13.5"></circle>
          <circle fill="currentColor" r=".5" cy="10.5" cx="17.5"></circle>
          <circle fill="currentColor" r=".5" cy="7.5" cx="8.5"></circle>
          <circle fill="currentColor" r=".5" cy="12.5" cx="6.5"></circle>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
        </svg>
      ),
      title: "Smart Home Hub",
    },
    {
      icon: (
        <svg
          className="lucide lucide-book-open w-6 h-6 mb-2 transition-colors text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 7v14"></path>
          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
        </svg>
      ),
      title: "Learning Assistant",
    },
    {
      icon: (
        <svg
          className="lucide lucide-shopping-cart w-6 h-6 mb-2 transition-colors text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle r="1" cy="21" cx="8"></circle>
          <circle r="1" cy="21" cx="19"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
      ),
      title: "E-commerce",
    },
    {
      icon: (
        <svg
          className="lucide lucide-utensils w-6 h-6 mb-2 transition-colors text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
          <path d="M7 2v20"></path>
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
        </svg>
      ),
      title: "Recipe Finder",
    },
    {
      icon: (
        <svg
          className="lucide lucide-message-circle w-6 h-6 mb-2 transition-colors text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
        </svg>
      ),
      title: "Chat Application",
    },
    {
      icon: (
        <svg
          className="lucide lucide-music w-6 h-6 mb-2 transition-colors text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 18V5l12-2v13"></path>
          <circle r="3" cy="18" cx="6"></circle>
          <circle r="3" cy="16" cx="18"></circle>
        </svg>
      ),
      title: "Music Streaming",
    },
    {
      icon: (
        <svg
          className="lucide lucide-computer w-6 h-6 mb-2 transition-colors text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect rx="2" y="2" x="5" height="8" width="14"></rect>
          <rect rx="2" y="14" x="2" height="8" width="20"></rect>
          <path d="M6 18h2"></path>
          <path d="M12 18h6"></path>
        </svg>
      ),
      title: "Engineering",
    },
  ];

  const displayItems = items || defaultItems;

  return (
    <Card className="flex h-full w-full flex-col bg-white text-neutral-950 shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.05)_0_1px_2px_0] transition-all ease-in-out duration-[0.3s] rounded-lg border-2 [animation-duration:.3s]">
      <CardHeader className="flex flex-col bg-[linear-gradient(to_right,rgba(239,246,255,0.5),rgba(219,234,254,0.5))] p-6 md:p-6 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-purple-50 p-2 rounded-lg">
              <Sparkles className="h-5 w-5 text-purple-500 dark:text-purple-400" />
            </div>
            <div className="ml-2 mr-0">
              <CardTitle className="text-2xl leading-none font-semibold -tracking-wide m-0 md:text-2xl text-xl md:leading-none leading-7">
                Inspiration
              </CardTitle>
              <CardDescription className="text-sm leading-5 text-neutral-500 m-0">
                Ideas to kickstart your next project
              </CardDescription>
            </div>
          </div>
          <button
            disabled
            className="text-sm normal-case bg-transparent bg-none cursor-pointer inline-flex h-9 items-center justify-center whitespace-nowrap leading-5 font-medium transition-colors ease-in-out duration-[0.15s] pointer-events-none opacity-50 m-0 px-3 py-0 rounded-md [appearance:button]"
          >
            View all
          </button>
        </div>
      </CardHeader>
      <CardContent className="flex h-full min-h-0 flex-col p-6">
        <div className="grid h-full w-full grid-cols-[repeat(2,minmax(0px,1fr))] gap-4 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          {displayItems.map((item, index) => (
            <button
              key={index}
              className="text-sm normal-case bg-white bg-none cursor-pointer flex h-auto flex-col items-center justify-center whitespace-nowrap border border-blue-200 text-center leading-5 font-medium transition-colors ease-in-out duration-[0.15s] m-0 p-4 rounded-md [appearance:button]"
            >
              {item.icon}
              <span className="text-sm leading-5 font-medium transition-colors ease-in-out duration-[0.15s]">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
