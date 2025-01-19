"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function MasterDemographicsSkeleton() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-2 md:gap-6">
        {/* Title for previous test runs */}
        <Skeleton className="h-6 w-48 mb-2" />

        {/* Table Skeleton for "Previous Test Runs" */}
        <div className="overflow-x-auto w-[370px] md:w-full mb-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  {/* Simulate column headers */}
                  <TableHead>
                    <Skeleton className="h-4 w-16" />
                  </TableHead>
                  <TableHead>
                    <Skeleton className="h-4 w-16" />
                  </TableHead>
                  <TableHead>
                    <Skeleton className="h-4 w-20" />
                  </TableHead>
                  <TableHead>
                    <Skeleton className="h-4 w-14" />
                  </TableHead>
                  <TableHead>
                    <Skeleton className="h-4 w-16" />
                  </TableHead>
                  <TableHead>
                    <Skeleton className="h-4 w-16" />
                  </TableHead>
                  <TableHead>
                    <Skeleton className="h-4 w-16" />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Simulate a few rows of data */}
                {[...Array(3)].map((_, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Skeleton className="h-4 w-16" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-16" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-32" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-14" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-16" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-16" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-16" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Title for test results */}
        <Skeleton className="h-6 w-72 mb-2" />

        {/* Card with input + second table */}
        <Card className="shadow-none rounded-lg">
          <CardHeader>
            {/* First label + input field */}
            <div className="grid gap-3 mb-4">
              <Skeleton className="h-4 w-48" />
              <div>
                {/* We’ll mimic an input skeleton by layering a skeleton over the input container */}
                <Skeleton className="h-9 w-full" />
              </div>
            </div>

            {/* Second label + table */}
            <div className="grid gap-3">
              <Skeleton className="h-4 w-80" />

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <Skeleton className="h-4 w-10" />
                      </TableHead>
                      <TableHead>
                        <Skeleton className="h-4 w-16" />
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[...Array(2)].map((_, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <Skeleton className="h-4 w-6" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-64" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* If you have extra content in CardContent, you can skeletonize it here as well */}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
