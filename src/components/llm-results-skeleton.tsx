"use client";

import { Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LLMResultsSkeleton() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-2 md:gap-6">
        {/* Page Title */}
        <Skeleton className="h-6 w-32 mb-2" />

        {/* Top Grid: Two columns */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {/* Left Side: Four KPI Cards (in a 2x2 grid) */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Hallucination Rate */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-5 w-5" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-20 mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>

            {/* LLM Drift Rate */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-5 w-5" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-20 mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>

            {/* Custom Metric 1 */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-5 w-5" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-20 mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>

            {/* Custom Metric 2 */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-5 w-5" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-20 mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          </div>

          {/* Right Side: Two Pie Charts (in a 2x1 grid) */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Accuracy Distribution Card */}
            <Card>
              <CardHeader className="pb-0 items-center">
                <Skeleton className="h-4 w-40" />
              </CardHeader>
              <CardContent className="flex-1 pb-0">
                <div className="mx-auto flex items-center justify-center h-[250px] w-[250px]">
                  <Skeleton className="h-full w-full rounded-full" />
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-2 text-sm">
                <Skeleton className="h-4 w-1/2" />
              </CardFooter>
            </Card>

            {/* Accuracy by File Card */}
            <Card className="flex flex-col">
              <CardHeader className="items-center pb-0">
                <Skeleton className="h-4 w-40" />
              </CardHeader>
              <CardContent className="flex-1 pb-0">
                <div className="mx-auto flex items-center justify-center h-[250px] w-[250px]">
                  <Skeleton className="h-full w-full rounded-full" />
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-2 text-sm">
                <Skeleton className="h-4 w-1/2" />
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Bottom Card: Question-Wise Accuracy (Area Chart) */}
        <Card>
          <CardHeader className="flex items-center gap-2 border-b py-5 sm:flex-row">
            <div className="grid flex-1 gap-1">
              <Skeleton className="h-4 w-52" />
              <Skeleton className="h-3 w-64" />
            </div>
          </CardHeader>
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            {/* Big placeholder for the Area Chart */}
            <Skeleton className="h-[250px] w-full" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
