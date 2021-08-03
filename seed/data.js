import db from '../db/connection.js';
import Trip from '../models/trip.js';
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
    {
      country: 'Turkey',
      city: 'Istanbul',
      description: 'beautiful city',
      location: 'Taksim Square',
      imgURL:
      'https://images.unsplash.com/photo-1622587853578-dd1bf9608d26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      userId: user2,
    },

    {
      country: 'Italy',
      city: 'Rome',
      description: 'The Colosseum (/ˌkɒləˈsiːəm/ KOL-Ə-SEE-Əm; Italian: Colosseo [Kolosˈsɛːo]) Is An Oval Amphitheatre In The Centre Of The City Of Rome, Italy, Just East Of The Roman Forum.',
      imgURL: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1286&q=80',
      userId: user1,
      location: "Colosseum"
    },
  ];

  await Trip.insertMany(trips);
  console.log('Created users & trips');

  db.close();
};

insertData();
