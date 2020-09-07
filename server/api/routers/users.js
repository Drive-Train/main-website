const userRouter = require('express').Router();
const bcrypt = require('bcrypt');
const {
  User, Session,
} = require('../../db/Models/index');

userRouter.get('/', async (req, res) => {
  if (req.user && req.user.isAdmin) {
    const users = await User.findAll();
    res.send(users);
  } else {
    res.sendStatus(404);
  }
});

userRouter.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user) {
    res.sendStatus(401);
  } else {
    bcrypt.compare(password, user.password, async (err, result) => {
      if (err) {
        res.send(err);
      } else if (result === true) {
        const session = await Session.findOne({ where: { id: req.session_id } });
        await Session.update({ UserId: user.id }, { where: { id: session.id } });
        await res.status(200).send(user);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

userRouter.get('/logincheck', async (req, res) => {
  if (req.user) {
    res.send({ user: req.user, loggedIn: true });
  } else {
    res.send({ user: {}, loggedIn: false });
  }
});

userRouter.delete('/logout', async (req, res) => {
  await Session.destroy({ where: { id: req.session_id } });

  const session = await Session.create();

  const oneWeek = 1000 * 60 * 60 * 24 * 7;

  res.cookie('session_id', session.id, {
    path: '/',
    expires: new Date(Date.now() + oneWeek),
  });
  res.sendStatus(204);
});

userRouter.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ where: { username } });
  if (existingUser) {
    res.sendStatus(204);
  } else {
    const user = await User.create({ username, password });
    if (!user) {
      res.sendStatus(400);
    } else {
      const session = await Session.findOne({ where: { id: req.session_id } });
      await Session.update({ UserId: user.id }, { where: { id: session.id } });
      res.status(200).send(user);
    }
  }
});

userRouter.put('/setadmin/:userid/', async (req, res) => {
  await User.update({ isAdmin: req.body.isAdmin },
    { where: { id: req.params.userid } });
  res.sendStatus(200);
});

userRouter.put('/changeusername/:userid/', async (req, res) => {
  await User.update({ username: req.body.newUserName },
    { where: { id: req.params.userid } });
  res.sendStatus(200);
});

userRouter.get('/:userid', async (req, res) => {
  const updatedUser = await User.findOne({ where: { id: req.params.userid } });
  res.send(updatedUser);
});

module.exports = userRouter;
