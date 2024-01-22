Projeto utilizando [Next.js](https://nextjs.org/), Node-v18.17.0.

## Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/).
- [TailwindCSS](https://tailwindcss.com/)
- [MUI](https://mui.com/)
- [React-Hook-Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Framer-motion](https://www.framer.com/motion/)
- [React-Query](https://tanstack.com/query/latest/docs/react/overview)
- [Vitest](https://vitest.dev/)
- [Node-18.17.0](https://nodejs.org/en)

## Instalação

Realizar o clone do repositório

```bash
git clone https://github.com/thalesmaiaa/lean-teste.git
```

Instalar as dependências

```bash
yarn
```

Crie o arquivo com as variáveis de ambiente `.env.local` para evitar erros ao iniciar o servidor devido à falta de variáveis de ambiente. Isso é crucial, pois existe uma validação que utiliza Zod para garantir a execução da aplicação somente na presença do arquivo env.

```ts
import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z
    .string({
      required_error:
        "Variavel de ambiente 'NEXT_PUBLIC_API_URL' não encontrada",
    })
    .url(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});
```

```bash
NEXT_PUBLIC_API_URL=https://38375370-103e-44f9-ba50-67c60bff12f7.mock.pstmn.io/
```

Iniciar o servidor:

```bash
yarn dev
```

## Usuário Mockado para acesso(src/app/mock)
```ts
export const userMock = {
  email: 'lean@admin.com',
  password: 'Homemaranha123@',
}

```

## Rodando testes

Para garantir a qualidade do código e a conformidade com as diretrizes do projeto, você pode executar tarefas e testes. Certifique-se de que seu ambiente esteja com todas as dependências de instalação.

```bash
yarn test
```

## Aplicação

Desenvolvida utilizando Next.JS, typescript, Material-UI e tailwindCSS
A escolha do Material-UI junta do tailwind foi feita após análise do escopo da aplicação
e deteccao de componentes bem especificos( como o datagrid e outlined inputs) ja presentes de forma bastante estruturada e otimizada no Material-UI. Já o tailwind foi amplamente utilizada para estilizar os demais componentes que nao tinha essa especificidade toda oferecida pelo [MUI](https://mui.com/)

O conjunto de React Hook Form e Zod foi utilizado para o desenvolvimento do formulários de login. Tendo em vista que o React Hook Form proporciona uma solução eficiente e performática para gerenciar o estado e lidar com a lógica dos formulários de maneira simplificada. Além disso, o Zod adiciona uma camada de validação robusta, garantindo que os dados do formulário estejam em conformidade com as regras definidas, resultando em código mais seguro e confiável, sem contar com a alta integração do zod com o typescript.

O Framer Motion foi empregado para aprimorar a fluidez em determinadas animações dentro da aplicação. Ao utilizar o Framer Motion, a aplicação ganha não só em estética, mas também em desempenho, garantindo uma interação suave, elevando a experiência do usuário.

A escolha do React-Query para carregar listagens apresenta uma série de benefícios, desde simplificar o gerenciamento de dados até proporcionar uma abordagem declarativa e eficiente para requisições e caching. Ao tratar automaticamente estados de carregamento, erros e dados em cache, o React-Query não apenas reduz a complexidade do código, mas também aprimora a manutenibilidade da aplicação.

## Estrutura do Projeto

A estrutura do projeto segue o seguinte padrão:

```
src/
  ├─ app/
  │   ├─ components/
  │   │   ├─ componentA/
  │   │   │   ├─ componentA.tsx
  │   │   │   └─ index.ts
  │   │   │
  │   │   ├─ componentB/
  │   │   │   ├─ componentB.tsx
  │   │   │   └─ index.ts
  │   │   │
  │   │   └─ index.ts
  │   │
  │   ├─ pages/
  │   │   ├─ pageA/
  │   │   │   ├─ pageA.tsx
  │   │   │   └─ index.ts
  │   │   │
  │   │   ├─ pageB/
  │   │   │   ├─ pageB.tsx
  │   │   │   └─ index.ts
  │   │   │
  │   │   └─ index.ts
  │   │
  │   ├─ hooks/
  │   │   ├─ useA/
  │   │   │   ├─ useA.ts
  │   │   │   └─ index.ts
  │   │   │
  │   │   ├─ useB/
  │   │   │   ├─ useB.tsx
  │   │   │   └─ index.ts
  │   │   │
  │   │   └─ index.ts
  │   │
  │   ├─ .../...
  │   │
  ├─  __tests__/
  │   │  ├─ testA.test.tsx
  │   │  └─ ...
  │   │
  │   │
  │   │
  │   │
  │   │
  │   │
  │   │
  │   └─ ...
  ├─ package.json
  ├─ tsconfig.json
```

Dentro da pasta `components`, existe arquivo `index.ts` que exporta cada componente como padrão:

```tsx
// components/
export { ComponentA } from './ComponentA/';
export { ComponentB } from './ComponentB/';
```

Neste exemplo, estamos exportando `ComponentA` e `ComponentB` a sintaxe `export { ComponentName }`.

Permitindo importar esses componentes em outros lugares do seu código da seguinte maneira:

```tsx
import { ComponentA, ComponentB } from '@/components';
```

Isso permite que você importe vários componentes de forma mais concisa e legível, diretamente da pasta `components`. Certifique-se de adicionar todos os seus componentes no arquivo `index.ts` para que possam ser importados dessa forma.

Essa lógica do components se repete para outros folders como `hooks` e `pages`, por exemplo.

##OBS

Dentro da aplicação, mais especificamente na tela da listagem, vai ser possível visualizar um aviso `MUI X Missing license key`, o mesmo ocorre pela utilização do `DataGridPro`, mas o mesmo é permitido para utilização de acordo com [licensa](https://mui.com/x/introduction/licensing/#evaluation-trial-licenses) mais especificamente no seguinte texto:

>De acordo com o Contrato de Licença do Usuário Final, você pode usar os componentes Pro e Premium sem licença comercial por 30 dias para ambientes que não sejam de produção. Você também pode utilizá-lo para o desenvolvimento de código não destinado à produção (por exemplo, a reprodução de um problema, fazendo um benchmark).
Você não precisa entrar em contato conosco para usar esses componentes nos casos acima. Você precisará adquirir uma licença comercial para remover as marcas d'água e os avisos do console.

