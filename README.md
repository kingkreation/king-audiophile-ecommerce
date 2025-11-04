# Audiophile E-Commerce

A modern e-commerce web application for premium audio equipment built with Next.js, TypeScript, Tailwind CSS, Convex, and Resend.

## Features

- 🛍️ Product browsing by category (Headphones, Speakers, Earphones)
- 📦 Detailed product pages with galleries
- 🛒 Shopping cart functionality
- 💳 Checkout process with form validation
- 📧 Order confirmation emails via Resend
- 📱 Responsive design
- 🎨 Audiophile-inspired UI with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Convex (Backend-as-a-Service)
- **Email**: Resend API
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 20+ installed
- Convex account (sign up at [convex.dev](https://convex.dev))
- Resend account (sign up at [resend.com](https://resend.com))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd audiophile-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Copy `.env.local.example` to `.env.local` and fill in your credentials:

```env
# Convex Configuration
NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url

# Resend API Key
RESEND_API_KEY=your_resend_api_key
```

### Setting up Convex

1. Install Convex CLI globally (if not already installed):
```bash
npm install -g convex
```

2. Login to Convex:
```bash
npx convex login
```

3. Initialize Convex in your project:
```bash
npx convex dev
```

This will:
- Create a new Convex project (or connect to an existing one)
- Generate the `NEXT_PUBLIC_CONVEX_URL` for your `.env.local`
- Start the Convex development server
- Generate TypeScript types for your Convex functions

4. Keep the Convex dev server running in a separate terminal

### Setting up Resend

1. Sign up for a Resend account at [resend.com](https://resend.com)
2. Generate an API key from your Resend dashboard
3. Add the API key to your `.env.local` file as `RESEND_API_KEY`

### Running the Development Server

In a separate terminal from Convex dev:

```bash
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) to view the application.

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── [category]/          # Dynamic category routes
│   ├── api/                 # API routes
│   ├── checkout/            # Checkout page
│   ├── headphones/          # Headphones category
│   ├── speakers/            # Speakers category
│   ├── earphones/           # Earphones category
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── CartModal.tsx
│   └── ...
├── convex/                  # Convex backend
│   ├── schema.ts            # Database schema
│   ├── products.ts          # Product queries/mutations
│   ├── cart.ts              # Cart queries/mutations
│   └── orders.ts            # Order queries/mutations
├── lib/                     # Utility functions and data
│   ├── data/                # Static data
│   ├── hooks/               # Custom React hooks
│   ├── CartContext.tsx      # Cart context provider
│   └── resend.ts            # Resend email service
└── public/                  # Static assets

```

## Key Features Implementation

### Shopping Cart

The shopping cart uses React Context API for state management and can be integrated with Convex for persistence.

### Checkout Flow

1. User fills out shipping and payment information
2. Order is created in Convex database
3. Confirmation email is sent via Resend
4. Order confirmation modal is displayed

### Email Notifications

Order confirmation emails are sent using the Resend API with a custom HTML template matching the Audiophile brand.

## Database Schema

The Convex schema includes:

- **Products**: Product information, pricing, images, and details
- **Cart**: User cart items
- **Orders**: Order history with items and shipping information

## Deployment

### Deploy to Replit

This project is configured to run on Replit. The dev server runs on port 5000.

### Deploy Convex to Production

```bash
npx convex deploy
```

Update your production environment variables with the production Convex URL.

## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_CONVEX_URL`: Your Convex deployment URL
- `RESEND_API_KEY`: Your Resend API key

## Contributing

This is a portfolio/learning project. Feel free to fork and customize!

## License

MIT License - feel free to use this project for learning purposes.

## Acknowledgments

- Design inspired by Frontend Mentor's Audiophile challenge
- Built with modern web technologies for optimal performance
