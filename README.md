## API Rastreio

A implementação trata-se de uma API onde é possível cadastrar encomendas, consultar seu status e alterá-lo.

Foi desenvolvida em Node.js e MongoDB, com a utilização de uma imagem Docker que encapsula a aplicação, permitindo uma configuração rápida da ferramenta.

As técnicas utilizadas foram: 

* Git
* Clean Code
* TDD


### Git

Não encontrei dificuldades na utilização do Git, pois tenho conhecimento da ferramenta e já utilizei em múltiplos projetos,
durante o desenvolvimento de aplicações e para gerenciar conhecimento também.

O Git permite um controle de versão de código, onde é possível ter um histórico e observar o crescimento e separar o desenvolvimento da aplicação.
Essa separação e capacidade de visão do projeto que me fizeram escolher a ferramenta.

A desvantagem pode aparecer a partir do momento que um membro do projeto não é tão familiarizado com os termos e funcionalidades do Git.

A melhoria no controle da qualidade do código é observável a partir do momento que é possível refletir sobre o código anterior.

### Clean Code

A dificuldade foi principalmente em manter a coerência de alguns princípios do Clean Code, como a nomenclatura de variáveis. 

É um hábito difícil de ser vencido, ainda mais durante o desenvolvimento de um projeto sozinho, já que quando o pensamento de "deixar para depois" surge,
não há outras pessoas para discutir e se preocupar.

Tenho o hábito de comentar muito o meu código e pensei nesse momento em exercitar a falta dele, se o que eu fazia tornava o código mais legível. O maior desafio disso
foi por conta da questão técnica do Node.js, quando há chamadas específicas da linguagem que podem ser muito confusas caso não haja familiaridade. Inclusive já penso 
em situações do código que poderiam ser melhor descritas, mas justamente por conta dessa primeira versão preocupada em demonstrar o que está acontecendo que 
esse pensamento é possível.

A nomenclatura de variáveis, além da divisão do código em rotas, funções gerais e modelo, foram os principais aspectos influenciados pelo Clean Code, com o objetivo
de garantir uma coerência do que está acontecendo em cada lugar da aplicação.

A principal vantagem é a organização proporcionada e se os princípios forem seguidos desde o começo, uma refatoração se torna mais fácil, já que uma refatoração
seria basicamente uma reestruturação de ideias e conceitos, alterando onde cada coisa deveria estar, sem necessariamente reescrever muito do código já implementado.


### TDD

A principal dificuldade do TDD foi técnica, já que nunca havia implementado testes em Javascript e não posssuo conhecimento das ferramentas usadas.

Isso impossibilitou chegar em um resultado satisfatório e os testes acabaram sendo muito simples, pessoalmente não me senti satisfeito.

As vantagens que consigo ver é a prevenção de cenários e ser também um momento específico para refletir em como o usuário pode interagir com a aplicação.
