import express from 'express';
import { postRecord, selectWinners } from '../../controllers/record';
import { upload } from '../../middlewares/multer';
const router = express.Router();

router.post('/', [upload.single('file'), postRecord]);
router.post('/winners', [selectWinners]);

export default router;
