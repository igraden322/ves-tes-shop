const ApiError = require("../error/ApiError");
const { User, Basket } = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const genereateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: '24h' });
}

class UserController {

  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Некорректный email или пароль"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует")
      );
    }
    const hashPass = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPass });
    const basket = await Basket.create({ userId: user.id });
    const token = genereateJwt(user.id, user.email, user.role)
    return res.json({ token })
  }

  async login(req, res, next) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'))
    }

    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'))
    }

    const token = genereateJwt(user.id, user.email, user.role)
    return res.json({ token })
  }

  async check(req, res, next) {
    const token = genereateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({ token })
  }
}

module.exports = new UserController();
