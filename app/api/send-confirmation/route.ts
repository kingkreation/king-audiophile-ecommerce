import { NextRequest, NextResponse } from 'next/server';
import { sendOrderConfirmationEmail } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
      const body = (await request.json()) as {
      email: string;
      orderNumber: string;
      items: any[];
      total: number;
    };
    const { email, orderNumber, items, total } = body;


    if (!email || !orderNumber || !items || !total) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await sendOrderConfirmationEmail({
      email,
      orderNumber,
      items,
      total,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
