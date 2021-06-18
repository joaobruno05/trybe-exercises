const porcentagem = -30;

if (90 <= porcentagem <= 100) {
  console.log('A')
} else if (porcentagem >= 80) {
  console.log('B')
} else if (porcentagem >= 70) {
  console.log('C')
} else if (porcentagem >= 60) {
  console.log('D')
} else if (porcentagem >= 50) {
  console.log('E')
} else if (porcentagem < 50) {
  console.log('F')
} else if ( porcentagem < 0 || porcentagem > 100) {
  console.log('Ocorreu um erro')
}
