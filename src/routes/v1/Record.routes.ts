import express from 'express';
import {
  postRecord,
  selectBonusWinners,
  selectGrandPrixWinners,
} from '../../controllers/record';
import { upload } from '../../middlewares/multer';
const router = express.Router();

router.post('/', [upload.single('file'), postRecord]);
router.post('/bonuswinners', [selectBonusWinners]);
router.post('/grandprixwinners', [selectGrandPrixWinners]);

export default router;
