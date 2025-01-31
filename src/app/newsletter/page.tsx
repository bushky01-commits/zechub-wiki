"use client";

import React, { useState } from "react";
import QRCodeComponent from "./QRCodeComponent";

const Newsletter: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [unifiedAddress, setUnifiedAddress] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Ecosystem News");
  const [paymentUri, setPaymentUri] = useState<string | null>(null);
  const [isValidAddress, setIsValidAddress] = useState(false);

  // Unsubscribe State
  const [showUnsubscribe, setShowUnsubscribe] = useState(false);
  const [unsubscribeAddress, setUnsubscribeAddress] = useState("");
  const [isValidUnsubAddress, setIsValidUnsubAddress] = useState(false);
  const [unsubscribeUri, setUnsubscribeUri] = useState<string | null>(null);

  // Validate Subscription Address
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value.trim();
    setUnifiedAddress(address);
    setIsValidAddress(/^u|^z/.test(address)); // Address must start with "u" or "z"
  };

  // Validate Unsubscription Address
  const handleUnsubscribeAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value.trim();
    setUnsubscribeAddress(address);
    setIsValidUnsubAddress(/^u|^z/.test(address)); // Address must start with "u" or "z"
  };

  // Subscribe Function
  const handleSubmit = () => {
    if (!isValidAddress) {
      alert("Please enter a valid shielded Zcash address.");
      return;
    }

    const memo = `${selectedCategory} | Address: ${unifiedAddress}`;
    setPaymentUri(memo);
  };

  // Unsubscribe Function
  const handleUnsubscribe = () => {
    if (!isValidUnsubAddress) {
      alert("Please enter a valid shielded Zcash address.");
      return;
    }

    const memo = `UNSUBSCRIBE | Address: ${unsubscribeAddress}`;
    setUnsubscribeUri(memo);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">ZecHub Shielded Newsletter</h1>
      <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
        Subscribe to updates by entering your Unified Address.
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
        A one-time <strong>0.05 ZEC subscription fee</strong> is required to cover transaction costs.
      </p>

      {/* Subscribe Section */}
      <input
        type="text"
        placeholder="Enter your Zcash Unified Address"
        value={unifiedAddress}
        onChange={handleAddressChange}
        className={`w-full max-w-md mt-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
          isValidAddress ? "focus:ring-green-500 border-green-500" : "focus:ring-red-500 border-red-500"
        }`}
      />
      {unifiedAddress && !isValidAddress && (
        <p className="text-red-500 mt-2 text-sm">Invalid address. Must start with &quot;u&quot; or &quot;z&quot;.</p>
      )}

      <button
        onClick={handleSubmit}
        className={`mt-4 px-6 py-2 font-semibold rounded-lg ${
          isValidAddress
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!isValidAddress || loading}
      >
        {loading ? "Generating..." : "Subscribe"}
      </button>

      {/* QR Code Display */}
      {paymentUri && (
        <div className="mt-6 text-center">
          <QRCodeComponent memo={paymentUri} />
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            <strong>Do not edit the memo generated in your wallet.</strong>
          </p>
        </div>
      )}

      {/* Unsubscribe Section */}
      <div className="mt-16">
        <button
          onClick={() => setShowUnsubscribe(!showUnsubscribe)}
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
        >
          {showUnsubscribe ? "Cancel Unsubscribe" : "Unsubscribe"}
        </button>
      </div>

      {showUnsubscribe && (
        <div className="mt-6 text-center">
          <input
            type="text"
            placeholder="Enter your Unified Address to unsubscribe"
            value={unsubscribeAddress}
            onChange={handleUnsubscribeAddressChange}
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleUnsubscribe}
            className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
            disabled={!isValidUnsubAddress}
          >
            Confirm Unsubscribe
          </button>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
