const User = require("./models").user;

async function getAllUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allUsers = await User.findAll();
    const cleanLog = allUsers.map((user) => user.get({ plain: true }));
    console.log("All users:", cleanLog);
  } catch (e) {
    console.log(e.message);
  }
}

getAllUsers();

/*
const app = ""; ///
app.get('/users', (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users)
  } catch(e) {
    console.log('error');
  }
})
app.post('/signup', (req, res) => {
  try {
    const { name, age, email, password } = req.body;
    const newUser = await User.create({ name, age, email, password });
    res.json(newUser);
  } catch(e) {
    console.log(e.message);
  }
})
*/

// getAllUsers();

// CRUD => Create Read Update Delete
//
// Most used querying methods
// READ: findAll, findByPk, findOne
// Create: .create
// Update: .update
// Delete: .destroy
