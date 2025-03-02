import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Settings as SettingsIcon,
  Bell,
  MapPin,
  Shield,
  CreditCard,
} from "lucide-react";

interface SettingsSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function Settings() {
  const settingsSections: SettingsSection[] = [
    {
      id: "section-1",
      title: "Personal Information",
      description:
        "Update your name, contact details, and professional information",
      icon: <SettingsIcon className="h-5 w-5 text-blue-500" />,
    },
    {
      id: "section-2",
      title: "Notifications",
      description: "Manage your email and push notification preferences",
      icon: <Bell className="h-5 w-5 text-blue-500" />,
    },
    {
      id: "section-3",
      title: "Location Preferences",
      description:
        "Set your preferred working locations and maximum travel distance",
      icon: <MapPin className="h-5 w-5 text-blue-500" />,
    },
    {
      id: "section-4",
      title: "Privacy & Security",
      description: "Manage your account security and privacy settings",
      icon: <Shield className="h-5 w-5 text-blue-500" />,
    },
    {
      id: "section-5",
      title: "Payment Information",
      description: "Update your bank details and payment preferences",
      icon: <CreditCard className="h-5 w-5 text-blue-500" />,
    },
  ];

  return (
    <div className="pt-0">
      <Card className="w-full bg-white text-neutral-950 shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.05)_0_1px_2px_0] transition-all ease-in-out duration-[0.3s] rounded-lg border-2 [animation-duration:.3s]">
        <CardHeader className="flex flex-col bg-[linear-gradient(to_right,rgba(239,246,255,0.5),rgba(219,234,254,0.5))] p-6 md:p-6 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-blue-50 p-2 rounded-lg">
                <SettingsIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              </div>
              <div className="ml-2 mr-0">
                <CardTitle className="text-2xl leading-none font-semibold -tracking-wide m-0 md:text-2xl text-xl md:leading-none leading-7">
                  Settings
                </CardTitle>
                <CardDescription className="text-sm leading-5 text-neutral-500 m-0">
                  Manage your account preferences and settings
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {settingsSections.map((section, index) => (
              <div
                key={section.id}
                className={`flex w-full items-center justify-between border-neutral-200 transition-colors ease-in-out duration-[0.15s] ${index !== settingsSections.length - 1 ? "pb-4 border-b" : ""} ${index !== 0 ? "pt-4" : ""}`}
              >
                <div className="flex w-full min-w-0 items-center">
                  <div className="bg-blue-50 p-2 rounded-lg mr-4">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium transition-colors ease-in-out duration-[0.15s] m-0">
                      {section.title}
                    </h3>
                    <div className="text-sm leading-5 text-neutral-500 mt-1 mb-0">
                      {section.description}
                    </div>
                  </div>
                  <button className="text-sm normal-case bg-slate-100 text-slate-700 cursor-pointer inline-flex h-8 items-center justify-center whitespace-nowrap leading-5 font-medium transition-colors ease-in-out duration-[0.15s] hover:bg-slate-200 m-0 px-3 py-0 rounded-md [appearance:button]">
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
