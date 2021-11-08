# Projeto NestJS
Projeto utilizado para ter as primeiras impressões do NestJS.  
## O que é o NestJS  
Trata-se de um framework Node JS para utilização de TypeScript. Trás diversas vantagens no desenvolvimento eficiente de um projeto. 
[Link para documentação](https://docs.nestjs.com/)  

## Instalação  
Uma vez que o gerenciador de pacotes NPM já esteja instalado, basta executar o comando abaixo para instalar o NestJS.  
```terminal  
 npm install -g @nestjs/cli  
 ```  
 Onde o ```-g``` vai indicar que ele será instalado globalmente na sua máquina.  
 Para verificar se a instalação foi bem sucedida, executar o comando abaixo.  
 ```terminal  
 nest -v  
 ```  
 ## Criar projeto  
 Feita a instalação, podemos agora criar nosso projeto.  
 ```terminal  
 nest new produtos-api  
 ```  
 ## Inicializar servidor  
 ```terminal  
 cd produtos-api  
 npm rum start  
 ```  
 No navegador, é possível visualizar visualizar o 'hello world!' no localhost:3000, porta padrão utilizada pelo NodeJS.  
 Para que o servidor fique fazendo hotdeploy, basta adicionar :dev após o comando.  
 ```  
 npm rum star:dev  
 ```  
 
