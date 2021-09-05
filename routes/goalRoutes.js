const { Router } = require('express');

const { getSingleGoal, getAllGoals, updateSingleGoalById, createGoals, getArchivedGoals } = require('../controllers/goalController');

const router = Router();

router.route('/').post(createGoals).get(getAllGoals);

router.route('/:id').get(getSingleGoal);

router.route('/archived').get(getArchivedGoals)

router.patch('/update/:id', updateSingleGoalById);

module.exports = router;
