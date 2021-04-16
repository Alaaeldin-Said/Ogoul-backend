const multer = require('multer');
const jobApplication = require('../models/jobApplication');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/resumes/candidates');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    console.log(ext);
    cb(null, `applicants-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
});

exports.candidateResume = upload.single('resume');

// to post a job
exports.applyJob = async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  req.body.resume = req.file.filename;
  console.log('I am req.body: ', req.body, req.body.resume);
  try {
    const newCandidate = await jobApplication.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        newCandidate,
      }
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getCandidate = async (req, res) => {
  try {
    const candidate = await jobApplication.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        candidate,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
