import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

interface Tip {
  text: string;
}

interface TipsProps {
  tips?: Tip[];
}

export function Tips({ tips }: TipsProps) {
  // Default tips
  const defaultTips: Tip[] = [
    { text: "Be specific in your project descriptions" },
    { text: "Include visual examples when possible" },
    { text: "Review and refine AI-generated content" },
    { text: "Keep documentation up-to-date" },
    { text: "Use consistent terminology" },
  ];

  const displayTips = tips || defaultTips;

  return (
    <Card className="w-full bg-white text-neutral-950 shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.05)_0_1px_2px_0] transition-all ease-in-out duration-[0.3s] rounded-lg border-2 [animation-duration:.3s]">
      <CardHeader className="flex flex-col bg-[linear-gradient(to_right,rgba(239,246,255,0.5),rgba(219,234,254,0.5))] p-6">
        <div className="flex items-center">
          <div className="bg-yellow-50 p-2 rounded-lg">
            <Lightbulb className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
          </div>
          <div className="ml-2 mr-0">
            <CardTitle className="text-2xl leading-none font-semibold -tracking-wide m-0">
              Tips for Better Docs
            </CardTitle>
            <CardDescription className="text-sm leading-5 text-neutral-500 m-0">
              Improve your documentation quality
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="m-0 p-0 [list-style:none]">
          {displayTips.map((tip, index) => (
            <li
              key={index}
              className={`${index === 0 ? "ml-[-0.5rem] mr-[-0.5rem]" : "flex items-start mr-[-0.5rem] ml-[-0.5rem]"} flex items-start transition-colors ease-in-out duration-[0.15s] ${index !== 0 ? "mt-2 mb-0" : ""} p-2 rounded-lg`}
            >
              <span className="h-2 w-2 bg-[rgba(59,130,246,0.7)] transition-transform ease-in-out duration-[0.15s] mt-2 rounded-full"></span>
              <span className="text-sm leading-5 text-slate-600 transition-colors ease-in-out duration-[0.15s] ml-3 mr-0">
                {tip.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
