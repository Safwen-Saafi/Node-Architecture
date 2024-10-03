const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan
} = require('../controllers/tourController');
const { protect } = require('./../controllers/authController');

const router = express.Router();

router.route('/top-5-rated').get(aliasTopTours, getAllTours);
router.route('/tours-stats').get(getTourStats);
router.route('/').get(protect, getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);
router.route('/monthly-plan/:year').get(getMonthlyPlan);

module.exports = router;

// router.param('id', checkId); the function I used to check the id of the req.body but no longer need it
