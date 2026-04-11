//Lista fictícia de receitas do sistema de recitas culinárias
import { imagensPorSabor } from "../assets/imagens/imagens";
export const RECEITAS = [
  {
    id: "101",
    nome: "Bolo de chocolate",
    imagem: imagensPorSabor.chocolate,
    ingredientes: [
      "2 xícaras (chá) de farinha de trigo",
      "3 ovos",
      "1/2 xícara (chá) de óleo",
      "1 pitada de sal",
      "1/2 xícara (chá) de açúcar",
      "1 xícara (chá) de chocolate em pó ou achocolatado",
      "1 colher (sopa) de fermento em pó",
      "1 xícara (chá) de água quente",
    ],
    modo_de_preparo: [
      "Tempo de preparo 1h",
      "1- Massa: Em um liquidificador, bata os ovos, o açúcar, o óleo, o achocolatado e a farinha de trigo. Importante: caso seu liquidificador não seja muito potente, coloque a farinha aos poucos conforme bate e, quando a massa ficar mais densa, passe para uma tigela e misture o restante da farinha com um fouet.",
      "2- Despeje a massa em uma tigela e adicione a água quente, o sal e o fermento, misturando bem.",
      "3- Desenforme ainda quente.",
    ],
    
  },
  {
    id: "102",
    nome: "Salada de frutas",
    imagem: imagensPorSabor.salada_frutas,
    ingredientes: [
      "2 mamões papaia pequenos",
      "5 bananas",
      "5 morangos maduros",
      "10 grãos de uva (qualquer variedade)",
      "1 laranja média",
      "2 maçãs",
      "1 pêssego",
      "1 caixa de leite condensado (opcional)",
      "1/2 colher (sopa) de canela em pó",
    ],
    
    modo_de_preparo: [
      "Tempo de preparo 30min",
      "1- Pique todos os ingredientes. Deixe a laranja em pedaços menores que as outras frutas, depois ela solta o caldo e a salada não fica tão ácida.",
      "2- Coloque tudo em um prato fundo e adicione o leite condensado (se quiser), a canela em pó e o gelo, mexa por alguns segundos e leve à geladeira por 30 minutos.",
    ],
  },
  {
    id: "103",
    nome: "Macarronada",
    imagem: imagensPorSabor.macarronada,
    ingredientes: [
      "carne moída a gosto",
      "1 lata de milho verde",
      "1 lata de creme de leite",
      "macarrão refogado na manteiga a gosto",
      "1 lata de ervilha",
      "1 lata de molho de tomate",
    ],
    
    modo_de_preparo: [
      "Tempo de preparo 60min",
      "1- Em uma panela, leve a carne moída temperada ao fogo e adicione o milho verde e a ervilha.",
      "2- Misture tudo e deixe cozinhar por 30 minutos.",
      "3- Desligue o fogo e acrescente o creme de leite e o molho de tomate.",
      "4- Incorpore o macarrão refogado na manteiga e misture bem.",
    ],
  },
  {
    id: "104",
    nome: "Baião de dois",
    imagem: imagensPorSabor.baião,
    ingredientes: [
      "2 xícaras de feijão de corda cozido (reservar a água)",
      "1 colher de sopa de cebola desidratada",
      "100 g de bacon em cubos",
      "2 dentes de alho bem picados",
      "2 colheres de sopa de coentro desidratado",
      "1 xícara de queijo de coalho cortado em cubos",
      "1 xícara de arroz cozido na água do feijão",
      "1 linguiça calabresa cortada em cubinhos",
      "300 g de carne seca dessalgada, cozida e desfiada",
      "2 colheres de sopa de manteiga de garrafa",
      "sal a gosto",
      "Pimenta-do-reino a gosto",
    ],
    
    modo_de_preparo: [ 
      "Tempo de preparo 2h",
      "1- Cozinhe o feijão na panela de pressão, com 3 a 4 xícaras de água, por cerca de 15-20 minutos, até ficar 'al dente'. Coloque junto na panela uma pitada de sal e uma folha de louro.",
      "2- Escorra a água do feijão e reserve.",
      "3- Em outra panela, cozinhe o arroz com alho e cebola, usando de 2 a 3 xícaras da água reservada.",
      "4- Numa frigideira grande (ou tacho), coloque a cebola para dourar em um pouco de manteiga de garrafa e um fio de óleo.",
      "5- Adicione o alho e o bacon e deixe refogar uns instantes, até derreter a gordura do bacon.",
      "6- Junte a linguiça e o paio e refogue mais um pouco.",
      "7- Acrescente a carne seca, o feijão e o arroz. Mexa.",
      "8- Junte a manteiga de garrafa, coloque um pouquinho da água do cozimento do feijão e, por último, adicione coentro e queijo coalho.",
      "9- Acerte o sal e a pimenta e sirva.", 
    ],
  },                 
  {
    id: "105",
    nome: "Pudim de leite",
    imagem: imagensPorSabor.pudim,
    ingredientes: [
      "1 xícara (chá) de açúcar",
      "1 lata de leite condensado",
      "3 ovos",
      "2 latas de leite (medida da lata de leite condensado)",
    ], 
    
    modo_de_preparo: [
      "Tempo de preparo 1h",
      "Calda",
      "1- Em uma panela de fundo largo, derreta o açúcar até ficar dourado.",
      "2- Junte 1/2 xícara (chá) de água quente e mexa com uma colher.",
      "3- Deixe ferver até dissolver os torrões de açúcar e a calda engrossar.",
      "4- Forre com a calda uma forma com furo central (19 cm de diâmetro) e reserve.",
      "Pudim",
      "1- Bata todos os ingredientes do pudim no liquidificador e despeje na forma reservada.",
      "2- Asse em banho-maria, em forno médio (180º C), por cerca de 1 hora e 30 minutos.",
      "3- Depois de frio, leve para gelar por cerca de 6 horas.",
      "4- Desenforme e sirva a seguir.", 
    ],
  },
]
// Função de busca por ID (usada nas rotas dinâmicas)
export function findProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}
