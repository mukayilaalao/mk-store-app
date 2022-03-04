const regValidation = (req, res, next) => {
  const { username, email, password, password2 } = req.body;
  if (!username || !email || !password || !password2) {
    res.status(422).json({ success: false, result: "All fields need" });
  } else if (password !== password2) {
    res.status(422).json({ success: false, result: "password didn't match" });
  } else next();
};

module.exports = { regValidation };
