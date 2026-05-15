import express from 'express';
import * as repositoryController from '../controllers/repository.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { importRepoSchema } from '../validations/repository.validation.js';

const router = express.Router();

// Protected routes (middleware needed here for auth, but skipping for structure)
router.get('/', repositoryController.getRepos);
router.post('/import', validate(importRepoSchema), repositoryController.importRepo);
router.get('/:id', repositoryController.getRepo);

export default router;
