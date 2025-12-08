import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Utility for red/green text
const textColor = (value: string) =>
  value.startsWith("-")
    ? "text-red-600 dark:text-red-400"
    : "text-green-600 dark:text-green-400";

// Arrow Icon
const Arrow = ({ negative }: { negative: boolean }) => (
  <span
    className={
      negative
        ? "text-red-600 dark:text-red-400"
        : "text-green-600 dark:text-green-400"
    }
  >
    {negative ? "▼" : "▲"}
  </span>
);

/* ----------------------------------------------------
   1. Market Opportunity Table
---------------------------------------------------- */
export function MarketOpportunityTable() {
  const data = [
    {
      category: "Machinery and Electrical Equipment",
      juneValue: "P1,064.2 million",
      projection: "P12.77 billion",
      opportunity: "Spare parts",
    },
    {
      category: "Metals and Metal products",
      juneValue: "P376.4 million",
      projection: "P4.52 billion",
      opportunity: "Parts Fabrication",
    },
    {
      category: "Vehicles and Transport equipment",
      juneValue: "P562.9 million",
      projection: "P6.75 billion",
      opportunity: "Custom parts",
    },
  ];

  return (
    <div className="border rounded-md my-6">
      <Table>
        <TableCaption>Source: IMTS Monthly Digest – June 2025</TableCaption>

        <TableHeader>
          <TableRow className="bg-primary/10 dark:bg-primary/20">
            <TableHead>Category</TableHead>
            <TableHead>June 2025 Value</TableHead>
            <TableHead>Annual Projection</TableHead>
            <TableHead className="text-right">Opportunity</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.category}
              className="hover:bg-muted/50 transition-colors"
            >
              <TableCell className="font-medium">{item.category}</TableCell>
              <TableCell>{item.juneValue}</TableCell>
              <TableCell>{item.projection}</TableCell>
              <TableCell className="text-right">{item.opportunity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

/* ----------------------------------------------------
   2. FIXED ASSETS TABLE
---------------------------------------------------- */
export function FixedAssetsTable() {
  const assets = [
    { name: "CNC Milling Machine", cost: "P 282 520" },
    { name: "Industrial 3D Printer", cost: "P 46 646" },
    { name: "PCB Equipment", cost: "P 35 000" },
    { name: "Computers and Phone Lines", cost: "P 21 000" },
    { name: "Furniture", cost: "P 12 000" },
    { name: "Safety Equipment", cost: "P 15 000" },
  ];

  return (
    <div className="border rounded-md my-6">
      <Table>
        <TableCaption>Fixed Assets</TableCaption>

        <TableHeader>
          <TableRow className="bg-primary/10 dark:bg-primary/20">
            <TableHead>Asset</TableHead>
            <TableHead className="text-right">Cost</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {assets.map((item) => (
            <TableRow
              key={item.name}
              className="hover:bg-muted/50 transition-colors"
            >
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="text-right">{item.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell className="text-right font-bold">P 412 166</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

/* ----------------------------------------------------
   3. MONTHLY EXPENSES
---------------------------------------------------- */
export function MonthlyExpensesTable() {
  const expenses = [
    { name: "Utilities (Electricity & Water)", cost: "P 8 000" },
    { name: "Staff Training & Safety Wear", cost: "P 15 000" },
    { name: "Lease / Rent", cost: "P 36 000" },
    { name: "Raw Materials", cost: "P 12 000" },
    { name: "Insurance", cost: "P 1 800" },
    { name: "Carriage", cost: "P 6 000" },
    { name: "Salaries", cost: "P 17 500" },
    { name: "Owner Salary", cost: "P 8 000" },
    { name: "Miscellaneous", cost: "P 3 500" },
    { name: "Loans", cost: "P 9 570" },
  ];

  return (
    <div className="border rounded-md my-6">
      <Table>
        <TableCaption>Monthly Operating Expenses</TableCaption>

        <TableHeader>
          <TableRow className="bg-primary/10 dark:bg-primary/20">
            <TableHead>Expense</TableHead>
            <TableHead className="text-right">Cost</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {expenses.map((item) => (
            <TableRow
              key={item.name}
              className="hover:bg-muted/50 transition-colors"
            >
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="text-right">{item.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell>Total Monthly</TableCell>
            <TableCell className="text-right font-bold">P 104 870</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

/* ----------------------------------------------------
   4. REVENUE PROJECTIONS TABLE
---------------------------------------------------- */
export function RevenueProjectionsTable() {
  const data = [
    {
      service: "CNC Machined Parts",
      price: "P 2 200",
      orders: 20,
      monthly: "P 44 000",
      annual: "P 528 000",
    },
    {
      service: "PCB Printing",
      price: "P 1 200",
      orders: 10,
      monthly: "P 12 000",
      annual: "P 144 000",
    },
    {
      service: "Prototyping",
      price: "P 800",
      orders: 8,
      monthly: "P 6 400",
      annual: "P 76 800",
    },
  ];

  return (
    <div className="border rounded-md my-6">
      <Table>
        <TableCaption>Revenue Year 1</TableCaption>

        <TableHeader>
          <TableRow className="bg-primary/10 dark:bg-primary/20">
            <TableHead>Service</TableHead>
            <TableHead className="text-right">Unit Price</TableHead>
            <TableHead className="text-right">Orders/mo</TableHead>
            <TableHead className="text-right">Monthly</TableHead>
            <TableHead className="text-right">Annual</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.service}
              className="hover:bg-muted/50 transition-colors"
            >
              <TableCell className="font-medium">{item.service}</TableCell>
              <TableCell className="text-right">{item.price}</TableCell>
              <TableCell className="text-right">{item.orders}</TableCell>
              <TableCell className="text-right">{item.monthly}</TableCell>
              <TableCell className="text-right">{item.annual}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total Year 1 Revenue</TableCell>
            <TableCell className="text-right font-bold">P 748 000</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

/* ----------------------------------------------------
   5. NET PROFIT & ROI
---------------------------------------------------- */
export function NetProfitTable() {
  const data = [
    {
      year: 1,
      revenue: "748 800",
      expenses: "1 258 440",
      net: "-509 640",
      roi: "-69.8%",
    },
    {
      year: 2,
      revenue: "1 100 000",
      expenses: "1 258 440",
      net: "-158 440",
      roi: "-21.7%",
    },
    {
      year: 3,
      revenue: "1 500 000",
      expenses: "1 321 362",
      net: "178 638",
      roi: "24.5%",
    },
    {
      year: 4,
      revenue: "1 800 000",
      expenses: "1 359 115",
      net: "440 885",
      roi: "60.4%",
    },
    {
      year: 5,
      revenue: "2 100 000",
      expenses: "1 384 284",
      net: "715 716",
      roi: "98.0%",
    },
  ];

  return (
    <div className="border rounded-md my-6">
      <Table>
        <TableCaption>Net Profit & ROI (5 Years)</TableCaption>

        <TableHeader>
          <TableRow className="bg-primary/10 dark:bg-primary/20">
            <TableHead>Year</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead>Expenses</TableHead>
            <TableHead>Net Profit</TableHead>
            <TableHead className="text-right">ROI</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.year}
              className="hover:bg-muted/50 transition-colors"
            >
              <TableCell className="font-medium">{item.year}</TableCell>
              <TableCell>{item.revenue}</TableCell>
              <TableCell>{item.expenses}</TableCell>

              <TableCell className={`font-semibold ${textColor(item.net)}`}>
                <Arrow negative={item.net.startsWith("-")} /> {item.net}
              </TableCell>

              <TableCell
                className={`text-right font-semibold ${textColor(item.roi)}`}
              >
                {item.roi}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

/* ----------------------------------------------------
   6. NPV TABLE
---------------------------------------------------- */
export function NPVTable() {
  const data = [
    { year: 1, cashFlow: "-509 640", pv: "0.9091", present: "-463 309" },
    { year: 2, cashFlow: "-158 440", pv: "0.8264", present: "-130 908" },
    { year: 3, cashFlow: "178 638", pv: "0.7513", present: "134 210" },
    { year: 4, cashFlow: "440 885", pv: "0.6830", present: "301 924" },
    { year: 5, cashFlow: "715 716", pv: "0.6209", present: "444 676" },
  ];

  return (
    <div className="border rounded-md my-6">
      <Table>
        <TableCaption>NPV Calculation (10% Discount Rate)</TableCaption>

        <TableHeader>
          <TableRow className="bg-primary/10 dark:bg-primary/20">
            <TableHead>Year</TableHead>
            <TableHead>Cash Flow</TableHead>
            <TableHead>PV Factor</TableHead>
            <TableHead className="text-right">Present Value</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.year}
              className="hover:bg-muted/50 transition-colors"
            >
              <TableCell className="font-medium">{item.year}</TableCell>

              <TableCell className={textColor(item.cashFlow)}>
                <Arrow negative={item.cashFlow.startsWith("-")} />{" "}
                {item.cashFlow}
              </TableCell>

              <TableCell>{item.pv}</TableCell>

              <TableCell
                className={`text-right font-semibold ${textColor(item.present)}`}
              >
                <Arrow negative={item.present.startsWith("-")} /> {item.present}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>NPV</TableCell>
            <TableCell className="text-right font-bold text-red-600 dark:text-red-400">
              -P 1 365 173
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
