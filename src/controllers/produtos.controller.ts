import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  obterTodos(): string {
    return 'Lista todos produtos';
  }

  @Get(':id')
  obterUmProduto(@Param() params): string {
    return `Retornar os dados do produto ${params.id}`;
  }

  @Post()
  criarProduto(@Body() produto): string {
    console.log(produto);
    return 'Produto criado.';
  }

  @Put()
  alterarProduto(@Body() produtoAlterado): string {
    console.log(produtoAlterado);
    return 'Produto alterado.';
  }

  @Delete(':id')
  apagarProdut(@Param() params) {
    return `Apagar produt ${params.id}`;
  }
}
