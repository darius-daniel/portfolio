'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';
import { MailtrapTransport } from 'mailtrap';


const schema = z.object({
  email: z.string().email({ message: 'Input must be a valid email address' }),
  name: z
    .string()
    .min(3, { message: 'Input must be at least 3 characters long' }),
  message: z.string().min(1, { message: 'Input cannot be empty' }),
});

type State = {
  errors: {
      message?: string[] | undefined;
      email?: string[] | undefined;
      name?: string[] | undefined;
  };
  message?: undefined;
} | {
  message: boolean;
  errors?: undefined;
}

export async function sendMail(prevState: State, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
    name: formData.get('name'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const transport = nodemailer.createTransport(
    MailtrapTransport({
      token: process.env.MAILTRAP_API_TOKEN || '',
    })
  );

  const sender = {
    address: "hello@demomailtrap.com",
    name: validatedFields.data.name,
  };

  const recipients = ["dariusdaniel771@gmail.com"];
  const { name, email, message } = validatedFields.data;
  try {
    const response = await transport.sendMail({
      from: sender,
      to: recipients,
      subject: `Message from ${validatedFields.data.name}`,
      templateUuid: "f1b79e50-6368-4409-be0f-cd967aec6771",
      templateVariables: { name, message, email },
      category: "Integration Test",
    })
    return { message: 'success' }
  } catch (error) {
    console.error(error);
    return { message: 'Could not send message. Please try again.' }
  }
}
