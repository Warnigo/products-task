import fs from 'fs'

const devDependenciesList = [
  '@types/',
  '@typescript-eslint/',
  'eslint',
  'eslint-plugin',
  'prettier',
  'stylelint',
  'husky',
  'lint-staged',
  'sass',
  'autoprefixer',
  'typescript',
  'jest',
]

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))

const dependencies = packageJson.dependencies || {}
const devDependencies = packageJson.devDependencies || {}

const allDependencies = { ...dependencies, ...devDependencies }
const sortedDependencies = {}
const sortedDevDependencies = {}

Object.keys(allDependencies).forEach((dep) => {
  const version = allDependencies[dep]

  if (devDependenciesList.some((devDep) => dep.startsWith(devDep))) {
    sortedDevDependencies[dep] = version
  } else {
    sortedDependencies[dep] = version
  }
})

packageJson.dependencies = sortedDependencies
packageJson.devDependencies = sortedDevDependencies

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2), 'utf8')

console.info('Packages sorted successfully.')
