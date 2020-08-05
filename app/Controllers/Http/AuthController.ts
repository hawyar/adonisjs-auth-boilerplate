import User from "App/Models/User";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {

  public async register({ request, auth, response }: HttpContextContract) {
    const validationSchema = schema.create({
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.unique({ table: "users", column: "email" }),
      ]),
      username: schema.string({ trim: true }, [
        rules.unique({ table: "users", column: "username" }),
      ]),
      password: schema.string({ trim: true }, [rules.confirmed()]),
    });

    const userDetails = await request.validate({
      schema: validationSchema,
    });

    const user = new User();

    user.email = userDetails.email;
    user.username = userDetails.username;
    user.password = userDetails.password;

    await user.save();
    await auth.login(user);

    if (!user.$isPersisted) {
      response.abort({ message: `Failed: user not registered` }, 500)
    }

    response.status(201).redirect("/dashboard")

  }
  /**
   * Login user
   */
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    await auth.attempt(email, password)

    response.redirect('/dashboard')
  }

  /**
   * Logout user
   */
  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.redirect('/')

  }


}
