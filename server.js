const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/userModel');

dotenv.config({ path: './config.env' });

const app = require('./app');

// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD,
// );
const DB = process.env.DATABASE_LOCAL;

// mongoose.connect(DB).then(() => console.log('Database Connted Successfully!'));

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection Successful!');
    User.init()
      .then(() => console.log('Indexes are ready ✅'))
      .catch((err) => console.error('Index error:', err));
  })
  .catch((err) => console.error('DB connection error:', err));

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
