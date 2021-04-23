const Group = require('../models/groupModel');

exports.createGroup = async (req, res) => {
  try {
    console.log(req.body);
    const newGroup = await Group.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        groupName: newGroup,
      },
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllGroups = async (req, res) => {
  try {
    console.log(`I am running`);
    const groups = Group.find();
    res.status(200).json({
      status: 'success',
      results: groups.length,
      data: {
        groups,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
