const { Project, Section } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      await Project.create({
        ...req.body,
        UserId: req.session.user.id,
      });

      req.flash('success', 'Projeto criado com sucesso');

      return res.redirect('/app/dashboard');
    } catch (err) {
      return next(err);
    }
  },

  async show(req, res, next) {
    try {
      const project = await Project.find({
        include: [Section],
        where: {
          id: req.params.id,
        },
      });

      const { user } = req.session;

      return res.render('projects/show', {
        project,
        user,
      });
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const project = await Project.findById(req.params.id);

      await project.update(req.body);

      req.flash('success', 'Projeto atualizado com sucesso');

      return res.redirect(`/app/projects/${req.params.id}`);
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      await Project.destroy({
        where: { id: req.params.id },
      });

      req.flash('success', 'Projeto deletado com sucesso');

      return res.redirect('/app/dashboard');
    } catch (err) {
      return next(err);
    }
  },
};
