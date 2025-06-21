import React, { useState } from 'react';
import { CreditCard, Landmark, Wallet, CheckCircle } from 'lucide-react';

const Payment = ({ formData, onBack }) => {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedBank, setSelectedBank] = useState('');
  const [accountDetails, setAccountDetails] = useState({
    accountNumber: '',
    ifsc: '',
    accountHolder: '',
  });

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  // Progress Bar
  const ProgressBar = () => (
    <div className="flex items-center justify-center mb-8">
      {["Application", "Payment", "Confirmation"].map((step, idx) => (
        <React.Fragment key={step}>
          <div className={`flex items-center ${idx < 2 ? "mr-4" : ""}`}>
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-white ${
                (isSuccess && idx <= 2) || (!isSuccess && idx === 0)
                  ? "bg-purple-600"
                  : "bg-gray-300"
              }`}
            >
              {idx + 1}
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700">{step}</span>
          </div>
          {idx < 2 && (
            <div className="w-8 h-1 bg-gray-200 rounded-full mx-2" />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-2xl border border-purple-100 animate-fade-in">
          <div className="text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 animate-bounce" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Payment Successful!</h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for your application. We will review your details and get back to you soon.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900">Application Details</h3>
              <dl className="mt-2 space-y-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="text-sm text-gray-900">{formData.name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Domain</dt>
                  <dd className="text-sm text-gray-900">{formData.domain}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Amount Paid</dt>
                  <dd className="text-sm text-gray-900">₹999</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto pt-12">
        <div className="bg-white rounded-2xl shadow-2xl border border-purple-100 overflow-hidden">
          <div className="p-8">
            <ProgressBar />
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Complete Your Application</h2>
              <p className="mt-2 text-gray-600 text-lg font-semibold">Application Fee: <span className="text-purple-600 font-bold">₹999</span></p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Payment Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => setSelectedMethod('card')}
                  className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200 shadow-sm ${
                    selectedMethod === 'card'
                      ? 'border-purple-600 bg-purple-50 scale-105'
                      : 'border-gray-200 bg-white hover:border-purple-300'
                  }`}
                >
                  <CreditCard className="h-8 w-8 text-purple-600 mb-2" />
                  <div className="font-medium text-gray-900">Card</div>
                  <div className="text-xs text-gray-500">Credit/Debit</div>
                </button>
                <button
                  onClick={() => setSelectedMethod('upi')}
                  className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200 shadow-sm ${
                    selectedMethod === 'upi'
                      ? 'border-purple-600 bg-purple-50 scale-105'
                      : 'border-gray-200 bg-white hover:border-purple-300'
                  }`}
                >
                  <Wallet className="h-8 w-8 text-purple-600 mb-2" />
                  <div className="font-medium text-gray-900">UPI</div>
                  <div className="text-xs text-gray-500">Any UPI App</div>
                </button>
                <button
                  onClick={() => setSelectedMethod('netbanking')}
                  className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200 shadow-sm ${
                    selectedMethod === 'netbanking'
                      ? 'border-purple-600 bg-purple-50 scale-105'
                      : 'border-gray-200 bg-white hover:border-purple-300'
                  }`}
                >
                  <Landmark className="h-8 w-8 text-purple-600 mb-2" />
                  <div className="font-medium text-gray-900">Net Banking</div>
                  <div className="text-xs text-gray-500">Bank Account</div>
                </button>
              </div>
            </div>

            {/* Card Payment */}
            {selectedMethod === 'card' && (
              <form onSubmit={handlePayment} className="space-y-6 animate-fade-in">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      placeholder="MM/YY"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      placeholder="123"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={onBack}
                    className="text-purple-600 hover:text-purple-500 font-medium"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
                  >
                    {isProcessing ? 'Processing...' : 'Pay ₹999'}
                  </button>
                </div>
              </form>
            )}

            {/* UPI Payment */}
            {selectedMethod === 'upi' && (
              <form onSubmit={handlePayment} className="space-y-6 animate-fade-in">
                <div>
                  <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    id="upiId"
                    placeholder="yourname@upi"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={onBack}
                    className="text-purple-600 hover:text-purple-500 font-medium"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
                  >
                    {isProcessing ? 'Processing...' : 'Pay ₹999'}
                  </button>
                </div>
              </form>
            )}

            {/* Net Banking */}
            {selectedMethod === 'netbanking' && (
              <form onSubmit={handlePayment} className="space-y-6 animate-fade-in">
                <div>
                  <label htmlFor="bank" className="block text-sm font-medium text-gray-700">
                    Select Bank
                  </label>
                  <select
                    id="bank"
                    value={selectedBank}
                    onChange={e => setSelectedBank(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    required
                  >
                    <option value="">Select your bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                  </select>
                </div>
                {selectedBank && (
                  <>
                    <div>
                      <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                        Account Number
                      </label>
                      <input
                        type="text"
                        id="accountNumber"
                        value={accountDetails.accountNumber}
                        onChange={e => setAccountDetails({ ...accountDetails, accountNumber: e.target.value })}
                        placeholder="Enter your account number"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="ifsc" className="block text-sm font-medium text-gray-700">
                        IFSC Code
                      </label>
                      <input
                        type="text"
                        id="ifsc"
                        value={accountDetails.ifsc}
                        onChange={e => setAccountDetails({ ...accountDetails, ifsc: e.target.value })}
                        placeholder="Enter IFSC code"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="accountHolder" className="block text-sm font-medium text-gray-700">
                        Account Holder Name
                      </label>
                      <input
                        type="text"
                        id="accountHolder"
                        value={accountDetails.accountHolder}
                        onChange={e => setAccountDetails({ ...accountDetails, accountHolder: e.target.value })}
                        placeholder="Enter account holder name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                        required
                      />
                    </div>
                  </>
                )}
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={onBack}
                    className="text-purple-600 hover:text-purple-500 font-medium"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
                  >
                    {isProcessing ? 'Processing...' : 'Pay ₹999'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;