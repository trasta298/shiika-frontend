// eslint-disable-next-line no-restricted-imports
import { Apis, Configuration } from './generated'

const apis = new Apis(new Configuration({ basePath: 'https://shiikaback.trap.show' }))

export default apis
// eslint-disable-next-line no-restricted-imports
export * from './generated'
