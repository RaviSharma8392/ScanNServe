const validateSignUp = (req,res,next) => {
 const { name, email, password, confPassword, mobileNo } = req.body;

  let err = new Error();
  err.code = 400;

  // Name validation
  if (
    !name ||
    name.length < 3 ||
    name.length > 50 ||
    /^[A-Za-z][A-Za-z\s.'-]{1,49}$/.test(name) === false
  ) {
    err.message = "Name validation failed";
    return res.status(err.code).json({ error: err.message });
  }

  // Email validation
  if (!email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false) {
    err.message = "Email validation failed";
    return res.status(err.code).json({ error: err.message });
  }

  // Password validation
  if (!password || password.length < 6) {
    err.message = "Password must be at least 6 characters";
    return res.status(err.code).json({ error: err.message });
  }

  // Confirm password match
  if (password !== confPassword) {
    err.message = "Passwords do not match";
    return res.status(err.code).json({ error: err.message });
  }

  // Mobile number validation (basic 10-digit check)
  if (!mobileNo || !/^\d{10}$/.test(mobileNo)) {
    err.message = "Mobile number must be 10 digits";
    return res.status(err.code).json({ error: err.message });
  }
  next();
}
const validateSignIn = (req,res,next) => {
  const { email, password } = req.body;
  let err = new Error();
  err.code = 400;

  if (!email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false) {
    err.message = "Invalid email format";
    return res.status(err.code).json({ error: err.message });
  }

  if (!password || password.length < 6) {
    err.message = "Invalid password";
    return res.status(err.code).json({ error: err.message });
  }

  next();
}
module.exports = {validateSignUp,validateSignIn};