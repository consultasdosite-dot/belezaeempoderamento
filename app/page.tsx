
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#fffaf7] text-[#2b1d24]">
      {/* ABERTURA */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-6xl items-stretch gap-10 md:grid-cols-2 md:gap-14">
          
          {/* FOTO DA NOIVA */}
          <div className="order-1 flex">
            <div className="w-full overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl">
              <div className="relative h-[560px] w-full md:h-full md:min-h-[720px]">
                <Image
                  src="/experiencia-noiva.png"
                  alt="Noiva vivendo um momento especial no Dia da Noiva"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-[1.5rem] object-cover"
                  priority
                />

                {/* TEXTO SOBRE A FOTO */}
                <div className="absolute left-0 right-0 top-0 z-10 p-5 text-center md:p-7">
                  <div className="mx-auto inline-block rounded-xl bg-black/25 px-4 py-3 backdrop-blur-[1px]">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-white drop-shadow-lg md:text-xl">
                      Beleza & Empoderamento
                    </p>

                    <p className="mt-1 text-xs font-medium text-white drop-shadow-lg md:text-sm">
                      Uma experiência especial para o Dia da Noiva
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TEXTO */}
          <div className="order-2 flex flex-col justify-center text-center md:text-left">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-[#a65d78]">
              Beleza & Empoderamento
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Um presente especial para
              <span className="text-[#a65d78]">
                {" "}
                um dos dias mais importantes da vida dela.
              </span>
            </h1>

            <p className="mt-7 text-lg leading-8 text-[#66545c] md:text-xl">
              No Dia da Noiva, seu espaço pode oferecer gratuitamente uma
              experiência exclusiva de Numerologia que revela as vibrações do{" "}
              <strong>
                Nome de Solteira, Nome de Casada e da Data do Casamento.
              </strong>
            </p>

            <p className="mt-5 text-lg leading-8 text-[#66545c]">
              Uma experiência criada por{" "}
              <strong>Oscar Ahumada — Numerólogo das Estrelas</strong>, que
              transforma um momento de beleza em uma lembrança ainda mais
              pessoal e inesquecível.
            </p>

            <div className="mt-7 rounded-2xl bg-white p-5 shadow-sm">
              <p className="font-bold leading-7">
                Seu espaço oferece o presente. A noiva vive a experiência.
                <span className="text-[#a65d78]">
                  {" "}
                  E sua empresa ainda pode ganhar com essa parceria.
                </span>
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#como-funciona"
                className="inline-block rounded-full bg-[#9d4969] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:scale-105 md:text-lg"
              >
                QUERO OFERECER ESTE PRESENTE ÀS MINHAS NOIVAS
              </a>
            </div>

            <p className="mt-6 text-sm text-[#806c75]">
              Uma iniciativa de Oscar Ahumada — Numerólogo das Estrelas
            </p>
          </div>
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
              Um presente especial no Dia da Noiva
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Seu espaço oferece o presente.
              <span className="text-[#a65d78]">
                {" "}
                Nós fazemos o restante.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#66545c]">
              Seu estabelecimento recebe um material exclusivo para oferecer
              gratuitamente às noivas uma experiência numerológica criada por
              <strong> Oscar Ahumada — Numerólogo das Estrelas.</strong>
            </p>

            <p className="mt-5 text-lg leading-8 text-[#66545c]">
              A noiva aponta o celular para o QR Code e recebe uma experiência
              personalizada sobre três aspectos diretamente ligados a esse
              momento tão importante da sua vida:
            </p>

            <div className="mt-7 space-y-3 text-lg font-semibold text-[#2b1d24]">
              <p>Nome de Solteira</p>
              <p>Nome de Casada</p>
              <p>Data do Casamento</p>
            </div>

            <p className="mt-6 text-lg leading-8 text-[#66545c]">
              Tudo de forma simples, digital e sem nenhum custo para o seu
              estabelecimento.
            </p>

            {/* COMISSÃO */}
            <div className="mt-8 rounded-2xl bg-[#fff6f2] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a65d78]">
                Sua parceria também pode gerar receita
              </p>

              <p className="mt-3 text-xl font-bold leading-8 text-[#2b1d24]">
                Se a noiva contratar a experiência completa de R$ 850,00,
                seu salão ou você, profissional parceiro, recebe
                <span className="text-[#a65d78]">
                  {" "}
                  30% de comissão.
                </span>
              </p>

              <div className="mt-5 rounded-xl bg-white p-5 text-center shadow-sm">
                <p className="text-sm font-semibold text-[#66545c]">
                  Comissão por contratação
                </p>

                <p className="mt-1 text-4xl font-bold text-[#a65d78]">
                  R$ 255,00
                </p>
              </div>

              <p className="mt-5 text-base leading-7 text-[#66545c]">
                A experiência completa inclui o{" "}
                <strong>Mapa Numerológico Pessoal Completo</strong>, a análise
                do <strong>Nome de Casada</strong> e a indicação da{" "}
                <strong>melhor Data para o Casamento</strong>.
              </p>
            </div>
          </div>

          {/* NOVA IMAGEM */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#fffaf7] p-3 shadow-xl">
              <Image
                src="/presente-noiva-oscar.png"
                alt="Presente especial para noivas com Oscar Ahumada"
                width={1024}
                height={1536}
                className="h-auto w-full max-w-[520px] rounded-[1.5rem]"
              />
            </div>

            {/* BOTÃO DE CADASTRO DO PARCEIRO */}
            <a
              href="/cadastro-parceiro"
              className="mt-8 inline-block rounded-full bg-[#9d4969] px-8 py-4 text-center text-base font-bold text-white shadow-lg transition hover:scale-105 md:text-lg"
            >
              QUERO SER PARCEIRO
            </a>
          </div>
        </div>
      </section>

      {/* RODAPÉ INSTITUCIONAL */}
      <footer className="border-t border-[#eadce1] bg-[#fffaf7] px-6 py-12 text-center">
        <div className="mx-auto max-w-6xl">
          <p className="text-xl font-bold text-[#9d4969]">
            Beleza & Empoderamento
          </p>

          <p className="mt-3 text-sm leading-6 text-[#66545c]">
            Uma iniciativa de Oscar Ahumada — Numerólogo das Estrelas
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-[#9d4969]">
            <a
              href="https://wa.me/5531972159908"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Contato
            </a>

            <span className="text-[#806c75]">
              Política de Privacidade
            </span>

            <span className="text-[#806c75]">
              Termos de Uso
            </span>
          </div>

          <p className="mt-8 text-xs text-[#806c75]">
            © 2026 Beleza & Empoderamento — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
