# Desafio de Criação de Página de Login

Este repositório contém a implementação de uma página de login básica, mas funcional, seguindo as especificações do desafio proposto. A aplicação utiliza **HTML**, **CSS** e **JavaScript** para criar um design intuitivo e aplicar validações básicas nos campos.

## 🖥️ Funcionalidades

1. **Validação Básica dos Campos:**
   - O campo de e-mail aceita apenas endereços válidos.
   - O campo de senha exige no mínimo 6 caracteres.
   - Uso dos atributos `required` e `minlength` do HTML para simplificar e garantir as validações básicas diretamente no formulário.

2. **Exibição de Mensagens de Erro:**
   - Campos vazios ou inválidos não permitem o envio do formulário.
   - Exibição de mensagens de erro padrão do navegador, aproveitando a validação nativa do HTML.

3. **Visualizar Senha:**
   - Implementado um botão para alternar a visibilidade do campo de senha utilizando JavaScript e manipulação de DOM.

4. **Botão "Entrar":**
   - Simula o envio do formulário.
   - Personalizado com um design moderno e responsivo.

5. **Design Responsivo e Atraente:**
   - Utiliza cores vivas, como `#e9f035`, e estilos modernos com variáveis CSS para fácil personalização.

## 📂 Estrutura de Arquivos
# Desafio de Criação de Página de Login

Este repositório contém a implementação de uma página de login básica, mas funcional, seguindo as especificações do desafio proposto. A aplicação utiliza **HTML**, **CSS** e **JavaScript** para criar um design intuitivo e aplicar validações básicas nos campos.

## 🖥️ Funcionalidades

1. **Validação Básica dos Campos:**
   - O campo de e-mail aceita apenas endereços válidos.
   - O campo de senha exige no mínimo 6 caracteres.
   - Uso dos atributos `required` e `minlength` do HTML para simplificar e garantir as validações básicas diretamente no formulário.

2. **Exibição de Mensagens de Erro:**
   - Campos vazios ou inválidos não permitem o envio do formulário.
   - Exibição de mensagens de erro padrão do navegador, aproveitando a validação nativa do HTML.

3. **Visualizar Senha:**
   - Implementado um botão para alternar a visibilidade do campo de senha utilizando JavaScript e manipulação de DOM.

4. **Botão "Entrar":**
   - Simula o envio do formulário.
   - Personalizado com um design moderno e responsivo.

5. **Design Responsivo e Atraente:**
   - Utiliza cores vivas, como `#e9f035`, e estilos modernos com variáveis CSS para fácil personalização.

## 📂 Estrutura de Arquivos

```plaintext
.
├── html/
│   ├── index.html        # Estrutura do formulário de login
├── css/
│   ├── reset.css         # Reset de estilos padrão do navegador
│   └── style.css         # Estilização da página de login
├── javascript/
│   └── script.js         # Função de alternância de visibilidade da senha
├── img/
│   ├── logo.svg          # Logo exibida na página
│   ├── icons8-invisível-24.png # Ícone de senha oculta
│   └── icons8-visível-24.png   # Ícone de senha visível
└── README.md             # Instruções e detalhes do projeto
```

## 🚀 Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/lilian-goncalves-de-almeida1326/tela-de-login-simples.git
   
# Clone o repositório
  ```bash
  git clone https://github.com/lilian-goncalves-de-almeida1326/tela-de-login-simples.git
```

# Navegue até a pasta do projeto
 ```bash
cd html
```

# Abra o arquivo index.html em um navegador
```
open index.html # Para macOS
start index.html # Para Windows
xdg-open index.html # Para Linux
```

Ou simplesmente arraste o arquivo para o navegador.
# 🛠️ Tecnologias Utilizadas
- HTML para a estrutura do formulário.
- CSS para estilização e design responsivo.
- JavaScript para as funcionalidades dinâmicas (visualizar senha).

# 💡 Decisões de Implementação
Separação de Funções no JavaScript: As funções foram divididas em responsabilidades menores para diminuir a complexidade do código e facilitar sua manutenção. Exemplo:
```javascript
function viewPassword(){
    
    if (inputPassword.type === 'password') {
        inputPassword.type = "text";
        changeImageVisibility();
    }else{
        inputPassword.type = "password";
        changeImageVisibility();
    }
}

```

`viewPassword()`: Alterna a visibilidade do campo de senha.
`changeImageVisibility()`: Atualiza o ícone exibido com base no estado atual.
Uso de Validações Nativas do HTML: Para simplificar e reduzir a necessidade de código adicional, aproveitamos atributos como required, type="email" e minlength.

Estilo com Variáveis CSS: As cores principais foram definidas como variáveis no arquivo CSS, permitindo fácil personalização.

📷 Demonstração

![Screenshot from 2025-01-20 19-42-25](https://github.com/user-attachments/assets/17d7be0d-f7a4-4fab-97fd-70dc61728823)
![Screenshot from 2025-01-20 19-42-11](https://github.com/user-attachments/assets/86c4da88-a582-4056-a831-6964b60e24ca)
![Screenshot from 2025-01-20 19-39-30](https://github.com/user-attachments/assets/81b6b24d-ce7a-4a38-8104-3ad33a031e89)
![Screenshot from 2025-01-20 19-38-48](https://github.com/user-attachments/assets/cd7c5850-be1a-4091-950e-d0d4013d01ef)
![Screenshot from 2025-01-20 19-38-33](https://github.com/user-attachments/assets/630289ed-a868-4df2-8911-194f5a341a16)

