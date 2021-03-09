const { user, todolist, todoitem } = require("./models");

//todolist user
async function listwithUser(id) {
  try {
    const specificUser = await user.findByPk(id, {
      include: [todolist],
    });
    console.log(specificUser.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
}
//listwithUser(1);

//include only name
const importantTodos = async () => {
  try {
    const todos = await todoitem.findAll({
      where: { important: true },
      include: { model: todolist, attributes: ["name"] },
    });
    console.log(todos.map((item) => item.get({ plain: true })));
  } catch (e) {
    console.log(e.message);
  }
};
importantTodos();
