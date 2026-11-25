/* ==========================================================================
   EXERCÍCIO 1: FECHAMENTO DE VENDAS
   
   Uma cafeteria precisa apurar os números do dia.
   
   Dados:
   - Preço do café: 8.50 | Quantidade vendida: 42
   - Preço do bolo: 12.00 | Quantidade vendida: 18
   - Taxa operacional: 15.00
   - Clientes atendidos: 30
   - Total de cookies produzidos: 125 | Capacidade da caixa: 6 unidades

   Fórmulas para os cálculos:
   1. Faturamento Bruto = (preço café * quantidade) + (preço bolo * quantidade)
   2. Faturamento Líquido = faturamento bruto - taxa operacional
   3. Ticket Médio = faturamento bruto / total de clientes atendidos
   4. Sobra de Cookies = resto da divisão entre total de cookies e a capacidade da caixa

   Calcule e exiba os 4 resultados no console.
   ========================================================================== */
let precoCafe = 8.5;
let precoBolo = 12;
let faturamentoBruto = (precoCafe * 42) + (precoBolo * 18)
let taxaOperacional = 15
let clientesAtendidos = 30
let totalCookies = 125
let capCaixaCookies = 6

// 1 - Faturamento
console.log("Faturamento Bruto" ,(precoCafe * 42) + (precoBolo * 18))

// 2 - Faturamento Líquido
console.log("Faturamento Liquido" ,faturamentoBruto - taxaOperacional)

// 3 - Ticket Medio
console.log("Ticket Medio" ,faturamentoBruto / clientesAtendidos)

// 4 - Sobra de Cookies
console.log("Sobra de Cookies" ,totalCookies & capCaixaCookies)

/* ==========================================================================
   EXERCÍCIO 2: VALIDAÇÃO DE CADASTRO E COMPRA
   
   Um sistema precisa validar os dados de um pedido gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Idade informada: 17
   - Código digitado no formulário: "100" (texto)
   - Código registrado no banco: 100 (número)
   - Saldo disponível: 250.00
   - Valor da compra: 250.00

   Regras a verificar e exibir no console:
   1. O cliente atingiu a maioridade civil (18 anos)?
   2. O código digitado confere com o banco considerando apenas o valor?
   3. O código digitado confere com o banco considerando valor e tipo de dado?
   4. O tipo do dado digitado difere do tipo esperado no banco?
   5. O saldo do cliente cobre o valor da compra?
   ========================================================================== */
 const idade = 17;
 let codFormulario = "100";
 const codBanco = 100;
 let saldoDisponivel = 250;
 let valorCompra = 250;

 const maioridadeCivil = idade >= 18;
 const codValor = codFormulario == codBanco;
 const codIgualidadeAbstrata = codFormulario === codBanco;
 const saldoSuficiente = saldoDisponivel >= valorCompra;

 // 1
 console.log("Maioridade Civil: ", maioridadeCivil);

 // 2 
 console.log("Valor igual: ", codValor);

 // 3
 console.log ("Igualidade Abstrata ", codIgualidadeAbstrata);

 // 4 
 console.log("Tipo de dado Formulario: ", typeof codFormulario);
 console.log("Tipo de dado Banco: ", typeof codBanco);

 // 5
 console.log("Saldo suficiente para a compra: ", saldoSuficiente);


/* ==========================================================================
   EXERCÍCIO 3: CONCESSÃO DE BENEFÍCIOS
   
   Avalie a liberação de benefícios para o cliente gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Valor da compra: 220
   - Cliente é assinante premium: falso
   - Possui cupom promocional: verdadeiro
   - Endereço possui restrição de entrega: falso
   - Cliente é estudante: verdadeiro
   - Idade: 22

   Regras a verificar e exibir no console:
   1. Frete grátis: concedido para compras a partir de 200 reais ou para
      assinantes premium, desde que o endereço não tenha restrição de entrega.
   2. Desconto universitário: concedido para estudantes com até 29 anos de idade.
   3. Acesso à área VIP: liberado para assinantes premium, ou para compras a
      partir de 300 reais que possuam cupom promocional.
   ========================================================================== */

   let valorCompraTotal = 220;
   let assinaturaPremium = false;
   let cupom = true;
   let enderecoRestrito = false;
   let estudante = true;
   let idadeCliente = 22;
   let valorFreteGratis = 200


   // 1
   const freteGratis = (valorCompraTotal >= valorFreteGratis || assinaturaPremium) && enderecoRestrito;
   console.log(freteGratis);

   // 2
   const descUniversi = idade <= 29;
   console.log(descUniversi);

   // 3
   const areaVip = (assinaturaPremium || valorCompraTotal >= 300) && cupom;
   console.log(areaVip)

   


