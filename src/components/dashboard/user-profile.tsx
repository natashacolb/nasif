import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface UserProfileProps {
  name?: string;
  role?: string;
  credentials?: {
    nmcNumber?: string;
    dbsStatus?: string;
    experience?: string;
  };
}

export function UserProfile({
  name = "John Doe",
  role = "Registered Nurse",
  credentials = {
    nmcNumber: "1234567",
    dbsStatus: "Valid",
    experience: "5 Years",
  },
}: UserProfileProps) {
  return (
    <Card className="w-full bg-white text-neutral-950 shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.05)_0_1px_2px_0] transition-all ease-in-out duration-[0.3s] rounded-lg border-2 [animation-duration:.3s] mb-2">
      <CardContent className="p-6 flex items-center">
        <div className="h-16 w-16 rounded-full bg-slate-200 flex items-center justify-center mr-4">
          <User className="h-8 w-8 text-slate-500" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-slate-600">{role}</p>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center">
              <span className="text-xs font-medium text-slate-500 mr-1">
                NMC Number:
              </span>
              <span className="text-xs font-semibold">
                {credentials.nmcNumber}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-xs font-medium text-slate-500 mr-1">
                DBS Status:
              </span>
              <span className="text-xs font-semibold text-green-600">
                {credentials.dbsStatus}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-xs font-medium text-slate-500 mr-1">
                Professional Experience:
              </span>
              <span className="text-xs font-semibold">
                {credentials.experience}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
