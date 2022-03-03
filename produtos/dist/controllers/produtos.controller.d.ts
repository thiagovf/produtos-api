import { Produto } from 'src/model/produto.model';
export declare class ProdutosController {
    produtos: Produto[];
    obterTodos(): Produto[];
    obterUmProduto(params: any): Produto;
    criarProduto(produto: Produto): void;
    alterarProduto(produtoAlterado: Produto): Produto;
    apagarProdut(params: any): void;
}
