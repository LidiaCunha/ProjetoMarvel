# PROJETO MARVEL
![marveel](https://user-images.githubusercontent.com/60737355/82138683-b7d38e00-97f8-11ea-9e5a-4f05b58db2c7.png)

Desenvolvimento do projeto Marvel que consiste em consumir uma API Marvel de acordo com as regras e termos de uso, incluindo os requisitos exigidos pela situação problema da empresa fictícia NetSolutions , atuante em  projetos na área de desenvolvimento de software.

### Atenção ![error](https://user-images.githubusercontent.com/60737355/82158553-192e4800-985f-11ea-83c3-386661a18195.png)

|Problemas                                                                                  | Soluções |
|-----------                                                                                   | --------------- |
| Chamadas para API Marvel Comics rejeitadas.  | Verifique se os limites de taxa de chamadas do serviço não ultrapassaram 3000 (diário). |
| Projetos futuros de aplicativos que utilizem a API Marvel  e propagandas.	  |  Qualquer publicidade associada ao conteúdo Marvel deve primeiro ser aceita.|
| Dificuldade para manipular API Marvel. | Acesse o documento interativo do site onde expõe como os conteúdos estão organizados.

### Recursos ![settings](https://user-images.githubusercontent.com/60737355/82158745-141dc880-9860-11ea-9556-d363e3dd72ab.png)
- HTML5
- CSS3
- JavaScript
- API Marvel

### Passo a passo consumo API Marvel

1. Para iniciar devemos nos cadastrar no site oficial da [Marvel](https://www.marvel.com/signin?referer=https%3A%2F%2Fdeveloper.marvel.com%2Faccount) para requistitar a sua chave pública e privada.

2. Com as duas chaves em mãos, antes de começar a requisitar as informações temos mais dois códigos para conseguir. O primeiro é uma timestamp que pode ser adquirido através de um comando em qualquer navegador.

Código para pegar a timestamp atual:
```
Math.floor(Date.now() / 1000)
```

3. A segunda é uma hash que será um código **MD5** no qual é a soma de três informações: timestamp + chave privada + chave pública. Para realizar a conversão para o MD5 clique [aqui](https://blueimp.github.io/JavaScript-MD5/).

4. Para realizar um requisição de informações da Marvel a URL precisa estar com estes cinco dados respectivamente: Nome da pesquisa, Timestamp, Chave pública, Hash e um Limite para pesquisa. A marvel disponibiliza alguns temas para serem pesquisados em sua API, como por exemplo: Characters, creators, events etc. Para mais informações acesse a [documentação](https://developer.marvel.com/docs) completa da Marvel

Exemplo de url:
```
https://gateway.marvel.com/v1/public/events?nameStartsWith=Avengers&ts=12&apikey=1234&hash=121234abcdlimit=10
```
5. Por fim, para realizar a requisição das informações basta colocar toda a URL no _fetch()_. E para consumir os dados transformar a Promise retornada em um JSON. 
