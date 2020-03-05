import {Command, flags} from '@oclif/command'

class Mycli extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]
  static strict = false

  async run() {
    const {argv, flags} = this.parse(Mycli)
    const name = flags.name || 'world'
    this.log(`hello build ${name} from ./src/index.ts`)
  }
}

export = Mycli
