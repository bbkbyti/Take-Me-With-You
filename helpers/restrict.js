import jwt from 'jsonwebtoken';

const TOKEN_KEY = process.env.TOKEN_KEY || 'veryverygoodkey';

export const restrict = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, TOKEN_KEY);
    next();
  } catch (error) {
    console.log(error);
    res.status(403).send('Not Authorized');
  }
};
