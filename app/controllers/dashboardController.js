const { Project } = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      const projects = await Project.findAll({
        where: {
          UserId: req.session.user.id,
        },
      });

      const { user } = req.session;

      return res.render('dashboard/index', { projects, user });
    } catch (err) {
      return next(err);
    }
  },
};
