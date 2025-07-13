# LVL3.ai - B2B Affiliate Marketing Portal

A modern, responsive affiliate marketing portal built with Next.js, TypeScript, and Tailwind CSS. This application allows businesses to join LVL3.ai's affiliate program and earn $5 for each successful referral.

## Features

- **Modern UI/UX**: Clean, professional design with purple/blue gradient theme
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **User Registration**: Simple email-based signup process
- **Referral Link Generation**: Unique referral links for each affiliate
- **Dashboard Analytics**: Track referrals, pending payments, and earnings
- **Real-time Notifications**: Success/error notifications with auto-dismiss
- **Copy to Clipboard**: Easy sharing of referral links
- **User Limit Management**: 500 user limit with visual progress indicator

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **Vercel**: Deployment platform

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/lvl3-affiliate-portal.git
cd lvl3-affiliate-portal
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Deployment

```bash
npm run build
# Deploy the .next folder to your hosting provider
```

## How It Works

1. **Signup**: Users enter their business email address
2. **Email Delivery**: System generates a unique referral link and sends it via email
3. **Sharing**: Users share their referral link with B2B contacts
4. **Tracking**: System tracks referral clicks and conversions
5. **Payout**: $5 payout for each referral that subscribes for 3+ months

## Program Details

- **Payout**: $5 per successful referral
- **Requirement**: 3+ month subscription from referred user
- **Payment**: Processed automatically after validation
- **User Limit**: Maximum 500 affiliates

## Customization

### Branding
- Update colors in `tailwind.config.js`
- Modify the LVL3.ai logo and branding in `app/page.tsx`
- Update metadata in `app/layout.tsx`

### Email Integration
- Replace the `sendReferralEmail` function with your email service (SendGrid, Mailgun, etc.)
- Add environment variables for API keys

### Backend Integration
- Connect to your database for user management
- Implement real referral tracking
- Add payment processing

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@lvl3.ai or create an issue in this repository.
