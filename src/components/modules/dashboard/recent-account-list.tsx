import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, ShieldBan } from "lucide-react";

const data = [
  {
    serial: 1,
    name: "Eleanor Pena",
    email: "eleanor.pena@example.com",
    surveysCompleted: 10,
    dateTime: "2025-08-01 10:30 AM",
    action: "View",
  },
  {
    serial: 2,
    name: "Wade Warren",
    email: "wade.warren@example.com",
    surveysCompleted: 7,
    dateTime: "2025-08-01 09:15 AM",
    action: "View",
  },
  {
    serial: 3,
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    surveysCompleted: 5,
    dateTime: "2025-07-31 02:45 PM",
    action: "View",
  },
];

const RecentAccountList = () => {
  return (
    <Card className="overflow-x-auto p-4 border-none shadow-none">
      <table className="min-w-full table-auto text-left text-sm">
        <thead className=" bg-sc-primary text-sc-white">
          <tr>
            <th className="px-4 py-4">Serial</th>
            <th className="px-4 py-4">Name</th>
            <th className="px-4 py-4">Email</th>
            <th className="px-4 py-4">Surveys Completed</th>
            <th className="px-4 py-4">Date & Time</th>
            <th className="px-4 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className="border-b hover:bg-sc-primary/10">
              <td className="px-4 py-4">
                <div className=" flex items-center gap-2">
                  <Checkbox
                    id={`select-${user.serial}`}
                    className=" data-[active]:border-sc-primary border-sc-primary data-[state=checked]:bg-sc-primary data-[state=checked]:border-sc-primary"
                  />
                  <p>{`#${index + 1}`}</p>
                </div>
              </td>
              <td className="px-4">{user.name}</td>
              <td className="px-4">{user.email}</td>
              <td className="px-4">{user.surveysCompleted}</td>
              <td className="px-4">{user.dateTime}</td>
              <td className="px-4">
                <div className=" flex items-center gap-2">
                  <button className="hover:cursor-pointer">
                    <Eye className=" text-sc-primary h-5 w-5" />
                  </button>
                  <button className="hover:cursor-pointer">
                    <ShieldBan className=" text-red-700 h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default RecentAccountList;
