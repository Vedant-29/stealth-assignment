"use client";
import React, { useEffect, useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader} from "@/components/ui/card";
import { Label } from "@radix-ui/react-dropdown-menu";
import PreviousTestRunsSkeleton from "@/components/previous-test-runs-skeleton";

export type TestResults = {
  case: number;
  response: string;
}

export type PreviousTestRun = {
  uuid: string;
  project_name: string;
  run_date: string;
  run_time: string;
  run_by: string;
  run_duration: string;
  description: string;
};

export const columns2: ColumnDef<TestResults>[] = [
  {
    accessorKey: "case",
    header: "Case",
    cell: ({ row }) => <div className="capitalize">{row.getValue("case")}</div>,
  },
  {
    accessorKey: "response",
    header: "Response",
    cell: ({ row }) => <div className="capitalize">{row.getValue("response")}</div>,
  },
];

export const columns: ColumnDef<PreviousTestRun>[] = [
  {
    accessorKey: "uuid",
    header: "UUID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("uuid")}</div>
    ),
  },
  {
    accessorKey: "project_name",
    header: "Project Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("project_name")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "run_by",
    header: "Run By",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("run_by")}</div>
    ),
  },
  {
    accessorKey: "run_date",
    header: ({ column }: { column: any }) => (
      <Button
        variant="ghost"
        className="px-0"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Run Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }: { row: any }) => {
      const dateString = row.getValue("run_date");
      const date = new Date(dateString);
      const formattedDate = date.toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });
      return <div>{formattedDate || "N/A"}</div>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "run_time",
    header: "Run Time",
    cell: ({ row }) => <div className="lowercase">{row.getValue("run_time")}</div>,
  },
  {
    accessorKey: "run_duration",
    header: "Run Duration",
    cell: ({ row }) => <div className="lowercase">{row.getValue("run_duration")}</div>,
  },
]

export default function MasterDemographicsPage() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [data, setData] = useState<PreviousTestRun[]>([]);
  const [data2, setData2] = useState<TestResults[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/llm-results');
        const data = await response.json();

        setData(data.data.previous_test_runs);
        setData2(data.data.test_results.test_cases[0][0]);

      } catch (error) {
        console.error('Error fetching LLM results:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const table2 = useReactTable({
    data: data2,
    columns: columns2,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  if (isLoading) {
    return <PreviousTestRunsSkeleton />;
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-2 md:gap-6">
        <div className="font-semibold text-lg">Previous Test Runs</div>
        <div className="overflow-x-auto w-[370px] md:w-full mb-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="font-semibold text-lg">Test Results : <span className="font-normal">cd0810cc-3ab8-4d0e-80c2-06f160f502f7</span></div>
        <div className="w-full">
          <Card className="shadow-none rounded-lg">
            <CardHeader>
              <div className="grid gap-3">
                <Label className="text-sm font-medium">Select Main Question :-</Label>
                <div>
                  <Input
                    id="testResults"
                    name="testResults"
                    type="text"
                    className="w-full mb-4"
                    value="What should be the dose of eliquis"
                    readOnly
                  />
                </div>
              </div>
              <div className="grid gap-3">
                <Label className="text-sm font-medium">What is the recommended dosage for Eliquis?</Label>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      {table2.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                          {headerGroup.headers.map((header) => {
                            return (
                              <TableHead key={header.id}>
                                {header.isPlaceholder
                                  ? null
                                  : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                              </TableHead>
                            );
                          })}
                        </TableRow>
                      ))}
                    </TableHeader>
                    <TableBody>
                      {table2.getRowModel().rows?.length ? (
                        table2.getRowModel().rows.map((row) => (
                          <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                          >
                            {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell
                            colSpan={columns.length}
                            className="h-24 text-center"
                          >
                            No results.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
}
