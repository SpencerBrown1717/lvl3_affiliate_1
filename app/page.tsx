'use client'

import React, { useState, useEffect } from 'react';
import { Mail, Copy, DollarSign, Users, Clock, CheckCircle, AlertCircle, Zap, Target, TrendingUp } from 'lucide-react';

interface Notification {
  type: 'success' | 'error';
  message: string;
}

const AffiliatePortal = () => {
  const [currentStep, setCurrentStep] = useState('signup');
  const [email, setEmail] = useState('');
  const [userCount, setUserCount] = useState(247); // Simulated current users
  const [referralLink, setReferralLink] = useState('');
  const [stats, setStats] = useState({
    totalReferrals: 0,
    pendingReferrals: 0,
    completedReferrals: 0,
    totalEarnings: 0
  });
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const maxUsers = 500;
  const payoutAmount = 5;

  // Generate unique referral link
  const generateReferralLink = (email: string) => {
    const referralCode = btoa(email).replace(/[^a-zA-Z0-9]/g, '').substring(0, 8);
    return `https://lvl3.ai/ref/${referralCode}`;
  };

  // Simulate email sending
  const sendReferralEmail = (email: string, link: string) => {
    // In real app, this would call your email service
    console.log(`Sending email to ${email} with link: ${link}`);
    return Promise.resolve();
  };

  // Handle signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault?.();
    
    if (userCount >= maxUsers) {
      setNotifications([{
        type: 'error',
        message: 'Sorry! We\'ve reached our 500 user limit. Join the waitlist to be notified when spots open up.'
      }]);
      return;
    }

    if (!email || !email.includes('@')) {
      setNotifications([{
        type: 'error',
        message: 'Please enter a valid email address.'
      }]);
      return;
    }

    try {
      const link = generateReferralLink(email);
      await sendReferralEmail(email, link);
      
      setReferralLink(link);
      setUserCount(prev => prev + 1);
      setCurrentStep('dashboard');
      
      setNotifications([{
        type: 'success',
        message: 'Success! Check your email for your referral link.'
      }]);

      // Simulate some demo data
      setStats({
        totalReferrals: Math.floor(Math.random() * 5),
        pendingReferrals: Math.floor(Math.random() * 3),
        completedReferrals: Math.floor(Math.random() * 2),
        totalEarnings: Math.floor(Math.random() * 2) * payoutAmount
      });

    } catch (error) {
      setNotifications([{
        type: 'error',
        message: 'Something went wrong. Please try again.'
      }]);
    }
  };

  // Copy link to clipboard
  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setNotifications([{
      type: 'success',
      message: 'Referral link copied to clipboard!'
    }]);
  };

  // Clear notifications after 3 seconds
  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        setNotifications([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notifications]);

  const Notification = ({ type, message }: { type: string; message: string }) => (
    <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
      type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`}>
      <div className="flex items-center gap-2">
        {type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
        {message}
      </div>
    </div>
  );

  if (currentStep === 'signup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        {notifications.map((notif, index) => (
          <Notification key={index} type={notif.type} message={notif.message} />
        ))}
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-purple-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">LVL3.ai</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Earn $5 Per Referral
              </h1>
              <p className="text-gray-600">
                Join our B2B affiliate program. Share your link, earn money when businesses subscribe for 3+ months.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Target size={16} />
                  How it works:
                </h3>
                <ol className="text-sm text-gray-700 space-y-1">
                  <li>1. Enter your email below</li>
                  <li>2. Get your unique referral link via email</li>
                  <li>3. Share the link with B2B contacts</li>
                  <li>4. Earn $5 for each 3+ month subscriber</li>
                </ol>
              </div>

              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your business email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                >
                  Get My Referral Link
                </button>
              </form>

              <div className="text-center text-sm text-gray-500">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users size={16} />
                  {userCount} / {maxUsers} spots taken
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${(userCount / maxUsers) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {notifications.map((notif, index) => (
        <Notification key={index} type={notif.type} message={notif.message} />
      ))}
      
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">LVL3.ai Affiliate Dashboard</h1>
            </div>
            <div className="text-sm text-gray-600">
              Welcome back, {email}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Referrals</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalReferrals}</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending (3mo)</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pendingReferrals}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">{stats.completedReferrals}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold text-green-600">${stats.totalEarnings}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Mail size={20} />
              Your Referral Link
            </h2>
            <div className="flex gap-3">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
              />
              <button
                onClick={copyLink}
                className="px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
              >
                <Copy size={20} />
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Share this link with B2B contacts to earn $5 for each person who subscribes for 3+ months.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp size={20} />
              Recent Activity
            </h2>
            <div className="space-y-3">
              {stats.totalReferrals > 0 ? (
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-blue-500" />
                    <span className="text-sm text-gray-700">
                      Referral link was clicked today
                    </span>
                  </div>
                </div>
              ) : null}
              
              {stats.pendingReferrals > 0 ? (
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-yellow-500" />
                    <span className="text-sm text-gray-700">
                      {stats.pendingReferrals} referral{stats.pendingReferrals !== 1 ? 's' : ''} pending 3-month completion
                    </span>
                  </div>
                </div>
              ) : null}

              {stats.completedReferrals > 0 ? (
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <DollarSign size={16} className="text-green-500" />
                    <span className="text-sm text-gray-700">
                      Earned ${stats.completedReferrals * payoutAmount} from completed referrals
                    </span>
                  </div>
                </div>
              ) : null}

              {stats.totalReferrals === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Users size={48} className="mx-auto mb-3 opacity-30" />
                  <p>No referral activity yet.</p>
                  <p className="text-sm">Share your link to get started!</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Target size={20} />
            Program Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div>
              <strong>Payout:</strong> $5 per successful referral
            </div>
            <div>
              <strong>Requirement:</strong> 3+ month subscription
            </div>
            <div>
              <strong>Payment:</strong> Processed automatically after validation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliatePortal; 