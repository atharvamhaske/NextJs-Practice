import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["USER", "ADMIN"]).optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const createTaskSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
});

export const updateTaskSchema = z.object({
  title: z.string().min(3).optional(),
  description: z.string().optional(),
  status: z.enum(["PENDING", "DONE"]).optional(),
  // optimistic concurrency
  version: z.number().int().positive().optional(),
});

export const listQuerySchema = z.object({
  status: z.enum(["PENDING", "DONE"]).optional(),
  take: z.coerce.number().int().min(1).max(50).default(10),
  cursor: z.string().optional(),
  q: z.string().optional(), // search
  ownerId: z.string().optional(), // admin filter
  includeDeleted: z.coerce.boolean().optional(), // admin
});

export const bulkCreateSchema = z.object({
  items: z.array(
    z.object({
      title: z.string().min(3),
      description: z.string().optional(),
    })
  ).min(1).max(100),
});

export const idempotencyHeaderSchema = z.string().min(8);
