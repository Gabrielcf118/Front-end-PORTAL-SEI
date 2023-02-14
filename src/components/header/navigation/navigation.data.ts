import type { Navigation } from "@/interfaces/navigation";

export const navigations: Navigation[] = [
  {
    label: "Acesso ao sitema SEI",
    path: "https://sei.anapolis.go.gov.br/sip/login.php?sigla_orgao_sistema=PMA&sigla_sistema=SEI&infra_url=L3NlaS8=",
  },
  {
    label: "Pesquisa Publica ",
    path: "http://sei.anapolis.go.gov.br/sei/modulos/pesquisa/md_pesq_processo_pesquisar.php?acao_externa=protocolo_pesquisar&acao_origem_externa=protocolo_pesquisar&id_orgao_acesso_externo=0",
  },
  {
    label: "Usuario EXterno",
    path: "http://sei.anapolis.go.gov.br/sei/controlador_externo.php?acao=usuario_externo_logar&id_orgao_acesso_externo=1",
  },
  {
    label: "Conferencia de Autenticacao de documento",
    path: "https://sei.anapolis.go.gov.br/sei/controlador_externo.php?acao=documento_conferir&id_orgao_acesso_externo=0",
  },
];
