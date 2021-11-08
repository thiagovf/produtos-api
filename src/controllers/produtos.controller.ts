import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from 'src/model/produto.model';

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('LIV001', 'Teste Unitários', 29.92),
    new Produto('LIV002', 'Java para Universitários', 29.93),
    new Produto('LIV003', 'Rest com NestJS', 29.94),
  ];

  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUmProduto(@Param() params): Produto {
    return this.produtos[0];
  }

  @Post()
  criarProduto(@Body() produto: Produto) {
    console.log(produto);
    this.produtos.push(produto);
  }

  @Put()
  alterarProduto(@Body() produtoAlterado: Produto): Produto {
    console.log(produtoAlterado);
    return produtoAlterado;
  }

  @Delete(':id')
  apagarProdut(@Param() params) {
    this.produtos.pop();
  }
}
