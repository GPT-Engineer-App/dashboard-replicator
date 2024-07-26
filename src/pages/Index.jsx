// Update this page (the content is just a fallback if you fail to update the page)

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, CreditCard, Activity } from "lucide-react";

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'Jun', value: 239 },
  { name: 'Jul', value: 349 },
];

const Index = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Revenue" value="$45,231.89" icon={DollarSign} trend="up" percentage="20.1%" />
        <StatCard title="Subscriptions" value="2,350" icon={Users} trend="down" percentage="1.5%" />
        <StatCard title="Sales" value="12,234" icon={CreditCard} trend="up" percentage="12.5%" />
        <StatCard title="Active Users" value="1,234" icon={Activity} trend="up" percentage="4.3%" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentSalesTable />
        </CardContent>
      </Card>
    </div>
  );
};

const StatCard = ({ title, value, icon: Icon, trend, percentage }) => {
  const TrendIcon = trend === 'up' ? ArrowUpRight : ArrowDownRight;
  const trendColor = trend === 'up' ? 'text-green-600' : 'text-red-600';

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${trendColor} flex items-center`}>
          <TrendIcon className="h-4 w-4 mr-1" />
          {percentage}
        </p>
      </CardContent>
    </Card>
  );
};

const RecentSalesTable = () => {
  const sales = [
    { name: 'John Doe', email: 'john@example.com', amount: '$250.00' },
    { name: 'Jane Smith', email: 'jane@example.com', amount: '$120.00' },
    { name: 'Bob Johnson', email: 'bob@example.com', amount: '$350.00' },
    { name: 'Alice Brown', email: 'alice@example.com', amount: '$180.00' },
  ];

  return (
    <div className="space-y-8">
      {sales.map((sale, index) => (
        <div key={index} className="flex items-center">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium">{sale.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default Index;
