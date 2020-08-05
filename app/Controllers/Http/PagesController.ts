import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
  public home({ view }: HttpContextContract) {
    return view.render('landing/welcome')
  }
  public about({ view }: HttpContextContract) {
    return view.render('about', { title: 'Norcom Studio' })
  }
  public contact({ view }: HttpContextContract) {
    return view.render('contact')
  }
  public dashboard({ view }: HttpContextContract) {
    return view.render('dashboard')
  }



}
