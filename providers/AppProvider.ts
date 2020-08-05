import { IocContract } from '@adonisjs/fold'

export default class AppProvider {
  constructor(protected $container: IocContract) {
  }

  public register() {
    // Register your own bindings
  }

  public async boot() {
    const View = (await import('@ioc:Adonis/Core/View')).default
    View.global('timestamp', () => {
      return new Date().toISOString()
    })
    // IoC container is ready
  }

  public shutdown() {
    // Cleanup, since app is going down
  }

  public ready() {
    // App is ready
  }
}
