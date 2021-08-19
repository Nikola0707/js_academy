const successResponse = require('../lib/handlers/success-response-sender');
const errorResponse = require('../lib/handlers/error-response-sender');
const { userModel } = require('../models/blog-post&user')
const cron = require('node-cron');
const schedule = require('node-schedule');
const shell = require('shelljs');

module.exports = {
  fetchAll: async (req, res) => {
    try {
      const user = await userModel.find()

      cron.schedule('*/30 * * * * *', () => {
        console.log('Scheduler running');
        shell.exec("node lib/cron.js")
      });

      successResponse(res, 'List of all users', user);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  fetchOne: async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      if (!user) errorResponse(res, 400, 'No user with the provided id')

      const date = new Date('2021-05-11T02:01:00.000+2:00');

      const job = schedule.scheduleJob(date, function () {
        console.log('Node - Schedule: I jas si gazam');
        job.cancel()
      });

      successResponse(res, `User with id #${req.params.id}`, user);
    } catch (error) {
      errorResponse(res, 500, error.message)
    }
  },
  delete: async (req, res) => {
    try {
      await userModel.remove({ _id: req.params.id });

      cron.schedule('*/10 * * * * *', () => {
        console.log('User deleted');
      });

      const date = new Date('2021-05-03T21:27:00.000+2:00');

      const jobSchedule = schedule.scheduleJob(date, function () {
        console.log('node-schedule');
        jobSchedule.cancel()
      });

      res.send(`User ${req.params.id} is deleted`);
    } catch (error) {
      res.send({ message: error });
    }
  },
  follow: async (req, res) => {
    if (req.body.user !== req.params.id) {
      try {
        const user = await userModel.findById(req.params.id);
        const currentUser = await userModel.findById(req.body.user);
        if (!user.followers.includes(req.body.user)) {
          await user.updateOne({ $push: { followers: req.body.user } });
          await currentUser.updateOne({ $push: { following: req.params.id } });
          res.status(200).json("User has been followed");
        } else {
          res.status(403).json("You have already followed this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You can't follow yourself");
    }
  },
  unfollow: async (req, res) => {
    if (req.body.user !== req.params.id) {
      try {
        const user = await userModel.findById(req.params.id);
        const currentUser = await userModel.findById(req.body.user);
        if (user.followers.includes(req.body.user)) {
          await user.updateOne({ $pull: { followers: req.body.user } });
          await currentUser.updateOne({ $pull: { following: req.params.id } });
          res.status(200).json("User has been unfollowed");
        } else {
          res.status(403).json("You don't follow this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You can't unfollow yourself");
    }
  }
}