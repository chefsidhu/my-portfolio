import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    // Validate the input
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    // Send the email
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'abhi.sidhu36@gmail.com', // Your email address
      replyTo: email,
      subject: 'New Contact Form Submission',
      text: `New message from ${email}:\n\n${message}`,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error sending message' },
      { status: 500 }
    );
  }
} 