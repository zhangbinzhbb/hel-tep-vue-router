import { LIB_NAME } from './configs/subApp'
import { libReady, isMasterApp } from 'hel-lib-proxy'
console.log(' test1234-main ')
async function main() {
  if (isMasterApp()) {
    await import('./loadApp')
  } else {
    console.log(' test12345-sub-main ')
    const libProperties = await import('./entrance/libProperties')
    libReady(LIB_NAME, libProperties.default)
  }
}

main().catch(console.error)
