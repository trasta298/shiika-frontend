// eslint-disable-next-line no-restricted-imports
import { Apis, Configuration } from './generated'

const apis = new Apis(new Configuration({ basePath: 'https://api.shiika.trasta.dev' }))

export default apis
// eslint-disable-next-line no-restricted-imports
export * from './generated'
