let peçaXadrez = 'bispo'.toLowerCase();

if (peçaXadrez === 'torre') {
  console.log('vertical')
} else if (peçaXadrez === 'bispo') {
  console.log('diagonal')
} else if ( peçaXadrez === 'cavalo') {
  console.log('em L')
} else {
  console.log('Ocorreu um erro')
}
