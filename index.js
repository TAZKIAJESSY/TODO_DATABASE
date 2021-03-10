const express = require("express"); //import
const User = require("./models").user;

const app = express(); //make express server
const PORT = 4001; //port to listen

app.use(express.json()); //parse the body of HTTP requests

// app.post("/echo", (req, res) => {
//   res.send(req.body);
// });

// Terminal command: http POST :4001/echo hello=world

//create a new row in users table
app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.send(user);
    }
  } catch (error) {
    next(error.message);
  }
});
//http -v POST :4001/users email=Peter@gmail.com
//http -v POST :4001/users name="Peter" password=123 email=Peter@gmail.com

//updating a user
app.put("/users/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { phone } = req.body;
    const userToUpdate = await User.findByPk(id);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update({ phone });
      res.send(updatedUser);
    }
  } catch (error) {
    next(error.message);
  }
});
// http -v PUT :4001/users/4 phone=1234567

//delete a user
app.delete("/users/:id", async (req, res, next) => {
  try {
    const { id } = parseInt(req.params);
    const userToDelete = await User.findByPk(id);
    if (!userToDelete) {
      res.status(404).send("User not found");
    } else {
      const deletedUser = await userToDelete.destroy();
      res.send(deletedUser);
    }
  } catch (error) {
    next(error.message);
  }
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
