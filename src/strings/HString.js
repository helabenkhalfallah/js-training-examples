// es6 String concepts

// reverse a string
const reverse = str => (
  str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .reverse()
    .join(' ')
)

// capitalise string words
const capitaliseWords = str => (
  str
    .split(' ')
    .map(word =>
      word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
    .join(' ')
)

const letterChanges = (str) => {
  // code goes here
  const values = str.split(' ')
  const voyels = ['a', 'e', 'i', 'o', 'u']
  const results = values.map((word) => {
    let chars = word.split('')
    chars = chars.map((char) => {
      const asciiCode = (char.charCodeAt() === 90) ? 65 : (char.charCodeAt() + 1)
      const nextChar = String.fromCharCode(asciiCode).toLowerCase()
      return voyels.includes(nextChar) ? nextChar.toUpperCase() : nextChar
    })
    return chars.join('')
  })
  return results.join(' ')
}

// simple symbols
// a string is accepted only
// if all letter are surrounded with (+)
// 1.For the input "+d===+a+", the correct answer is false.
// 2.For the input "+a=", the correct answer is false.
// 3.For the input "2+a+a+", the correct answer is true.
// 4.For the input "==a+", the correct answer is false.
const isDelimiter = char => (/[+]/g.test(char))
const isChar = char => (/[A-z]/g.test(char))
const isCorrectSequence = (value) => {
  let correctedSequence = []
  let charCount = 0
  if (!value || value.length < 3 || isChar(value.charAt(0))) {
    correctedSequence = []
  } else {
    // count chars only
    const alphaValue = value.replace(/[A-z]/g, '')
    charCount = value.length - alphaValue.length

    // identify correct sequence
    for (let i = 0; i < value.length; i += 1) {
      if ((i + 1) < (value.length - 1)
        && (i + 2) < value.length) {
        const firstChar = value.charAt(i)
        const centerChar = value.charAt(i + 1)
        const nextChar = value.charAt(i + 2)
        if (isDelimiter(firstChar)
          && isChar(centerChar)
          && isDelimiter(nextChar)) {
          correctedSequence.push(centerChar)
        }
      }
    }
  }

  let isCorrectSqce = false
  if (correctedSequence
    && correctedSequence.length > 0
    && correctedSequence.length === charCount) {
    isCorrectSqce = true
  }
  return isCorrectSqce
}

const isCorrectSequenceOptimzed = (value) => {
  if (/^[a-zA-Z]/.test(value) || /[a-zA-Z]$/.test(value)) {
    return false
  } else if (/[^+][a-zA-Z]/.test(value) || /[a-zA-Z][^+]/.test(value)) {
    return false
  }
  return true
}

// have the function AlphabetSoup(str) take the str string parameter being passed and
// return the string with the letters in alphabetical order
// (ie. hello becomes ehllo). Assume numbers and punctuation symbols
// will not be included in the string.
const alphabetSoup = (value) => {
  if (value && value.length > 0) {
    return value.split('').sort().join('')
  }
  return value
}

const reduceMe = (strReduce) => {
  const maxOutput = 2000
  if (strReduce.length <= maxOutput) {
    return strReduce
  }
  const strLength = strReduce.length
  console.log('reduceMe strLength :', strLength)
  const paquetNbre = Math.ceil(strReduce.length / maxOutput)
  console.log('reduceMe paquetNbre :', paquetNbre)
  const stringPaquets = []
  for (let i = 0; i < paquetNbre; i++) {
    stringPaquets.push(strReduce.substring(i * maxOutput, (i * maxOutput) + maxOutput))
  }
  console.log('reduceMe stringPaquets :', stringPaquets)
  const codedBinaryChars = stringPaquets.map(item =>
    item.split('')
      .map(char => char.charCodeAt(0).toString(16))
      .join(''))
  console.log('reduceMe codedBinaryChars :', codedBinaryChars)
  const codedDecimalChars = codedBinaryChars.map(item => Number.parseInt(item, 16))
  console.log('reduceMe codedDecimalChars :', codedDecimalChars)
  return strReduce
}

const longString = `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.

Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.

L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).

Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.

On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

// keep this function call here
const HString = () => {
  console.log('reverse :', reverse('Argument goes here'))
  console.log('capitalise Words :', capitaliseWords('Argument goes here')) // capitalise Words : Argument Goes Here
  console.log('letterChanges :', letterChanges('Argument goes here'))

  // simple symbols
  // a string is accepted only
  // if all letter are surrounded with (+)
  const value = '2ffcb=+a+a+'
  console.log('isCorrectSequence 1 : ', isCorrectSequence(value))

  // optimized version
  console.log('isCorrectSequence  2 : ', isCorrectSequenceOptimzed(value))

  // alphabetSoup
  const alphabetSoupValue = 'edgaccba'
  console.log('alphabetSoup : ', alphabetSoup(alphabetSoupValue))

  // Simple string substitution
  const name = 'Brendan'
  console.log(`Yo, ${name}!`)

  const a = 10
  const b = 10
  console.log(`Sum is : ${a + b}`) // Sum is : 20
  console.log(`Multi is : ${a * b}`) // Multi is : 100

  // Checking for inclusion
  console.log('hello'.startsWith('hell')) // true
  console.log('hello'.endsWith('ello')) // true
  console.log('hello'.includes('ell')) // true
  console.log('doo '.repeat(3)) // doo doo doo

  // Spread a string
  // or convert string to char array
  const strTemplate = 'Steve'
  const chars = [...strTemplate] // like split(')
  console.log('chars : ', chars) // chars :  [ 'S', 't', 'e', 'v', 'e' ]
  const [chars2] = strTemplate
  console.log('chars2 : ', chars2)

  console.log('reduceMe : ', reduceMe(longString))
}


export default HString
