import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">FinanceHub</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <p className="text-gray-500 text-sm">Total Balance</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">$12,345.67</p>
            <p className="text-green-600 text-sm font-medium mt-2">+2.5% from last month</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <p className="text-gray-500 text-sm">Monthly Income</p>
            <p className="text-3xl font-bold text-green-600 mt-2">$5,000.00</p>
            <p className="text-green-600 text-sm font-medium mt-2">+5.2% from last month</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <p className="text-gray-500 text-sm">Monthly Spending</p>
            <p className="text-3xl font-bold text-red-600 mt-2">$2,150.00</p>
            <p className="text-red-600 text-sm font-medium mt-2">-1.8% from last month</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            <div className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
              <div>
                <p className="font-medium text-gray-900">Grocery Store</p>
                <p className="text-sm text-gray-500">Today</p>
              </div>
              <p className="font-semibold text-red-600">-$47.32</p>
            </div>
            
            <div className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
              <div>
                <p className="font-medium text-gray-900">Salary Deposit</p>
                <p className="text-sm text-gray-500">Yesterday</p>
              </div>
              <p className="font-semibold text-green-600">+$5,000.00</p>
            </div>
            
            <div className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
              <div>
                <p className="font-medium text-gray-900">Netflix Subscription</p>
                <p className="text-sm text-gray-500">Sep 5</p>
              </div>
              <p className="font-semibold text-red-600">-$15.99</p>
            </div>
            
            <div className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
              <div>
                <p className="font-medium text-gray-900">Gas Station</p>
                <p className="text-sm text-gray-500">Sep 4</p>
              </div>
              <p className="font-semibold text-red-600">-$52.45</p>
            </div>
          </div>
          
          <div className="px-6 py-4 bg-gray-50 text-center">
            <button className="text-blue-600 font-medium hover:text-blue-700">View All Transactions</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;