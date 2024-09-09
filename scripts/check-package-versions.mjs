import { readFile } from 'fs/promises'

async function checkPackageVersions() {
  try {
    const packageJson = JSON.parse(await readFile('package.json', 'utf-8'))
    const dependencies = packageJson.dependencies ?? {}
    const devDependencies = packageJson.devDependencies ?? {}

    const hasCaretVersion = (deps) => Object.values(deps).some((version) => version.startsWith('^'))

    if (hasCaretVersion(dependencies) || hasCaretVersion(devDependencies)) {
      console.error('Error: Caret (^) character found in package version.')
      process.exit(1)
    } else {
      console.info('No caret (^) characters found in package versions.')
    }
  } catch (error) {
    console.error('Error reading or parsing package.json:', error.message)
    process.exit(1)
  }
}

checkPackageVersions()
