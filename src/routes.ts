import { request, response, Router } from 'express';
import { createUserController } from './useCases/createUser';

const router = Router();

router.post('/users', (req, res) => {
    return createUserController.handle(request, response);
})

export { router };