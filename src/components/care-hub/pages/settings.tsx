import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Settings as SettingsIcon,
  User,
  Building,
  Shield,
  CreditCard,
  Bell,
  HelpCircle,
  Database,
} from "lucide-react";

interface SettingSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category:
    | "Account"
    | "Organization"
    | "Security"
    | "Billing"
    | "Notifications"
    | "Support"
    | "Data";
}

export function Settings() {
  const settingSections: SettingSection[] = [
    {
      id: "section-1",
      title: "Profile Settings",
      description: "Update your personal information and preferences",
      icon: <User className="h-5 w-5 text-blue-500" />,
      category: "Account",
    },
    {
      id: "section-2",
      title: "Organization Details",
      description: "Manage your organization information and facilities",
      icon: <Building className="h-5 w-5 text-blue-500" />,
      category: "Organization",
    },
    {
      id: "section-3",
      title: "Security & Access",
      description: "Manage account security, passwords and access controls",
      icon: <Shield className="h-5 w-5 text-blue-500" />,
      category: "Security",
    },
    {
      id: "section-4",
      title: "Billing & Subscription",
      description: "Manage your subscription plan and payment methods",
      icon: <CreditCard className="h-5 w-5 text-blue-500" />,
      category: "Billing",
    },
    {
      id: "section-5",
      title: "Notification Preferences",
      description: "Configure how and when you receive notifications",
      icon: <Bell className="h-5 w-5 text-blue-500" />,
      category: "Notifications",
    },
    {
      id: "section-6",
      title: "Help & Support",
      description: "Get help with using the platform and contact support",
      icon: <HelpCircle className="h-5 w-5 text-blue-500" />,
      category: "Support",
    },
    {
      id: "section-7",
      title: "Data Management",
      description: "Manage your data, exports, and privacy settings",
      icon: <Database className="h-5 w-5 text-blue-500" />,
      category: "Data",
    },
  ];

  const accountSettings = settingSections.filter(
    (section) => section.category === "Account",
  );
  const organizationSettings = settingSections.filter(
    (section) => section.category === "Organization",
  );
  const securitySettings = settingSections.filter(
    (section) => section.category === "Security",
  );
  const billingSettings = settingSections.filter(
    (section) => section.category === "Billing",
  );
  const notificationSettings = settingSections.filter(
    (section) => section.category === "Notifications",
  );
  const supportSettings = settingSections.filter(
    (section) => section.category === "Support",
  );
  const dataSettings = settingSections.filter(
    (section) => section.category === "Data",
  );

  return (
    <div className="pt-0">
      <Card className="w-full bg-white text-neutral-950 shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.05)_0_1px_2px_0] transition-all ease-in-out duration-[0.3s] rounded-lg border-2 [animation-duration:.3s]">
        <CardHeader className="flex flex-col bg-[linear-gradient(to_right,rgba(239,246,255,0.5),rgba(219,234,254,0.5))] p-6">
          <div className="flex items-center">
            <div className="bg-blue-50 p-2 rounded-lg">
              <SettingsIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
            </div>
            <div className="ml-2 mr-0">
              <CardTitle className="text-2xl leading-none font-semibold -tracking-wide m-0">
                Settings
              </CardTitle>
              <CardDescription className="text-sm leading-5 text-neutral-500 m-0">
                Manage your account and platform settings
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Account</h3>
              <div className="space-y-4">
                {accountSettings.map((section) => (
                  <SettingSectionCard key={section.id} section={section} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Organization</h3>
              <div className="space-y-4">
                {organizationSettings.map((section) => (
                  <SettingSectionCard key={section.id} section={section} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Security</h3>
              <div className="space-y-4">
                {securitySettings.map((section) => (
                  <SettingSectionCard key={section.id} section={section} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Billing</h3>
              <div className="space-y-4">
                {billingSettings.map((section) => (
                  <SettingSectionCard key={section.id} section={section} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Notifications</h3>
              <div className="space-y-4">
                {notificationSettings.map((section) => (
                  <SettingSectionCard key={section.id} section={section} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Support</h3>
              <div className="space-y-4">
                {supportSettings.map((section) => (
                  <SettingSectionCard key={section.id} section={section} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Data</h3>
              <div className="space-y-4">
                {dataSettings.map((section) => (
                  <SettingSectionCard key={section.id} section={section} />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SettingSectionCard({ section }: { section: SettingSection }) {
  return (
    <div className="flex w-full items-center justify-between border-neutral-200 transition-colors ease-in-out duration-[0.3s] shadow-[0_0_5px_rgba(37,99,235,0.2)] hover:shadow-[0_0_8px_rgba(37,99,235,0.3)] rounded-lg p-4 border border-slate-300">
      <div className="flex items-center">
        <div className="bg-blue-50 p-2 rounded-lg mr-4">{section.icon}</div>
        <div>
          <h4 className="font-medium transition-colors ease-in-out duration-[0.15s] m-0">
            {section.title}
          </h4>
          <p className="text-sm leading-5 text-neutral-500 mt-1 mb-0">
            {section.description}
          </p>
        </div>
      </div>
      <button className="text-sm normal-case bg-slate-100 text-slate-700 cursor-pointer inline-flex h-8 items-center justify-center whitespace-nowrap leading-5 font-medium transition-colors ease-in-out duration-[0.15s] hover:bg-slate-200 m-0 px-3 py-0 rounded-md [appearance:button]">
        Manage
      </button>
    </div>
  );
}
