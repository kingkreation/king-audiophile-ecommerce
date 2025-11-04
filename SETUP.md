# Audiophile E-Commerce Setup Guide

This document provides instructions for setting up and running the Audiophile e-commerce application.

## Prerequisites

Before you begin, ensure you have:
- Node.js 20+ installed
- A Convex account ([sign up at convex.dev](https://convex.dev))
- A Resend account ([sign up at resend.com](https://resend.com))

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Convex

The Convex backend provides real-time data synchronization for products, cart, and orders.

```bash
# Install Convex CLI globally (if not already installed)
npm install -g convex

# Login to Convex
npx convex login

# Initialize and start Convex dev server
npx convex dev
```

This will:
- Create a new Convex project (or connect to an existing one)
- Generate the `NEXT_PUBLIC_CONVEX_URL` for your `.env.local`
- Start the Convex development server
- Generate TypeScript types for your Convex functions

**Important**: Keep the Convex dev server running in a separate terminal window.

### 3. Set up Resend

Resend handles transactional emails for order confirmations.

1. Sign up at [resend.com](https://resend.com)
2. Generate an API key from your dashboard
3. Add the API key to your `.env.local` file

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Convex Configuration (from `npx convex dev`)
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

# Resend API Key (from resend.com dashboard)
RESEND_API_KEY=re_your_api_key_here
```

### 5. Add Product Images

The application references product images in the `/public/assets` directory. You'll need to add these images to make the site fully functional.

**Required Directory Structure:**
```
public/
├── assets/
│   ├── shared/
│   │   └── desktop/
│   │       ├── image-best-gear.jpg
│   │       ├── image-category-thumbnail-headphones.png
│   │       ├── image-category-thumbnail-speakers.png
│   │       └── image-category-thumbnail-earphones.png
│   ├── product-xx99-mark-two-headphones/
│   │   └── desktop/
│   │       ├── image-product.jpg
│   │       ├── image-category-page-preview.jpg
│   │       ├── image-gallery-1.jpg
│   │       ├── image-gallery-2.jpg
│   │       └── image-gallery-3.jpg
│   └── [other product folders...]
```

**Options for obtaining images:**

1. **From Figma** (if you have access):
   - Export images directly from the Figma design file
   - Use the exact names and paths as referenced in the code

2. **Use placeholders**:
   - Create a `public/assets` directory
   - Add placeholder images matching the structure above
   - Or use a service like [placeholder.com](https://placeholder.com) temporarily

3. **Modify image paths**:
   - Update `lib/data/products.ts` to point to your own image URLs
   - This approach works well if you're hosting images on a CDN

### 6. Run the Development Server

In a separate terminal from Convex dev:

```bash
npm run dev
```

The application will be available at [http://localhost:5000](http://localhost:5000)

## Important Notes

### Convex Setup

- The Convex `_generated` folder is created automatically when you run `npx convex dev`
- The LSP errors in `convex/` files are expected until you run the Convex dev server
- Convex dev server must be running for the app to work properly

### Resend Setup

- The default Resend sender is `onboarding@resend.dev` (for testing)
- For production, you'll need to verify your domain in Resend
- Update the sender email in `lib/resend.ts` after domain verification

### Images

- All 404 errors for `/assets/*` images are due to missing image files
- The application will run without images, but won't display product photos
- Follow the "Add Product Images" section above to resolve this

## Testing the Application

### Test Cart Functionality

1. Navigate to any product page
2. Select a quantity and click "Add to Cart"
3. Click the shopping cart icon in the header
4. Verify items appear in the cart modal
5. Adjust quantities using the +/- buttons
6. Click "Checkout" to proceed to checkout

### Test Checkout Flow

1. Add items to cart (see above)
2. Navigate to checkout
3. Fill out the form with test data
4. Click "Continue & Pay"
5. Verify the order confirmation modal appears
6. Check that a confirmation email was sent (check Resend dashboard logs)

## Troubleshooting

### Convex Connection Issues

If you see "Convex connection failed" errors:
1. Ensure `npx convex dev` is running
2. Check that `NEXT_PUBLIC_CONVEX_URL` is correct in `.env.local`
3. Restart both the Next.js and Convex dev servers

### Email Not Sending

If order confirmation emails don't send:
1. Verify `RESEND_API_KEY` is correct in `.env.local`
2. Check Resend dashboard for error logs
3. Ensure you're using a valid email address for testing

### Missing Images

If you see blank spaces where images should be:
1. Check browser console for 404 errors
2. Verify images exist at the paths shown in errors
3. Follow the "Add Product Images" section above

## Production Deployment

Before deploying to production:

1. **Deploy Convex backend**:
   ```bash
   npx convex deploy
   ```
   Update `NEXT_PUBLIC_CONVEX_URL` with production URL

2. **Verify Resend domain**:
   - Add and verify your domain in Resend
   - Update sender email in `lib/resend.ts`

3. **Add all product images**:
   - Ensure all images are in the correct paths
   - Test all pages to verify images load

4. **Environment variables**:
   - Set production environment variables in your hosting platform
   - Never commit `.env.local` to version control

## Next Steps

- Customize the product data in `lib/data/products.ts`
- Add your own product images
- Customize colors in `app/globals.css`
- Set up Convex indexes for better performance
- Add user authentication (optional)
- Integrate with a payment processor (optional)

For more information, see the main [README.md](README.md)
