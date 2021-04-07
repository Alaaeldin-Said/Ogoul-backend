const Job = require('../models/jobSpecModel');

// To Create a Job
exports.createJob = async (req, res) => {
  try {
    const newJob = await Job.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        job: newJob,
      },
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: err,
    });
  }
};

// To GET all JOBS

exports.getAllJobs = async (req, res) => {
  try {
    let query = Job.find();

    // feature 1.) Sorting ...
    if (req.query.sort) {
      query = query.sort(req.query.sort);
    } else {
      query = query.sort('-postingDate');
    }

    // feature 2.) Limiting the Fields to reduce the BandWidth on request...
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }

    // feature 3.) PAGINATION SERVER SIDE...
    const page = req.query.page * 1 || 1; //  To convert string to number
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      //  RETURNS NO PAGE OR 404 ERROR iF PAGE IS NOT AVAILABLE...
      const numJobs = await Job.countDocuments();
      if (skip >= numJobs) throw new Error('This page does not exists!');
    }

    //  TO EXECUTE A QUERY!
    const jobs = await query;

    res.status(200).json({
      status: 'success',
      results: jobs.length,
      data: {
        jobs,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        job,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// To Update a Job
exports.updateJob = async (req, res) => {
  try {
    const updateJob = await Job.findyByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        job: updateJob,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail to Update',
      message: err,
    });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail to delete',
      message: err,
    });
  }
};
