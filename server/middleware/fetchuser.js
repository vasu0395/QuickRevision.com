import jwt from "jsonwebtoken";
const secretMesage = "VASU$CHAUHAN";

export const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Access denied" });
  }
  try {
    const data = jwt.verify(token, secretMesage);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Access denied" });
  }
};
