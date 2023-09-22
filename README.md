# Front-end 🎨
<h3>Depois do <strike>policial mau</strike> back end ter feito sua parte, chegou a hora do <strike>policial bom</strike> front-end entrar em cena! Leia as instruções abaixo antes de começar a codar.</h3>

## Requisitos e avisos
É de extrema importância que sigam o padrão do <a href="https://www.figma.com/file/J1H58wRIfMKI8F6ZPHICTZ/Collecta?type=design&node-id=3%3A53&mode=design&t=DZoFYES9G8A93f0r-1">Figma</a> de acordo com as cores, **espaçamentos**, fontes e entre outros. O protótipo está organizado para que haja facilidade em se localizar e está tudo catalogado, caso algo tenha passado despercebido e não consiga identificar, entre em contato com os responsáveis da prototipagem! **Evitem ao máximo fazer na mão o que já estiver catalogado, como cores HEX, padrões de fonte e entre outros.**
> Se observarem no figma, existem muitas repetições onde utilizamos componentes para não precisar ficar fazendo elementos do zero, o mesmo se aplica no código. Exemplo: uma vez que a navbar foi codada por alguém, reutilize a mesma.

### Antes de qualquer coisa, tenha certeza que está na branch QA - ```git checkout QA``` - é de lá que você vai começar a codar e fazer sua própria branch.

# Manual de boas práticas

## Commits

- **Commits Atômicos:** Realize commits que representem uma única alteração lógica. Isso facilita a compreensão das mudanças e permite reverter problemas com precisão, se necessário.

- **Mensagens Descritivas:** Escreva mensagens de commit claras e descritivas. Use um formato consistente, como "Adicionar", "Corrigir" ou "Atualizar", seguido de uma breve descrição do que foi feito.

  Exemplo: "Adicionar elementos na navbar deslogada"
  
- **Evite Commits Grandes:** Commits com muitas alterações dificultam a revisão e podem causar problemas na integração. Tente manter os commits focados e limitados ao escopo de uma funcionalidade.

## Branches

- **Nomenclatura Significativa:** Dê nomes descritivos às suas branches. Use padrões como "feature/nome-da-funcionalidade" ou "fix/nome-do-bug" para indicar o propósito da branch.

- **Crie Branches para Novas Funcionalidades ou Correções:** Sempre crie uma nova branch ao trabalhar em uma nova funcionalidade ou correção. Isso mantém o código principal (geralmente a branch "master" ou "main") limpo e estável.

- **Branches Curtas de Vida:** Evite manter branches longas e não utilizadas. Uma vez que a funcionalidade ou correção for concluída e revisada, faça um merge na branch principal e delete a branch secundária.

- **Pull Requests e Revisões de Código:** Ao concluir o trabalho em uma branch, crie um Pull Request para que outros membros da equipe revisem o código. Isso ajuda a identificar problemas antes de integrar as alterações.

## Prefixos usados ao criar Branches

- **feature/:** Usado para criar branches que implementam novas funcionalidades no código.

Exemplo: `feature/adicionar-autenticacao`

- **fix/:** Utilizado para corrigir bugs ou problemas no código existente.

Exemplo: `fix/corrigir-validacao-entrada`

- **hotfix/:** Similar a "fix/", usado para correções urgentes que precisam ser implementadas rapidamente.

Exemplo: `hotfix/corrigir-falha-crucial`

- **refactor/:** Indica que a branch é focada em refatorar o código existente.

Exemplo: `refactor/otimizar-rotina-de-dados`

- **chore/:** Usado para atividades de manutenção que não alteram o comportamento funcional do código.

Exemplo: `chore/atualizar-border-radius-cards`

- **docs/:** Utilizado para atualizações ou adições à documentação do projeto.

Exemplo: `docs/atualizar-documentacao-api`

- **style/:** Indica mudanças que afetam apenas a formatação do código.

Exemplo: `style/ajustar-indentacao`

- **test/:** Utilizado para adicionar ou atualizar testes automatizados.

Exemplo: `test/adicionar-testes-responsividade`
