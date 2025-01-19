"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CreditCard, DollarSign, TrendingUp } from "lucide-react";
import React from "react";
import { Area, AreaChart, CartesianGrid, Label, Pie, PieChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "cd0810cc", visitors: 81.9, fill: "var(--color-chrome)" },
  { browser: "cd0810cc", visitors: 19.1, fill: "var(--color-edge)" },
];

const chartData2 = [
  { browser: "cd0810cc", visitors: 85, fill: "var(--color-chrome)" },
  { browser: "cd0810cc", visitors: 75, fill: "var(--color-safari)" },
  { browser: "cd0810cc", visitors: 20, fill: "var(--color-firefox)" },
]

const chartConfig2 = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;


const chartData3 = [
  { question_number: 1, user1: 80, user2: 90, user3: 30 },
  { question_number: 2, user1: 95, user2: 85, user3: 85 },
  { question_number: 3, user1: 70, user2: 75, user3: 65 },
  { question_number: 4, user1: 85, user2: 90, user3: 75 },
  { question_number: 5, user1: 90, user2: 80, user3: 85 },
];

const chartConfig3 = {
  user1: {
    label: "cd0810cc",
    color: "hsl(var(--chart-1))",
  },
  user2: {
    label: "cd0810cc",
    color: "hsl(var(--chart-5))",
  },
  user3: {
    label: "cd0810cc",
    color: "hsl(var(--chart-3))",
  },
};

export default function MasterDemographicsPage() {

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-2 md:gap-6">
        <div className="font-semibold text-lg">LLM Results</div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Hallucination Rate
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-5xl font-bold">
                    32.0%
                  </div>
                </div>
                <p className="text-xs mt-4 text-muted-foreground">
                  Percentage of Hallucinations in Responses
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  LLM Drift Rate
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-5xl font-bold">
                    17.0%
                  </div>
                </div>
                <p className="text-xs mt-4 text-muted-foreground">
                  Percentage of LLM Drift in Responses
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Custom Metric 1
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-5xl font-bold">
                    91.0%
                  </div>
                </div>
                <p className="text-xs mt-4 text-muted-foreground">
                  Percentage of Custom Metric 1 in Responses
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Custom Metric 2
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-5xl font-bold">
                    97.0%
                  </div>
                </div>
                <p className="text-xs mt-4 text-muted-foreground">
                  Percentage of Custom Metric 2 in Responses
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="items-center pb-0">
                <CardTitle>Accuracy Distribution</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pb-0">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[250px]"
                >
                  <PieChart>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                      data={chartData}
                      dataKey="visitors"
                      nameKey="browser"
                      innerRadius={60}
                      strokeWidth={5}
                    >
                      <Label
                        content={({ viewBox }) => {
                          if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                              <text
                                x={viewBox.cx}
                                y={viewBox.cy}
                                textAnchor="middle"
                                dominantBaseline="middle"
                              >
                                <tspan
                                  x={viewBox.cx}
                                  y={viewBox.cy}
                                  className="fill-foreground text-3xl font-bold"
                                >
                                  81.9%
                                </tspan>
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 24}
                                  className="fill-muted-foreground"
                                >
                                  Accuracy
                                </tspan>
                              </text>
                            )
                          }
                        }}
                      />
                    </Pie>
                  </PieChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                  Showing total accuracy
                </div>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader className="items-center pb-0">
                <CardTitle>Accuracy by File</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pb-0">
                <ChartContainer
                  config={chartConfig2}
                  className=" mt-4 mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                >
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <Pie data={chartData2} dataKey="visitors" label nameKey="browser" />
                  </PieChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                  Showing accuracy for each question across users
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <Card>
          <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
            <div className="grid flex-1 gap-1 text-center sm:text-left">
              <CardTitle>Question-Wise Accuracy</CardTitle>
              <CardDescription>
                Showing accuracy for each question across users
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <ChartContainer
              config={chartConfig3}
              className="aspect-auto h-[250px] w-full"
            >
              <AreaChart data={chartData3}>
                <defs>
                  <linearGradient id="fillUser1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-user1)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--color-user1)" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="fillUser2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-user2)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--color-user2)" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="fillUser3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-user3)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--color-user3)" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="question_number"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) => `Question ${value}`} // Formats X-axis ticks
                />
                <ChartTooltip
                  cursor={false}

                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => `Question`} // Formats X-axis ticks
                      indicator="dot"
                    />
                  }
                />
                <Area
                  dataKey="user1"
                  type="natural"
                  fill="url(#fillUser1)"
                  stroke="var(--color-user1)"
                  stackId="a"
                />
                <Area
                  dataKey="user2"
                  type="natural"
                  fill="url(#fillUser2)"
                  stroke="var(--color-user2)"
                  stackId="a"
                />
                <Area
                  dataKey="user3"
                  type="natural"
                  fill="url(#fillUser3)"
                  stroke="var(--color-user3)"
                  stackId="a"
                />
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

      </main>
    </div>
  );
}
