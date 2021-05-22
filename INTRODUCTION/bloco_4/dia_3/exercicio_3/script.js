let n = 5;

for (let index = 1; index <= n; index += 1) {
    let soma = ' ';
    for (let position = 0; position < n; position += 1) {
        if ((n - position) > index) {
            soma += ' ';
        } else {
            soma += '*';
        }
    }
    console.log(soma);
}
