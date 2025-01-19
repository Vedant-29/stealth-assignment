"use client";
import React from "react";
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
import { ArrowUpDown, ChevronDown, ChevronDownIcon, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@radix-ui/react-dropdown-menu";


const data: PreviousTestRun[] = [
  {
    uuid: "cd0810cc-3ab8-4d0e-80c2-06f160f502f6",
    project_name: "medLLM",
    run_date: "2024-12-01",
    run_time: "00:00:00",
    run_by: "John Doe",
    run_duration: "0",
    description: "This dataset contains the test cases for evaluating the responses of a medical chatbot regarding the dosing of Eliquis for DVT/PE.",
  },
  {
    uuid: "cd0810cc-3ab8-4d0e-80c2-06f160f502f9",
    project_name: "medLLM",
    run_date: "2024-12-07",
    run_time: "09:17:37",
    run_by: "John Doe",
    run_duration: "0",
    description: "This dataset contains the test cases for evaluating the responses of a medical chatbot regarding the dosing of Eliquis for DVT/PE.",
  },
  {
    uuid: "cd0810cc-3ab8-4d0e-80c2-06f160f502f7",
    project_name: "medLLM",
    run_date: "2024-12-06",
    run_time: "21:27:17",
    run_by: "John Doe",
    run_duration: "0",
    description: "This dataset contains the test cases for evaluating the responses of a medical chatbot regarding the dosing of Eliquis for DVT/PE.",
  },
];

const data2: TestResults[] = [
  {
    case: 1,
    response: "The response provides general information about Eliquis dosage but does not specify the standard dosage for adults. It mentions that the dosage is determined by a doctor and varies based on the condition being treated, but it does not provide specific standard dosages for adults."
  },
  {
    case: 2,
    response: "The response does not specify the standard dosage of Eliquis for children. It only mentions the typical dosages and uses for adults, and it does not address pediatric dosing specifically."
  },
];

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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Run Date
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("run_date")}</div>,
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
