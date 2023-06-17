/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import * as fs from 'node:fs/promises';
import * as path from 'path'
import { exec } from 'child_process'
import { fileURLToPath } from 'url'
import { promisify } from 'util'
const execPromise = promisify(exec)
import { addApis } from './add-apis.js'

const SWAGGER_PATH = 'https://raw.githubusercontent.com/traP-jp/Shiika-backend/main/docs/openapi.yaml'
const GENERATED_DIR = 'src/lib/apis/generated'

const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateCmd = [
  npx,
  'openapi-generator-cli',
  'generate',
  '-g',
  'typescript-axios',
  '-i',
  SWAGGER_PATH,
  '-o',
  GENERATED_DIR
]

;(async () => {
  await fs.mkdir(path.resolve(__dirname, '../', GENERATED_DIR), {
    recursive: true
  })

  await execPromise(generateCmd.join(' '))

  // generate Apis class
  await addApis(GENERATED_DIR)
})()