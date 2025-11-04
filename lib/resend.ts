import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderConfirmationEmail({
  email,
  orderNumber,
  items,
  total,
}: {
  email: string;
  orderNumber: string;
  items: Array<{ productName: string; quantity: number; price: number }>;
  total: number;
}) {
  const itemsHtml = items
    .map(
      (item) => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.productName}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">$${item.price.toLocaleString()}</td>
    </tr>
  `
    )
    .join('');

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Confirmation</title>
      </head>
      <body style="font-family: 'Manrope', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #D87D4A; color: white; padding: 30px; text-align: center; margin-bottom: 30px;">
          <h1 style="margin: 0; font-size: 28px;">AUDIOPHILE</h1>
        </div>
        
        <div style="padding: 0 20px;">
          <h2 style="color: #D87D4A; margin-bottom: 20px;">Thank you for your order!</h2>
          
          <p style="font-size: 16px; margin-bottom: 10px;">
            Your order <strong>#${orderNumber}</strong> has been confirmed.
          </p>
          
          <p style="margin-bottom: 30px;">
            We'll send you a shipping confirmation email as soon as your order ships.
          </p>
          
          <h3 style="color: #000; margin-bottom: 20px;">Order Summary</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <thead>
              <tr style="background-color: #f5f5f5;">
                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd;">Product</th>
                <th style="padding: 10px; text-align: center; border-bottom: 2px solid #ddd;">Qty</th>
                <th style="padding: 10px; text-align: right; border-bottom: 2px solid #ddd;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" style="padding: 15px 10px; text-align: right; font-weight: bold; border-top: 2px solid #ddd;">
                  GRAND TOTAL:
                </td>
                <td style="padding: 15px 10px; text-align: right; font-weight: bold; color: #D87D4A; border-top: 2px solid #ddd;">
                  $${total.toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #777; font-size: 14px;">
            <p>Questions? Contact us at support@audiophile.com</p>
            <p style="margin-top: 10px;">&copy; ${new Date().getFullYear()} Audiophile. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Audiophile <onboarding@resend.dev>',
      to: [email],
      subject: `Order Confirmation - #${orderNumber}`,
      html,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}
