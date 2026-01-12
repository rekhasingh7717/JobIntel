import { Referral } from '@/types';
import { mockJobs } from './mockData';

export interface AdminReferral {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  referrer: {
    id: string;
    name: string;
    email: string;
    company: string;
    verified: boolean;
  };
  seeker: {
    id: string;
    name: string;
    email: string;
  };
  status: 'pending' | 'in-progress' | 'submitted' | 'accepted' | 'rejected' | 'completed';
  price: number;
  commission: number;
  createdAt: string;
  updatedAt: string;
  proofUrl?: string;
  notes?: string;
}

// Empty referrals - add real data here
export const adminReferrals: AdminReferral[] = [];
  },
  {
    id: 'ref-4',
    jobId: '3',
    jobTitle: 'Product Manager - AI/ML',
    company: 'Meta',
    referrer: {
      id: 'emp-4',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@meta.com',
      company: 'Meta',
      verified: false,
    },
    seeker: {
      id: 'user-4',
      name: 'Alex Brown',
      email: 'alex.brown@example.com',
    },
    status: 'submitted',
    price: 6000,
    commission: 600,
    createdAt: '2024-01-18T12:00:00Z',
    updatedAt: '2024-01-21T16:00:00Z',
    proofUrl: 'https://example.com/proof/ref-4.pdf',
  },
  {
    id: 'ref-5',
    jobId: '6',
    jobTitle: 'Software Engineer - New Grad 2024',
    company: 'Microsoft',
    referrer: {
      id: 'emp-5',
      name: 'Neha Gupta',
      email: 'neha.gupta@microsoft.com',
      company: 'Microsoft',
      verified: true,
    },
    seeker: {
      id: 'user-5',
      name: 'Chris Lee',
      email: 'chris.lee@example.com',
    },
    status: 'accepted',
    price: 3000,
    commission: 300,
    createdAt: '2024-01-12T08:00:00Z',
    updatedAt: '2024-01-22T10:00:00Z',
  },
  {
    id: 'ref-6',
    jobId: '1',
    jobTitle: 'Senior Frontend Engineer',
    company: 'Google',
    referrer: {
      id: 'emp-1',
      name: 'Rahul Sharma',
      email: 'rahul.sharma@google.com',
      company: 'Google',
      verified: true,
    },
    seeker: {
      id: 'user-6',
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
    },
    status: 'rejected',
    price: 5000,
    commission: 0,
  },
];

// Empty referral stats - add real data here
export const referralStats = {
  totalReferrals: 0,
  pendingReferrals: 0,
  completedReferrals: 0,
  totalRevenue: 0,
  totalCommissions: 0,
  avgReferralPrice: 0,
  successRate: 0,
  verifiedReferrers: 0,
};
