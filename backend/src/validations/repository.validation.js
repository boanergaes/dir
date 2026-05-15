import { z } from 'zod';

export const importRepoSchema = z.object({
  body: z.object({
    githubId: z.string().min(1, 'GitHub ID is required'),
    githubRepoName: z.string().min(1, 'Repository name is required'),
    githubOwner: z.string().min(1, 'Owner is required'),
    githubFullName: z.string().min(1, 'Full name is required'),
  }),
});

export const updateRepoSchema = z.object({
  body: z.object({
    workspaceName: z.string().min(1).optional(),
    description: z.string().optional(),
  }),
});
