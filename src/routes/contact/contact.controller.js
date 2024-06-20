const ContactSchema = require("../../models/contact");

const postContactForm = async (req, res, next) => {
  console.log(req.body);
  try {
    const newForm = new ContactSchema(req.body);
    await newForm.save();
    res.status(200).send("Form has been submitted");
  } catch (err) {
    next(err);
  }
};
module.exports = { postContactForm };
