import RecentAccountList from "@/components/modules/dashboard/recent-account-list";
import RecentTransaction from "@/components/modules/dashboard/recent-transaction";
import TotalStats from "@/components/modules/dashboard/total-stats";
import UserManagementChart from "@/components/modules/dashboard/user-management";

const DashboardPage = () => {
  return (
    <>
      <div className=" space-y-6">
        <TotalStats />
        <div className=" grid grid-cols-1 lg:grid-cols-7 gap-6">
          <div className=" col-span-full lg:col-span-5">
            <UserManagementChart />
          </div>
          <div className="col-span-full lg:col-span-2">
            <RecentTransaction />
          </div>
        </div>
        <RecentAccountList />
      </div>
    </>
  );
};

export default DashboardPage;
