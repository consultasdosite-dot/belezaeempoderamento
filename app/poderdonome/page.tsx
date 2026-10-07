"use client";



import Image from "next/image";

import { useEffect, useMemo, useState } from "react";



type Interpretacao = {

  titulo: string;

  texto: string;

};



const interpretacoesNome: Record<number, Interpretacao> = {

  1: {

    titulo: "Independência, iniciativa e novos começos",

    texto:

      "A vibração 1 fortalece identidade, autonomia, liderança e iniciativa. É uma energia ligada à coragem de iniciar novos caminhos e construir uma trajetória própria.",

  },

  2: {

    titulo: "Parceria, sensibilidade e união",

    texto:

      "A vibração 2 valoriza cooperação, diplomacia, sensibilidade e vínculos. Favorece diálogo, parceria e capacidade de construir em conjunto.",

  },

  3: {

    titulo: "Comunicação, alegria e expressão",

    texto:

      "A vibração 3 favorece criatividade, comunicação, sociabilidade e leveza. Amplia a expressão pessoal e o desejo de viver experiências mais alegres.",

  },

  4: {

    titulo: "Estrutura, segurança e responsabilidade",

    texto:

      "A vibração 4 está ligada à organização, disciplina, estabilidade e construção. Valoriza bases sólidas, planejamento e responsabilidade.",

  },

  5: {

    titulo: "Liberdade, movimento e transformação",

    texto:

      "A vibração 5 traz movimento, flexibilidade, liberdade e novas experiências. É uma energia ligada a mudanças, adaptação e expansão.",

  },

  6: {

    titulo: "Amor, família e responsabilidade afetiva",

    texto:

      "A vibração 6 enfatiza amor, família, cuidado, compromisso e responsabilidade. Favorece o desejo de construir harmonia e proteger aqueles que ama.",

  },

  7: {

    titulo: "Profundidade, introspecção e conhecimento",

    texto:

      "A vibração 7 favorece reflexão, profundidade, estudo e desenvolvimento interior. É uma energia seletiva, analítica e ligada à busca de significado.",

  },

  8: {

    titulo: "Realização, poder e prosperidade",

    texto:

      "A vibração 8 está ligada à realização material, administração, autoridade e capacidade de conquistar resultados. Traz forte potencial para organização e prosperidade.",

  },

  9: {

    titulo: "Sensibilidade, generosidade e visão ampla",

    texto:

      "A vibração 9 amplia sensibilidade, generosidade, compreensão e visão humanitária. É uma energia relacionada à maturidade, doação e encerramento de ciclos.",

  },

};



const interpretacoesCasamento: Record<number, Interpretacao> = {

  1: {

    titulo: "Uma nova história começa",

    texto:

      "Seu casamento nasce sob a energia dos novos começos, da iniciativa e da coragem. Existe força para construir uma história própria e realizar projetos juntos. O alerta está em evitar disputas por liderança: preservar a individualidade é saudável, mas as grandes decisões precisam pertencer aos dois.",

  },

  2: {

    titulo: "A força da parceria",

    texto:

      "Esta união recebe uma vibração de sensibilidade, cooperação e companheirismo. Existe potencial para muita cumplicidade. O cuidado está em não evitar conversas importantes apenas para preservar a harmonia. Uma parceria verdadeira também precisa saber conversar sobre as diferenças.",

  },

  3: {

    titulo: "Alegria que precisa ser cultivada",

    texto:

      "Comunicação, criatividade e entusiasmo acompanham esta vibração. O casal pode encontrar muita força na alegria e nas experiências compartilhadas. O alerta é não usar a leveza para fugir de assuntos profundos. Falar é importante, mas ouvir e compreender são ainda mais.",

  },

  4: {

    titulo: "Construindo alicerces",

    texto:

      "Esta vibração favorece estabilidade, organização, responsabilidade e construção de bases sólidas. É positiva para quem deseja estruturar família, patrimônio e projetos duradouros. O cuidado é não permitir que rotina e obrigações ocupem o espaço do afeto, da surpresa e do romantismo.",

  },

  5: {

    titulo: "Um casamento em movimento",

    texto:

      "A vibração 5 traz liberdade, mudanças, experiências e capacidade de adaptação. O casal pode viver importantes transformações ao longo da jornada. O alerta está na instabilidade. Liberdade e compromisso não precisam ser adversários: o aprendizado é mudar juntos sem perder a base da relação.",

  },

  6: {

    titulo: "Amor, família e responsabilidade afetiva",

    texto:

      "O número 6 possui forte ligação com família, cuidado, afeto e construção de um lar. É uma vibração acolhedora para a vida a dois. O cuidado é não transformar proteção em controle ou amor em cobrança. O casal também precisa continuar cuidando da própria relação.",

  },

  7: {

    titulo: "Uma união que busca profundidade",

    texto:

      "Esta vibração favorece amadurecimento, reflexão e busca de significado. Pode existir uma conexão profunda entre vocês. O ponto de atenção é o isolamento emocional. Respeitar o espaço individual é importante, mas o silêncio não deve se transformar em distância.",

  },

  8: {

    titulo: "Construir e realizar juntos",

    texto:

      "O número 8 traz realização, administração, prosperidade e força para grandes projetos. Pode favorecer conquistas materiais importantes. O alerta é não transformar o relacionamento em uma empresa ou em uma disputa de poder. O verdadeiro sucesso acontece quando patrimônio e relacionamento prosperam juntos.",

  },

  9: {

    titulo: "Amor, compreensão e propósito",

    texto:

      "A vibração 9 traz sensibilidade, generosidade, compreensão e amadurecimento. Existe potencial para uma união com propósito e visão mais ampla da vida. O aprendizado está em não carregar indefinidamente mágoas e situações que precisam ser ressignificadas. Algumas fases precisam terminar para que o amor continue amadurecendo.",

  },

};



const valores: Record<string, number> = {

  A: 1,

  B: 2,

  C: 3,

  D: 4,

  E: 5,

  F: 6,

  G: 7,

  H: 8,

  I: 9,

  J: 1,

  K: 2,

  L: 3,

  M: 4,

  N: 5,

  Ñ: 6,

  O: 7,

  P: 8,

  Q: 9,

  R: 1,

  S: 2,

  T: 3,

  U: 4,

  V: 5,

  W: 6,

  X: 7,

  Y: 8,

  Z: 9,

};



function reduzirNumero(numero: number) {

  const caminho: number[] = [numero];

  let resultado = numero;



  while (resultado > 9) {

    resultado = String(resultado)

      .split("")

      .reduce((soma, digito) => soma + Number(digito), 0);



    caminho.push(resultado);

  }



  return {

    resultado,

    caminho,

  };

}



function prepararNome(nome: string) {

  const protegido = nome.toUpperCase().replace(/Ñ/g, "__ENYE__");



  return protegido

    .normalize("NFD")

    .replace(/[\u0300-\u036f]/g, "")

    .replace(/__ENYE__/g, "Ñ");

}



function calcularNome(nome: string) {

  const normalizado = prepararNome(nome);



  const soma = normalizado.split("").reduce((total, letra) => {

    return total + (valores[letra] || 0);

  }, 0);



  if (!soma) return null;



  const reducao = reduzirNumero(soma);



  return {

    soma,

    vibracao: reducao.resultado,

    caminho: reducao.caminho,

  };

}



function calcularData(data: string) {

  if (!data) return null;



  const partes = data.split("-");



  if (partes.length !== 3) return null;



  const ano = Number(partes[0]);

  const mes = Number(partes[1]);

  const dia = Number(partes[2]);



  if (!ano || !mes || !dia) return null;



  const somaInicial = dia + mes + ano;

  const reducao = reduzirNumero(somaInicial);



  return {

    dia,

    mes,

    ano,

    somaInicial,

    vibracao: reducao.resultado,

    caminho: reducao.caminho,

  };

}



function formatarData(data: string) {

  if (!data) return "";



  const [ano, mes, dia] = data.split("-");



  return `${dia}/${mes}/${ano}`;

}



export default function PoderDoNomePage() {

  const [nomeSolteira, setNomeSolteira] = useState("");

  const [nomeCasada, setNomeCasada] = useState("");

  const [dataCasamento, setDataCasamento] = useState("");

  const [mostrarResultado, setMostrarResultado] = useState(false);

  const [mostrarOferta, setMostrarOferta] = useState(false);

  const [erro, setErro] = useState("");



  const resultadoSolteira = useMemo(

    () => (mostrarResultado ? calcularNome(nomeSolteira) : null),

    [mostrarResultado, nomeSolteira]

  );



  const resultadoCasada = useMemo(

    () => (mostrarResultado ? calcularNome(nomeCasada) : null),

    [mostrarResultado, nomeCasada]

  );



  const resultadoData = useMemo(

    () => (mostrarResultado ? calcularData(dataCasamento) : null),

    [mostrarResultado, dataCasamento]

  );



  useEffect(() => {

    if (!mostrarResultado) {

      setMostrarOferta(false);

      return;

    }



    setMostrarOferta(false);



    const timer = window.setTimeout(() => {

      setMostrarOferta(true);

    }, 40000);



    return () => window.clearTimeout(timer);

  }, [mostrarResultado]);



  function limparResultado() {

    setMostrarResultado(false);

    setMostrarOferta(false);

    setErro("");

  }



  function diagnosticar() {

    if (!nomeSolteira.trim() || !nomeCasada.trim() || !dataCasamento) {

      setErro("Preencha os três campos para descobrir suas vibrações.");

      return;

    }



    setErro("");

    setMostrarResultado(true);



    setTimeout(() => {

      document

        .getElementById("resultados-noivas")

        ?.scrollIntoView({ behavior: "smooth", block: "start" });

    }, 100);

  }



  const whatsapp =

    "https\://wa.me/5551980339532?text=" +

    encodeURIComponent(

      `Olá, Oscar. Fiz minha experiência Beleza & Empoderamento.



Nome de solteira: ${nomeSolteira}

Nome de casada: ${nomeCasada}

Data do casamento: ${formatarData(dataCasamento)}



Quero saber mais sobre a análise completa para o meu casamento.`

    );



  return (

    <main className="min-h-screen bg-[#fffaf7] text-[#2b1d24]">

      {/* HERO - COMPUTADOR */}
      <section className="relative hidden h-[100svh] min-h-[650px] max-h-[760px] overflow-hidden lg:block">
        <Image
          src="/noiva-oscar-desktop.png"
          alt="Noiva conversando com Oscar Ahumada"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* FORMULÁRIO DENTRO DA FOTO */}
        <div className="absolute bottom-4 left-1/2 z-20 w-[94%] max-w-[1380px] -translate-x-1/2">
          <div className="rounded-[28px] border border-white/80 bg-[#fffaf7]/94 px-6 py-4 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="nomeSolteiraDesktop" className="mb-1 block text-xs font-bold text-[#2b1d24]">
                  Nome Completo de Solteira
                </label>
                <input
                  id="nomeSolteiraDesktop"
                  type="text"
                  value={nomeSolteira}
                  onChange={(event) => {
                    setNomeSolteira(event.target.value);
                    limparResultado();
                  }}
                  placeholder="Digite seu nome completo"
                  className="w-full rounded-xl border border-[#ead8df] bg-white px-4 py-3 text-sm text-[#2b1d24] outline-none transition focus:border-[#a65d78] focus:ring-4 focus:ring-[#a65d78]/10"
                />
              </div>

              <div>
                <label htmlFor="nomeCasadaDesktop" className="mb-1 block text-xs font-bold text-[#2b1d24]">
                  Nome de Casada
                </label>
                <input
                  id="nomeCasadaDesktop"
                  type="text"
                  value={nomeCasada}
                  onChange={(event) => {
                    setNomeCasada(event.target.value);
                    limparResultado();
                  }}
                  placeholder="Como pretende usar seu nome?"
                  className="w-full rounded-xl border border-[#ead8df] bg-white px-4 py-3 text-sm text-[#2b1d24] outline-none transition focus:border-[#a65d78] focus:ring-4 focus:ring-[#a65d78]/10"
                />
              </div>

              <div>
                <label htmlFor="dataCasamentoDesktop" className="mb-1 block text-xs font-bold text-[#2b1d24]">
                  Data do Casamento
                </label>
                <input
                  id="dataCasamentoDesktop"
                  type="date"
                  value={dataCasamento}
                  onChange={(event) => {
                    setDataCasamento(event.target.value);
                    limparResultado();
                  }}
                  className="w-full rounded-xl border border-[#ead8df] bg-white px-4 py-3 text-sm text-[#2b1d24] outline-none transition focus:border-[#a65d78] focus:ring-4 focus:ring-[#a65d78]/10"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={diagnosticar}
              className="mt-3 w-full rounded-full bg-[#9d4969] px-7 py-3 text-sm font-black uppercase tracking-[0.05em] text-white shadow-lg transition hover:scale-[1.005]"
            >
              Descobrir as Vibrações do Meu Casamento
            </button>

            {erro && (
              <p className="mt-2 text-center text-sm font-semibold text-[#a33f5f]">{erro}</p>
            )}
          </div>
        </div>
      </section>

      {/* HERO - CELULAR / TABLET */}
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden lg:hidden">
        <Image
          src="/noiva-oscar-mobile.png"
          alt="Noiva conversando com Oscar Ahumada"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* FORMULÁRIO DENTRO DA FOTO */}
        <div className="absolute bottom-3 left-3 right-3 z-20">
          <div className="mx-auto w-full max-w-[560px] rounded-[22px] border border-white/80 bg-[#fffaf7]/94 p-3 shadow-2xl backdrop-blur-md">
            <div className="grid gap-2">
              <div>
                <label htmlFor="nomeSolteiraMobile" className="mb-0.5 block text-[10px] font-bold text-[#2b1d24]">
                  Nome Completo de Solteira
                </label>
                <input
                  id="nomeSolteiraMobile"
                  type="text"
                  value={nomeSolteira}
                  onChange={(event) => {
                    setNomeSolteira(event.target.value);
                    limparResultado();
                  }}
                  placeholder="Digite seu nome completo"
                  className="w-full rounded-xl border border-[#ead8df] bg-white px-3 py-2.5 text-xs text-[#2b1d24] outline-none focus:border-[#a65d78] focus:ring-4 focus:ring-[#a65d78]/10"
                />
              </div>

              <div>
                <label htmlFor="nomeCasadaMobile" className="mb-0.5 block text-[10px] font-bold text-[#2b1d24]">
                  Nome de Casada
                </label>
                <input
                  id="nomeCasadaMobile"
                  type="text"
                  value={nomeCasada}
                  onChange={(event) => {
                    setNomeCasada(event.target.value);
                    limparResultado();
                  }}
                  placeholder="Como pretende usar seu nome?"
                  className="w-full rounded-xl border border-[#ead8df] bg-white px-3 py-2.5 text-xs text-[#2b1d24] outline-none focus:border-[#a65d78] focus:ring-4 focus:ring-[#a65d78]/10"
                />
              </div>

              <div>
                <label htmlFor="dataCasamentoMobile" className="mb-0.5 block text-[10px] font-bold text-[#2b1d24]">
                  Data do Casamento
                </label>
                <input
                  id="dataCasamentoMobile"
                  type="date"
                  value={dataCasamento}
                  onChange={(event) => {
                    setDataCasamento(event.target.value);
                    limparResultado();
                  }}
                  className="w-full rounded-xl border border-[#ead8df] bg-white px-3 py-2.5 text-xs text-[#2b1d24] outline-none focus:border-[#a65d78] focus:ring-4 focus:ring-[#a65d78]/10"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={diagnosticar}
              className="mt-2.5 w-full rounded-full bg-[#9d4969] px-3 py-3 text-[10px] font-black uppercase leading-4 tracking-[0.03em] text-white shadow-lg sm:text-xs"
            >
              Descobrir as Vibrações do Meu Casamento
            </button>

            {erro && (
              <p className="mt-1.5 text-center text-[10px] font-semibold text-[#a33f5f]">{erro}</p>
            )}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}

      {mostrarResultado &&

        resultadoSolteira &&

        resultadoCasada &&

        resultadoData && (

          <section

            id="resultados-noivas"

            className="scroll-mt-10 bg-white px-4 py-16 sm:px-6 md:py-20"

          >

            <div className="mx-auto max-w-6xl">

              <div className="text-center">

                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a65d78]">

                  Seu presente

                </p>



                <h2 className="mt-3 text-3xl font-bold md:text-5xl">

                  Três números. Uma nova história.

                </h2>



                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#66545c]">

                  Cada resultado apresenta uma vibração diferente deste momento

                  especial da sua vida.

                </p>

              </div>



              <div className="mt-10 grid gap-6 lg:grid-cols-3">

                <ResultadoCard

                  legenda="Seu Nome de Solteira"

                  numero={resultadoSolteira.vibracao}

                  interpretacao={

                    interpretacoesNome[resultadoSolteira.vibracao]

                  }

                />



                <ResultadoCard

                  legenda="Seu Nome de Casada"

                  numero={resultadoCasada.vibracao}

                  interpretacao={interpretacoesNome[resultadoCasada.vibracao]}

                />



                <ResultadoCard

                  legenda={`Destino do Casamento — ${formatarData(

                    dataCasamento

                  )}`}

                  numero={resultadoData.vibracao}

                  interpretacao={

                    interpretacoesCasamento[resultadoData.vibracao]

                  }

                />

              </div>



              <div className="mt-10 rounded-[30px] bg-[#fff6f2] px-6 py-9 text-center sm:px-10">

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a65d78]">

                  Uma mudança importante

                </p>



                <h3 className="mt-4 text-2xl font-bold md:text-3xl">

                  Seu nome passa da vibração{" "}

                  <span className="text-[#a65d78]">

                    {resultadoSolteira.vibracao}

                  </span>{" "}

                  para{" "}

                  <span className="text-[#a65d78]">

                    {resultadoCasada.vibracao}

                  </span>

                </h3>



                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#66545c]">

                  O nome que você passa a utilizar depois do casamento pode

                  apresentar uma composição numerológica diferente. Por isso,

                  compreender essa mudança antes de decidir definitivamente como

                  assinar pode trazer informações importantes para esta nova

                  etapa.

                </p>

              </div>



              <div className="mt-8 rounded-[30px] bg-[#2b1d24] px-6 py-9 text-white sm:px-10 md:py-12">

                <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-[#e6a9bd]">

                  Existe muito mais para descobrir

                </p>



                <h3 className="mx-auto mt-4 max-w-3xl text-center text-2xl font-bold leading-tight md:text-4xl">

                  Um casamento não pode ser compreendido apenas pela data.

                </h3>



                <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-8 text-white/85">

                  Antes do casamento existem duas histórias, duas

                  personalidades, dois caminhos e dois Mapas Numerológicos.

                </p>



                <p className="mx-auto mt-5 max-w-4xl text-center text-lg leading-8 text-white/85">

                  A análise dos <strong>Mapas Numerológicos do casal</strong> e

                  da <strong> Compatibilidade</strong> permite compreender onde

                  existe maior facilidade entre vocês, quais diferenças podem

                  exigir mais atenção e como cada pessoa tende a reagir diante

                  das situações da vida a dois.

                </p>



                <p className="mx-auto mt-5 max-w-4xl text-center text-lg leading-8 text-white/85">

                  Compatibilidade não significa simplesmente dizer se duas

                  pessoas “combinam” ou “não combinam”. O objetivo é oferecer

                  conhecimento para que o casal compreenda melhor suas

                  potencialidades, desafios e formas de construir a relação.

                </p>



                <p className="mx-auto mt-7 max-w-3xl text-center text-xl font-bold leading-8 text-[#e6a9bd]">

                  A Numerologia não escolhe por vocês. Ela oferece informações

                  para que vocês façam escolhas mais conscientes.

                </p>

              </div>

            </div>

          </section>

        )}



      {/* FECHAMENTO */}

      <section className="bg-[#fffaf7] px-5 py-16 sm:px-6 md:py-20">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#a65d78]">

            Oscar Ahumada — Numerólogo das Estrelas

          </p>



          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">

            O amor é a escolha.

            <span className="text-[#a65d78]"> A Numerologia é o guia.</span>

          </h2>



          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#66545c]">

            Se quiser compreender mais profundamente seu novo nome, a data e a

            compatibilidade do casal, converse diretamente com Oscar.

          </p>



          <a

            href={whatsapp}

            target="_blank"

            rel="noopener noreferrer"

            className="mt-8 inline-flex rounded-full bg-[#9d4969] px-8 py-4 text-center font-bold text-white shadow-lg transition hover:scale-105"

          >

            CONVERSAR COM OSCAR AHUMADA

          </a>

        </div>

      </section>



      {/* POP-UP */}

      {mostrarOferta && (

        <div

          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2b1d24]/80 px-4 py-5 backdrop-blur-sm"

          role="dialog"

          aria-modal="true"

          aria-labelledby="titulo-oferta"

        >

          <div className="relative max-h-[94vh] w-full max-w-xl overflow-y-auto rounded-[30px] bg-white p-6 text-[#2b1d24] shadow-2xl sm:p-8">

            <button

              type="button"

              onClick={() => setMostrarOferta(false)}

              aria-label="Fechar oferta"

              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#ead8df] bg-white text-xl font-bold"

            >

              ×

            </button>



            <div className="pr-10 text-center">

              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a65d78]">

                Condição especial Beleza & Empoderamento

              </p>

            </div>



            <h2

              id="titulo-oferta"

              className="mx-auto mt-5 max-w-lg text-center text-2xl font-bold leading-tight sm:text-3xl"

            >

              Você descobriu apenas uma parte do que a Numerologia pode revelar

              sobre esta nova etapa.

            </h2>



            <div className="mt-6 rounded-[25px] bg-[#fff6f2] p-6 text-center">

              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#806c75]">

                Experiência completa para o casamento

              </p>



              <p className="mt-5 text-lg text-[#806c75]">Valor normal</p>



              <p className="mt-1 text-2xl font-bold text-[#806c75] line-through">

                R$ 1.700,00

              </p>



              <div className="mx-auto mt-4 inline-block rounded-full bg-[#9d4969] px-5 py-2 text-sm font-black uppercase tracking-[0.1em] text-white">

                50% de desconto

              </div>



              <p className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-[#a65d78]">

                Condição especial

              </p>



              <p className="mt-1 text-5xl font-black text-[#9d4969]">

                R$ 850,00

              </p>

            </div>



            <div className="mt-6 space-y-3 rounded-[22px] border border-[#ead8df] p-5">

              <p className="font-bold text-[#2b1d24]">

                A experiência completa inclui:

              </p>



              <p className="text-[#66545c]">

                ✓ Mapa Numerológico Pessoal Completo

              </p>



              <p className="text-[#66545c]">

                ✓ Análise aprofundada do Nome de Casada

              </p>



              <p className="text-[#66545c]">

                ✓ Análise da Data do Casamento

              </p>



              <p className="text-[#66545c]">

                ✓ Orientações para compreender melhor esta nova etapa

              </p>

            </div>



            <p className="mx-auto mt-6 max-w-md text-center leading-7 text-[#66545c]">

              Uma oportunidade para ir além do presente inicial e compreender

              com mais profundidade as vibrações que podem acompanhar esta nova

              fase da sua vida.

            </p>



            <a

              href={whatsapp}

              target="_blank"

              rel="noopener noreferrer"

              className="mt-6 block w-full rounded-full bg-[#9d4969] px-6 py-5 text-center text-base font-black uppercase tracking-[0.04em] text-white shadow-lg transition hover:scale-[1.01]"

            >

              QUERO APROVEITAR 50% DE DESCONTO

            </a>



            <button

              type="button"

              onClick={() => setMostrarOferta(false)}

              className="mt-4 w-full py-2 text-sm font-semibold text-[#806c75] underline"

            >

              Continuar vendo meu resultado

            </button>

          </div>

        </div>

      )}

    </main>

  );

}



function ResultadoCard({

  legenda,

  numero,

  interpretacao,

}: {

  legenda: string;

  numero: number;

  interpretacao: Interpretacao;

}) {

  return (

    <article className="rounded-[28px] border border-[#ead8df] bg-[#fffaf7] p-7 text-center shadow-lg">

      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a65d78]">

        {legenda}

      </p>



      <div className="mx-auto mt-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#9d4969] text-5xl font-bold text-white shadow-lg">

        {numero}

      </div>



      <h3 className="mt-5 text-xl font-bold text-[#2b1d24] sm:text-2xl">

        {interpretacao.titulo}

      </h3>



      <p className="mt-4 leading-7 text-[#66545c]">

        {interpretacao.texto}

      </p>

    </article>

  );

}