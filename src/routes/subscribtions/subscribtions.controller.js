const UserSchema = require("../../models/user");
const bcrypt = require("bcrypt");
const changeSubscribtion = async (req, res, next) => {
  const { username, subscribtion, creditCard } = req.body;
  console.log(req.body);
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(creditCard, salt);
  try {
    //Check user
    const user = await UserSchema.findOneAndUpdate(
      { username: username },
      { $set: { subscribtion: subscribtion, creditCard: hash } },
      {
        new: true,
      }
    );

    res.status(200).json({ message: "User subscribtion has been updated" });
  } catch (err) {
    next(err);
  }
};
module.exports = { changeSubscribtion };
