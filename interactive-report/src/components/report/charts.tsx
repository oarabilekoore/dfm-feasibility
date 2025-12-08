import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

// Register all necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
);

// Define standard colors
const PRIMARY_COLOR = "rgba(75, 192, 192, 0.6)";
const DANGER_COLOR = "rgba(255, 99, 132, 0.6)";
const SUCCESS_COLOR = "rgba(54, 162, 235, 0.6)";
const PIE_COLORS = [
  "rgba(255, 99, 132, 0.6)",
  "rgba(54, 162, 235, 0.6)",
  "rgba(255, 206, 86, 0.6)",
  "rgba(75, 192, 192, 0.6)",
  "rgba(153, 102, 255, 0.6)",
  "rgba(255, 159, 64, 0.6)",
  "rgba(199, 199, 199, 0.6)",
];

// ---

/* ----------------------------------------------------
   1. Market Opportunity Table -> BAR CHART
---------------------------------------------------- */
export function MarketOpportunityChart() {
  const data = [
    { category: "Machinery", projection: 12.77 },
    { category: "Metals", projection: 4.52 },
    { category: "Vehicles", projection: 6.75 },
  ];

  const chartData = {
    labels: data.map((d) => d.category),
    datasets: [
      {
        label: "Annual Projection (Billion P)",
        data: data.map((d) => d.projection),
        backgroundColor: PRIMARY_COLOR,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Annual Market Opportunity Projection (P Billion)",
      },
    },
  };

  return (
    <div className="my-6 w-full h-[350px]">
      <Bar data={chartData} options={options} />
    </div>
  );
}

// ---

/* ----------------------------------------------------
   2. FIXED ASSETS TABLE -> PIE CHART
---------------------------------------------------- */
export function FixedAssetsChart() {
  const data = [
    { name: "CNC Milling Machine", cost: 282520 },
    { name: "Industrial 3D Printer", cost: 46646 },
    { name: "PCB Equipment", cost: 35000 },
    { name: "Computers & Phones", cost: 21000 },
    { name: "Furniture", cost: 12000 },
    { name: "Safety Equipment", cost: 15000 },
  ];

  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        label: "Cost (P)",
        data: data.map((d) => d.cost),
        backgroundColor: PIE_COLORS.slice(0, data.length),
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Fixed Assets Cost Distribution",
      },
      legend: {
        position: "right",
      },
    },
  };

  return (
    <div className="my-6 w-full h-[400px]">
      <Pie data={chartData} options={options} />
    </div>
  );
}

// ---

/* ----------------------------------------------------
   3. MONTHLY EXPENSES -> PIE CHART
---------------------------------------------------- */
export function MonthlyExpensesChart() {
  const data = [
    { name: "Lease / Rent", cost: 36000 },
    { name: "Staff Training & Safety", cost: 15000 },
    { name: "Raw Materials", cost: 12000 },
    { name: "Utilities", cost: 8000 },
    { name: "Salaries", cost: 17500 },
    { name: "Loans", cost: 9570 },
    { name: "Other", cost: 1800 + 6000 + 8000 + 3500 },
  ];

  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        label: "Cost (P)",
        data: data.map((d) => d.cost),
        backgroundColor: PIE_COLORS.slice(0, data.length),
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Monthly Operating Expenses Distribution (P)",
      },
      legend: {
        position: "right",
      },
    },
  };

  return (
    <div className="my-6 w-full h-[400px]">
      <Pie data={chartData} options={options} />
    </div>
  );
}

// ---

/* ----------------------------------------------------
   4. REVENUE PROJECTIONS TABLE -> BAR CHART
---------------------------------------------------- */
export function RevenueProjectionsChart() {
  const data = [
    { service: "CNC Machined Parts", annual: 528000 },
    { service: "PCB Printing", annual: 144000 },
    { service: "Prototyping", annual: 76800 },
  ];

  const chartData = {
    labels: data.map((d) => d.service),
    datasets: [
      {
        label: "Annual Revenue (P)",
        data: data.map((d) => d.annual),
        backgroundColor: SUCCESS_COLOR,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Annual Revenue Projection by Service (P)",
      },
    },
  };

  return (
    <div className="my-6 w-full h-[350px]">
      <Bar data={chartData} options={options} />
    </div>
  );
}

// ---

/* ----------------------------------------------------
   5. NET PROFIT & ROI -> LINE CHART
---------------------------------------------------- */
export function NetProfitChart() {
  const data = [
    { year: 1, net: -509640 },
    { year: 2, net: -158440 },
    { year: 3, net: 178638 },
    { year: 4, net: 440885 },
    { year: 5, net: 715716 },
  ];

  const chartData = {
    labels: data.map((d) => `Year ${d.year}`),
    datasets: [
      {
        label: "Net Profit (P)",
        data: data.map((d) => d.net),
        borderColor: PRIMARY_COLOR,
        backgroundColor: PRIMARY_COLOR,
        tension: 0.4,
        pointBackgroundColor: data.map((d) =>
          d.net < 0 ? DANGER_COLOR : SUCCESS_COLOR,
        ), // Custom color for negative/positive points
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "5-Year Net Profit Trend (P)",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (value) {
            return `P ${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="my-6 w-full h-[400px]">
      <Line data={chartData} options={options} />
    </div>
  );
}

// ---

/* ----------------------------------------------------
   6. NPV TABLE -> BAR CHART (Present Value)
---------------------------------------------------- */
export function NPVChart() {
  const data = [
    { year: 1, present: -463309 },
    { year: 2, present: -130908 },
    { year: 3, present: 134210 },
    { year: 4, present: 301924 },
    { year: 5, present: 444676 },
  ];

  const chartData = {
    labels: data.map((d) => `Year ${d.year}`),
    datasets: [
      {
        label: "Present Value (P)",
        data: data.map((d) => d.present),
        // Custom color for bars (Red for negative, Blue for positive)
        backgroundColor: data.map((d) =>
          d.present < 0 ? DANGER_COLOR : SUCCESS_COLOR,
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Annual Present Value of Cash Flows (P)",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (value) {
            return `P ${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="my-6 w-full h-[350px]">
      <Bar data={chartData} options={options} />
    </div>
  );
}
