import db from '../db/connection.js';
import Trip from '../models/trips.js';
import User from '../models/user.js';
import bcrypt from 'bcrypt';

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: 'arya',
    email: 'arya@gmail.com',
    password_digest: await bcrypt.hash('arya01', 12),
  });
  await user1.save();

  const user2 = new User({
    username: 'babak',
    email: 'babak@gmail.com',
    password_digest: await bcrypt.hash('babak01', 12),
  });
  await user2.save();

  const trips = [
    {
      country: 'America',
      city: 'Austin',
      description: 'very cool place',
      location: 'Zilker Park',
      imgURL: 'https://cdn2.apstatic.com/photos/hike/7036154_large_1555021664.jpg',
      userId: user1,
    },
    {
      country: 'America',
      city: 'Dallas',
      description: 'very awesome place ',
      location: 'Dallas Zoo',
      imgURL:
        'https://dallaszoo.imgix.net/wp-content/uploads/2019/10/30120014/MG_1398-Dallas-Zoo-Entry-CB.jpg?fit=crop&crop=faces&auto=format&q=60&w=395&h=198',
      userId: user2,
    },
  ];

  await Trip.insertMany(trips);
  console.log('Created users & trips');

  db.close();
};

insertData();
