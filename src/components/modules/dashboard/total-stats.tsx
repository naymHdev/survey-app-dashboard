"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TotalStats = () => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className=" text-sm font-semibold text-ns-neutral-dark">
              Today’s Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className=" text-2xl font-extrabold text-ns-title">$300.00</h2>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className=" text-sm font-semibold text-ns-neutral-dark">
              Total Players
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className=" text-2xl font-extrabold text-ns-title">250</h2>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className=" text-sm font-semibold text-ns-neutral-dark">
              Total Venues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className=" text-2xl font-extrabold text-ns-title">300</h2>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className=" text-sm font-semibold text-ns-neutral-dark">
              Total Matches Published
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className=" text-2xl font-extrabold text-ns-title">250</h2>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default TotalStats;
