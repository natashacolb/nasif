import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ClipboardList, Pen, Trash2, ChevronsUpDown } from "lucide-react";

interface Project {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  status: "Completed" | "In Progress" | "Planning";
  category: string;
}

interface RecentProjectsProps {
  projects: Project[];
}

export function RecentProjects({ projects = [] }: RecentProjectsProps) {
  // Default projects if none provided
  const defaultProjects: Project[] = [
    {
      id: "175df30f-4b00-4e0d-9e6a-748e98f22fa5",
      title: "CareBook: Streamlined Healthcare Staffing Management Platform",
      createdAt: "Mar 1, 2025",
      updatedAt: "Mar 1, 2025",
      status: "Completed",
      category: "Healthcare Staffing Software",
    },
    {
      id: "8c364f71-28e0-4e90-a005-2efd19bcd17a",
      title:
        "CareBook: Streamlined Management for UK Health & Social Care Locum Shifts",
      createdAt: "Mar 1, 2025",
      updatedAt: "Mar 1, 2025",
      status: "Completed",
      category: "Healthcare Management Software",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  return (
    <Card className="w-full bg-white text-neutral-950 shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.05)_0_1px_2px_0] transition-all ease-in-out duration-[0.3s] rounded-lg border-2 [animation-duration:.3s]">
      <CardHeader className="flex flex-col bg-[linear-gradient(to_right,rgba(239,246,255,0.5),rgba(219,234,254,0.5))] p-6 md:p-6 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-blue-50 p-2 rounded-lg">
              <ClipboardList className="h-5 w-5 text-blue-500 dark:text-blue-400" />
            </div>
            <div className="ml-2 mr-0">
              <CardTitle className="text-2xl leading-none font-semibold -tracking-wide m-0 md:text-2xl text-xl md:leading-none leading-7">
                Recent Projects
              </CardTitle>
              <CardDescription className="text-sm leading-5 text-neutral-500 m-0">
                Your recently worked on projects
              </CardDescription>
            </div>
          </div>
          <a href="/projects">
            <button className="text-sm normal-case bg-transparent bg-none cursor-pointer inline-flex h-9 items-center justify-center whitespace-nowrap leading-5 font-medium transition-colors ease-in-out duration-[0.15s] m-0 px-3 py-0 rounded-md [appearance:button]">
              View all
            </button>
          </a>
        </div>
      </CardHeader>
      <CardContent className="pt-0 pb-6 px-6 md:px-6 md:pb-6 p-4">
        <div className="space-y-4">
          {displayProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex w-full items-center justify-between border-neutral-200 transition-colors ease-in-out duration-[0.15s] ${index === 0 ? "" : "mt-4 mb-0"} ${index !== displayProjects.length - 1 ? "pb-4 rounded-lg border-b" : "border-0"} md:p-4 ${index === 0 ? "" : "gap-2"}`}
            >
              <div className="flex w-full min-w-0 flex-col">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-medium transition-colors ease-in-out duration-[0.15s] m-0">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 md:justify-start justify-end">
                    <a
                      href={`/projects/${project.id}?step=review`}
                      className="inline-flex h-8 min-h-8 w-8 items-center justify-center whitespace-nowrap text-sm leading-5 font-medium transition-colors ease-in-out duration-[0.15s] p-1 rounded-md"
                    >
                      <Pen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </a>
                    <button
                      data-state="closed"
                      aria-expanded="false"
                      aria-haspopup="dialog"
                      type="button"
                      className="text-sm normal-case bg-transparent bg-none cursor-pointer inline-flex h-8 min-h-8 w-8 items-center justify-center whitespace-nowrap leading-5 font-medium transition-colors ease-in-out duration-[0.15s] m-0 p-1 rounded-md [appearance:button]"
                    >
                      <Trash2 className="h-4 w-4 text-red-600 dark:text-red-400" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm leading-5 text-neutral-500 mt-1 mb-0">
                  <span>{project.createdAt}</span>
                  <span>•</span>
                  <span>Updated {project.updatedAt}</span>
                </div>
                <div className="flex w-full min-w-0 items-center gap-2 mt-1 mb-0">
                  <button
                    data-state="closed"
                    aria-haspopup="dialog"
                    type="button"
                    aria-expanded="false"
                    role="combobox"
                    className="text-sm normal-case bg-transparent bg-none cursor-pointer inline-flex h-auto items-center justify-center whitespace-nowrap leading-5 font-normal transition-colors ease-in-out duration-[0.15s] m-0 p-0 rounded-md [appearance:button]"
                  >
                    <div
                      className={`inline-flex items-center border ${project.status === "Completed" ? "bg-green-100 text-green-800" : project.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"} text-xs leading-4 font-semibold transition-colors ease-in-out duration-[0.15s] px-2.5 py-0.5 rounded-full border-transparent`}
                    >
                      {project.status}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </div>
                  </button>
                  <div className="inline-flex min-w-0 items-center border text-xs leading-4 font-semibold text-neutral-500 transition-colors ease-in-out duration-[0.15s] px-2.5 py-0.5 rounded-full">
                    <span className="w-full overflow-hidden whitespace-nowrap text-ellipsis">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
