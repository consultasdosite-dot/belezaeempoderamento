"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function CadastroParceiroPage() {
  const [aceite, setAceite] = useState(false);

  function enviarCadastro(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!aceite) {
      return;
    }

    alert(
      "Cadastro preenchido. Na próxima etapa conectaremos este formulário ao sistema."
    );
  }

  return (
    <main className="min-h-screen bg-[#fff8f5] text-[#2b1d24]">
      {/* HERO */}
      <section className="overflow-hidden bg-gradient-to-br from-[#fff5ef] via-[#fbe8e5] to-[#f3d6dc]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:py-16">
          {/* TEXTO */}
          <div className="order-2 md:order-1">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-[#b65375]">
              Beleza &amp; Empoderamento
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Uma parceria que une
              <span className="block text-[#b84269]">
                beleza, autoconhecimento
              </span>
              e novas oportunidades.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#6f5962]">
              Faça parte de uma proposta criada para transformar a experiência
              das suas clientes e gerar uma nova oportunidade de receita para o
              seu salão.
            </p>

            <div className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#9d4969] shadow-sm">
              Parceria com Oscar Ahumada
            </div>
          </div>

          {/* FOTO OSCAR */}
          <div className="order-1 md:order-2">
            <div className="relative mx-auto max-w-[520px] overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl">
              <Image
                src="/oscar-ahumada.png"
                alt="Oscar Ahumada"
                width={800}
                height={600}
                priority
                className="h-auto w-full rounded-[1.6rem] object-cover"
              />
            </div>

            <div className="mt-5 text-center">
              <p className="text-xl font-bold">Oscar Ahumada</p>

              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#a65d78]">
                Numerólogo das Estrelas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="px-5 pb-6 pt-14">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b65375]">
            Cadastro de parceiro
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Cadastre seu salão ou espaço de beleza
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6f5962]">
            Preencha os dados abaixo para solicitar sua participação no
            Beleza &amp; Empoderamento.
          </p>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="px-5 pb-16 pt-8">
        <form
          onSubmit={enviarCadastro}
          className="mx-auto max-w-5xl rounded-[2rem] bg-white p-7 shadow-sm md:p-12"
        >
          {/* DADOS DO ESTABELECIMENTO */}
          <div>
            <h3 className="text-2xl font-bold text-[#ad5b79]">
              Dados do estabelecimento
            </h3>

            <div className="mt-8 grid gap-7 md:grid-cols-2">
              <Campo
                label="Nome do salão ou espaço"
                name="nomeSalao"
                placeholder="Ex.: Espaço Bella"
                required
              />

              <Campo
                label="CNPJ"
                name="cnpj"
                placeholder="00.000.000/0000-00"
              />

              <Campo
                label="Instagram do estabelecimento"
                name="instagram"
                placeholder="@seusalao"
              />

              <Campo
                label="WhatsApp do estabelecimento"
                name="whatsappSalao"
                placeholder="(00) 00000-0000"
                required
              />

              <Campo
                label="Cidade"
                name="cidade"
                placeholder="Sua cidade"
                required
              />

              <Campo
                label="Estado"
                name="estado"
                placeholder="UF"
                required
              />
            </div>
          </div>

          <div className="my-12 h-px bg-[#ecd9df]" />

          {/* RESPONSÁVEL */}
          <div>
            <h3 className="text-2xl font-bold text-[#ad5b79]">
              Responsável pela parceria
            </h3>

            <div className="mt-8 grid gap-7 md:grid-cols-2">
              <Campo
                label="Nome completo"
                name="responsavel"
                placeholder="Nome do responsável"
                required
              />

              <Campo
                label="CPF"
                name="cpf"
                placeholder="000.000.000-00"
                required
              />

              <Campo
                label="E-mail"
                name="email"
                type="email"
                placeholder="seuemail@email.com"
                required
              />

              <Campo
                label="WhatsApp"
                name="whatsappResponsavel"
                placeholder="(00) 00000-0000"
                required
              />
            </div>
          </div>

          <div className="my-12 h-px bg-[#ecd9df]" />

          {/* MODELO COMERCIAL */}
          <div className="rounded-[1.5rem] bg-[#fff2f5] p-7 md:p-9">
            <h3 className="text-2xl font-bold">Como funciona a parceria</h3>

            <div className="mt-6 space-y-5 text-lg leading-8 text-[#6f5962]">
              <p>
                O salão comercializa o Mapa Numerológico para sua cliente pelo
                valor de <strong>R$ 400,00</strong>.
              </p>

              <p>
                O pagamento da cliente é recebido diretamente pelo próprio
                salão. Depois da venda, o salão acessa sua área exclusiva no
                Beleza &amp; Empoderamento para realizar o pedido.
              </p>

              <p>
                Para confirmar o pedido, o salão realiza o pagamento de{" "}
                <strong>R$ 200,00</strong> referente à produção dos Mapas.
              </p>

              <p>
                Os outros <strong>R$ 200,00 permanecem com o salão</strong> no
                momento da venda.
              </p>
            </div>

            {/* RESUMO FINANCEIRO */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#9d7180]">
                  Venda à cliente
                </p>
                <p className="mt-2 text-3xl font-bold">R$ 400,00</p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#9d7180]">
                  Produção dos Mapas
                </p>
                <p className="mt-2 text-3xl font-bold">R$ 200,00</p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#9d7180]">
                  Permanece no salão
                </p>
                <p className="mt-2 text-3xl font-bold text-[#a74367]">
                  R$ 200,00
                </p>
              </div>
            </div>
          </div>

          {/* O QUE SERÁ ENTREGUE */}
          <div className="mt-8 rounded-[1.5rem] border border-[#ecd9df] p-7 md:p-9">
            <h3 className="text-2xl font-bold">O que a cliente receberá</h3>

            <p className="mt-5 text-lg leading-8 text-[#6f5962]">
              Cada pedido dará direito a{" "}
              <strong>2 documentos personalizados</strong>.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-[#fff8f5] p-6">
                <p className="font-bold text-[#a74367]">
                  1. Mapa Numerológico
                </p>

                <p className="mt-3 leading-7 text-[#6f5962]">
                  Revelação e interpretação dos números dos nomes, Destino e
                  Pináculo.
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff8f5] p-6">
                <p className="font-bold text-[#a74367]">
                  2. Mapa de Previsões
                </p>

                <p className="mt-3 leading-7 text-[#6f5962]">
                  Previsões numerológicas personalizadas até 31 de dezembro do
                  ano seguinte.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#2b1d24] px-6 py-5 text-white">
              <p className="text-lg font-bold">
                Prazo de entrega: até 10 dias.
              </p>

              <p className="mt-2 text-sm leading-6 text-white/80">
                O prazo será contado após a confirmação do pagamento de
                R$ 200,00 e o recebimento correto de todos os dados necessários
                para a produção dos Mapas.
              </p>
            </div>
          </div>

          {/* ACEITE */}
          <label className="mt-9 flex cursor-pointer items-start gap-4">
            <input
              type="checkbox"
              checked={aceite}
              onChange={(event) => setAceite(event.target.checked)}
              className="mt-1 h-5 w-5 accent-[#a74367]"
            />

            <span className="text-base leading-7 text-[#6f5962]">
              Declaro que os dados informados são verdadeiros e desejo
              solicitar minha participação como parceiro do Beleza &amp;
              Empoderamento.
            </span>
          </label>

          {/* BOTÃO */}
          <button
            type="submit"
            disabled={!aceite}
            className="mt-9 w-full rounded-full bg-[#9d4969] px-8 py-5 text-base font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#843b58] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Quero ser parceiro
          </button>

          <p className="mt-5 text-center text-sm leading-6 text-[#8b747d]">
            Após a aprovação do cadastro, o salão terá acesso à sua área
            exclusiva para realizar e acompanhar os pedidos.
          </p>
        </form>
      </section>
    </main>
  );
}

type CampoProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

function Campo({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: CampoProps) {
  return (
    <label className="block">
      <span className="mb-3 block font-semibold">
        {label}
        {required && <span className="text-[#b84269]"> *</span>}
      </span>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-[#e5d6dc] bg-white px-5 py-4 text-base outline-none transition placeholder:text-[#a79da1] focus:border-[#a65d78] focus:ring-2 focus:ring-[#a65d78]/10"
      />
    </label>
  );
}