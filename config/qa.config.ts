import dotenv from 'dotenv';
dotenv.config();

export const qaConfig = {
  baseUrl: process.env.BASE_URL!,
  timeout: 30000,
};