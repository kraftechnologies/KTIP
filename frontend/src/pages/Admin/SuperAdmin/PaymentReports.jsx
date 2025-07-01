import React, { useState } from 'react';
import SuperAdminLayout from './Layout.jsx';
import { DollarSign, Download, CreditCard, TrendingUp } from 'lucide-react';

const PaymentReports = () => {
  const [dateRange, setDateRange] = useState('month');
  
  const financialData = {
    totalRevenue: 45000,
    monthlyGrowth: 12.5,
    activeSubscriptions: 320,
    refundRequests: 5
  };

  const transactions = [
    { id: '1', user: 'John Doe', amount: 299, course: 'React Masterclass', date: '2024-01-15', status: 'completed' },
    { id: '2', user: 'Jane Smith', amount: 199, course: 'Node.js Basics', date: '2024-01-14', status: 'completed' },
    { id: '3', user: 'Mike Johnson', amount: 399, course: 'Full Stack Bundle', date: '2024-01-13', status: 'pending' }
  ];

  return (
    <SuperAdminLayout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Financial Reports</h1>
          <button className="bg-[#7B2FF2] text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Download size={18} />
            Export Report
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold">${financialData.totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="text-green-500" size={32} />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Monthly Growth</p>
                <p className="text-2xl font-bold">{financialData.monthlyGrowth}%</p>
              </div>
              <TrendingUp className="text-blue-500" size={32} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Active Subscriptions</p>
                <p className="text-2xl font-bold">{financialData.activeSubscriptions}</p>
              </div>
              <CreditCard className="text-purple-500" size={32} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Refund Requests</p>
                <p className="text-2xl font-bold">{financialData.refundRequests}</p>
              </div>
              <DollarSign className="text-red-500" size={32} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{transaction.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.course}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${transaction.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default PaymentReports;