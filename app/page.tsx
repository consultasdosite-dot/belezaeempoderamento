import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#fffaf7] text-[#2b1d24]">
      {/* ABERTURA */}
      <section className="flex min-h-screen items-center justify-center px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-[#a65d78]">
            Beleza & Empoderamento
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Seu espaço de beleza pode se transformar em uma
            <span className="text-[#a65d78]"> nova fonte de renda.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#66545c] md:text-xl">
            Faça parte de um novo projeto de parceria criado para salões,
            clínicas de estética e espaços de beleza de todo o Brasil.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <strong>Sem investimento inicial</strong>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <strong>Sem estoque</strong>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <strong>Ganhe comissão</strong>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#como-funciona"
              className="inline-block rounded-full bg-[#9d4969] px-9 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105"
            >
              QUERO CONHECER A OPORTUNIDADE
            </a>
          </div>

          <p className="mt-8 text-sm text-[#806c75]">
            Uma iniciativa de Oscar Ahumada — Numerólogo das Estrelas
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section
        id="como-funciona"
        className="bg-white px-6 py-20 md:py-28"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#a65d78]">
              Uma experiência dentro do seu espaço
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Você oferece a experiência.
              <span className="text-[#a65d78]">
                {" "}
                Nós fazemos o restante.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#66545c]">
              Seu estabelecimento recebe um material exclusivo para apresentar
              às clientes a experiência gratuita
              <strong> “Descubra o Poder do Seu Nome”.</strong>
            </p>

            <p className="mt-5 text-lg leading-8 text-[#66545c]">
              A cliente aponta o celular para o QR Code, recebe sua experiência
              e conhece o trabalho de Oscar Ahumada.
            </p>

            <div className="mt-8 rounded-2xl bg-[#fff6f2] p-6">
              <p className="text-xl font-bold text-[#2b1d24]">
                E quando essa cliente adquirir um Mapa Numerológico,
                <span className="text-[#a65d78]">
                  {" "}
                  seu estabelecimento recebe comissão.
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#fffaf7] p-3 shadow-xl">
              <Image
                src="/experiencia-salao.png"
                alt="Experiência Descubra o Poder do Seu Nome apresentada em um salão de beleza"
                width={768}
                height={1024}
                className="h-auto w-full max-w-[520px] rounded-[1.5rem]"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}