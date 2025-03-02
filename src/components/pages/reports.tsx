import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BarChart, Download, Calendar } from "lucide-react";

interface Report {
  id: string;
  name: string;
  description: string;
  lastGenerated: string;
}

export function Reports() {
  const reports: Report[] = [
    {
      id: "report-1",
      name: "Hours Summary",
      description: "Summary of hours worked by month",
      lastGenerated: "12 Apr 2024",
    },
    {
      id: "report-2",
      name: "Earnings Report",
      description: "Breakdown of earnings by facility and period",
      lastGenerated: "12 Apr 2024",
    },
    {
      id: "report-3",
      name: "Shift Pattern Analysis",
      description: "Analysis of your shift patterns and preferences",
      lastGenerated: "5 Apr 2024",
    },
    {
      id: "report-4",
      name: "Annual Summary",
      description: "Year-to-date summary of all professional activity",
      lastGenerated: "31 Mar 2024",
    },
  ];

  return (
    <div className="pt-0">
      <Card className="w-full bg-white text-neutral-950 shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.05)_0_1px_2px_0] transition-all ease-in-out duration-[0.3s] rounded-lg border-2 [animation-duration:.3s]">
        <CardHeader className="flex flex-col bg-[linear-gradient(to_right,rgba(239,246,255,0.5),rgba(219,234,254,0.5))] p-6 md:p-6 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-blue-50 p-2 rounded-lg">
                <BarChart className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              </div>
              <div className="ml-2 mr-0">
                <CardTitle className="text-2xl leading-none font-semibold -tracking-wide m-0 md:text-2xl text-xl md:leading-none leading-7">
                  Reports
                </CardTitle>
                <CardDescription className="text-sm leading-5 text-neutral-500 m-0">
                  Generate and view professional activity reports
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {reports.map((report, index) => (
              <div
                key={report.id}
                className={`flex w-full items-center justify-between border-neutral-200 transition-colors ease-in-out duration-[0.15s] ${index !== reports.length - 1 ? "pb-4 border-b" : ""} ${index !== 0 ? "pt-4" : ""}`}
              >
                <div className="flex w-full min-w-0 flex-col">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-medium transition-colors ease-in-out duration-[0.15s] m-0">
                      {report.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm leading-5 text-neutral-500 mt-1 mb-0">
                    <span>{report.description}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm leading-5 text-neutral-500 mt-1 mb-0">
                    <span>Last generated: {report.lastGenerated}</span>
                  </div>
                  <div className="mt-2 flex space-x-2">
                    <button className="text-sm normal-case bg-blue-500 text-white cursor-pointer inline-flex h-8 items-center justify-center whitespace-nowrap leading-5 font-medium transition-colors ease-in-out duration-[0.15s] hover:bg-blue-600 m-0 px-3 py-0 rounded-md [appearance:button]">
                      <Calendar className="h-4 w-4 mr-1" />
                      Generate New
                    </button>
                    <button className="text-sm normal-case bg-slate-100 text-slate-700 cursor-pointer inline-flex h-8 items-center justify-center whitespace-nowrap leading-5 font-medium transition-colors ease-in-out duration-[0.15s] hover:bg-slate-200 m-0 px-3 py-0 rounded-md [appearance:button]">
                      <Download className="h-4 w-4 mr-1" />
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
