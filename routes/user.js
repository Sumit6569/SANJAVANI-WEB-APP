const { Router } = require("express");
const User = require("../models/users");

const router = Router();

router.get("/signin", (req, res) => {
  return res.render("singin");
});

router.get("/singup", (req, res) => {
  return res.render("singup");
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenrateToken(email, password);

    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("singin", {
      error: "Invalid Email or Password",
    });
  }
});

router.post("/singup", async (req, res) => {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
    profileImageURL: `/uploads/${req.file.filename}`,
  });

  return res.redirect("/");
});




router.get("/logout", (req, res) => {
  res.clearCookie("token").redirect("/");
});









module.exports = router;
