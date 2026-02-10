import { Router } from 'express';
import { loginController } from '../controllers/auth.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/login', loginController);

router.get('/me', authenticate, (req, res) => {
  const user = (req as any).user;

  res.status(200).json({
    id: user.userId,
    email: user.email,
  });
});

export default router;
