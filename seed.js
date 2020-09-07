const chalk = require('chalk');
const { User, Bio } = require('./server/db/Models/index');
const { db } = require('./server/db/db');
require('dotenv').config();

const sync = async (force = false) => {
  try {
    await db.sync({ force });
    console.log(chalk.green(`DB successfully connected, and synced. Force: ${force}`));
  } catch (e) {
    console.log(chalk.red('Error while connecting to database'));
    throw e;
  }
};

const seed = async () => {
  await sync(true);

  User.create({
    username: 'admin',
    password: 'DriveTrain123$',
    isAdmin: true,
  });

  User.create({
    username: 'Cyril',
    password: 'DriveTrain123',
  });

  User.create({
    username: 'Kwon',
    password: 'DriveTrain123$',
  });

  Bio.create({
    firstName: 'Cyril',
    lastName: 'Khamsi',
    title: 'Founder/CEO',
    description: 'Cyril Khamsi (Cy) is the Founder/CEO of Drive Train the business. Prior to founding Drive Train, Cy founded Kumwe Harvest and Kumwe Freight, successful tech-engabled agriculture and logistics businesses in Rwanda',
    email: 'ckhamsi@drivetrain.co',
    LinkedIn: 'https://www.linkedin.com/in/ckhamsi/',
    poster: 'https://media-exp1.licdn.com/dms/image/C4E03AQHdSpTHHSGBTw/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=XwlKccS34uhKy1X6PFnogulTHHCWx9QI7i4JvpkRTSc',
  });

  Bio.create({
    firstName: 'Sang-Hyuk',
    lastName: 'Kwon',
    title: 'Co-founder',
    description: "Sang-Hyuk Kwon (Kwon) is a co-founder and CSO/CFO of the business, overseeing Drive Train's overall strategy and finances. Kwon has over 5 years of experience working in investments, having worked in Macquarie's Principal Finance team focused on credit-focused speicial situations ivnesting and at the Abraaj Group where he focused on emerging markets private equity.",
    email: 'skwon@drivetrain.co',
    LinkedIn: 'linkedin.com/in/sang-hyuk-kwon-78779a37',
    poster: 'https://media-exp1.licdn.com/dms/image/C5103AQHr_wkdf0oM3w/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=hSS2Xt8sURSNJlUzeRFFFCnDuPobt0ezhAZQQcYA63Y',
  });
};

seed();

console.log(chalk.greenBright('Data is seeded'));
