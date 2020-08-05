import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DashboardController {

    /**
     * Index: Authenticates user for initial dashboard welcome (e.g. `Welcome John Doe`)
     * @param {auth} :  
     */
    public async index({ auth, response, view }: HttpContextContract) {
        const user = await auth.authenticate()

        if (!auth.isAuthenticated || !user) {
            return response.redirect('/')
        }

        const { username } = {
            ...user,
        }

        return view.render('dashboard', { user: username })
    }

    /**
     * name
     */
    public name() {

    }




}
