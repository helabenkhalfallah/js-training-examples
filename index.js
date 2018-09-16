
import HArray from './src/arrays/HArray'
import HAsynAwait from './src/async/async-await/HAsynAwait'
import HPromises from './src/async/promises/HPromises'
import HDestructing from './src/desctructing/HDestructing'
import HGenerators from './src/generators/HGenerators'
import HIterables from './src/iterables/HIterables'
import HMaps from './src/maps/HMaps'
import HMutability from './src/mutable-immutable/HMutability'
import HNumbers from './src/numbers/HNumbers'
import HPureImpure from './src/pure-impure/HPureImpure'
import HSpread from './src/spread/HSpread'
import HString from './src/strings/HString'
import HSymbols from './src/symbols/HSymbols'
import HFunctions from './src/functions/HFunctions'


console.log(' --- HAsynAwait ---')
// HAsynAwait()

console.log(' --- HPromises ---')
// HPromises()

console.log(' --- HFunctions ---')
HFunctions()

console.log(' --- HArray ---')
HArray()

console.log(' --- HNumbers ---')
HNumbers()

console.log(' --- HString ---')
HString()

console.log(' --- HSpread ---')
HSpread()

console.log(' --- HDestructing ---')
HDestructing()

console.log(' --- HPureImpure ---')
HPureImpure()

console.log(' --- HGenerators ---')
HGenerators()
