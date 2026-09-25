import Image from "next/image";
import Link from "next/link";

export default function ParceirosPage() {
  return (
    <main className="min-h-screen bg-[#fffaf7] text-[#2b1d24]">
      {/* HERO COM IMAGEM */}
      <section className="bg-[#2b1d24]">
        <div className="relative mx-auto max-w-[1600px]">
          <Image
            src="/hero-saloes-parceiros.png"
            alt="Beleza & Empoderamento - parceria para salões de beleza"
            width={1536}
            height={864}
            priority
            className="h-auto w-full"
          />
        </div>

        <div className="px-6 pb-12 pt-8 text-center">
          <a
            href="#parceria"
            className="inline-block rounded-full bg-[#b94d75] px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105"
          >
            QUERO SER PARCEIRO
          </a>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#eadce2]">
            Cadastre seu salão, clínica ou espaço de beleza e conheça nossa
            proposta de parceria.
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="parceria" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a65d78]">
              Uma parceria simples
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Você oferece a experiência.
              <span className="text-[#a65d78]"> Nós fazemos o restante.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#66545c]">
              Seu salão recebe um material exclusivo com QR Code para apresentar
              às clientes a experiência gratuita{" "}
              <strong>“Descubra o Poder do Seu Nome”.</strong>
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#fff7f3] p-8 shadow-sm">
              <span className="text-4xl font-bold text-[#a65d78]">01</span>

              <h3 className="mt-5 text-xl font-bold">
                Sua cliente experimenta
              </h3>

              <p className="mt-3 leading-7 text-[#66545c]">
                Ela acessa gratuitamente a experiência através do QR Code
                exclusivo do seu estabelecimento.
              </p>
            </div>

            <div className="rounded-3xl bg-[#fff7f3] p-8 shadow-sm">
              <span className="text-4xl font-bold text-[#a65d78]">02</span>

              <h3 className="mt-5 text-xl font-bold">
                Ela pode adquirir o Mapa
              </h3>

              <p className="mt-3 leading-7 text-[#66545c]">
                O Mapa Numerológico Completo em texto será oferecido por{" "}
                <strong>R$ 400,00.</strong>
              </p>
            </div>

            <div className="rounded-3xl bg-[#fff7f3] p-8 shadow-sm">
              <span className="text-4xl font-bold text-[#a65d78]">03</span>

              <h3 className="mt-5 text-xl font-bold">
                Seu salão recebe R$ 200,00
              </h3>

              <p className="mt-3 leading-7 text-[#66545c]">
                Cada venda identificada pelo seu salão gera{" "}
                <strong>50% de comissão.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMISSÃO */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#2b1d24] px-7 py-14 text-center text-white md:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#e4a9bc]">
            Uma nova receita para o seu espaço
          </p>

          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            Uma venda de R$ 400,00
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
            <div>
              <p className="text-sm text-[#e5d8de]">Cliente paga</p>
              <p className="text-4xl font-bold">R$ 400,00</p>
            </div>

            <div className="hidden text-3xl md:block">→</div>

            <div>
              <p className="text-sm text-[#e5d8de]">Seu salão recebe</p>
              <p className="text-5xl font-bold text-[#f2b5ca]">R$ 200,00</p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-2xl leading-7 text-[#e5d8de]">
            Cada parceiro terá um link e QR Code exclusivos para identificar
            automaticamente as vendas originadas pelo estabelecimento.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a65d78]">
            Beleza & Empoderamento
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Quero oferecer essa experiência às minhas clientes
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#66545c]">
            Faça seu cadastro para conhecer a parceria e receber as informações
            para participar.
          </p>

          <Link
            href="/cadastro-parceiro"
            className="mt-9 inline-block rounded-full bg-[#9d4969] px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105"
          >
            QUERO SER PARCEIRO
          </Link>
        </div>
      </section>

      <footer className="bg-[#21151b] px-6 py-8 text-center text-sm text-[#d8c8cf]">
        <p>Beleza & Empoderamento</p>
        <p className="mt-2">
          Uma iniciativa de Oscar Ahumada — Numerólogo das Estrelas
        </p>
      </footer>
    </main>
  );
}