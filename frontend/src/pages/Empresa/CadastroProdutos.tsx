import { Card, CardBody, CardHeader, Heading, FormControl, FormLabel, Input, Button, FormHelperText, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";

interface ProdutoData {
  descricao: string;
  tempoAtendimento: number;
  valor: number;
}

interface ProdutoDataErrors {
  descricaoError: boolean;
  tempoAtendimentoError: boolean;
  valorError: boolean;
}

interface TouchedFields {
  descricao: boolean;
  tempoAtendimento: boolean;
  valor: boolean;
}

export function CadastroProduto() {
  const produtoDataInitialState: ProdutoData = { descricao: "", tempoAtendimento: 0, valor: 0 };
  const [touchedFields, setTouchedFields] = useState<TouchedFields>({ descricao: false, tempoAtendimento: false, valor: false });
  const [produtoData, setProdutoData] = useState<ProdutoData>(produtoDataInitialState);
  const [produtos, setProdutos] = useState<ProdutoData[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, name: keyof ProdutoData): void {
    setProdutoData({ ...produtoData, [name]: name === "tempoAtendimento" || name === "valor" ? parseFloat(e.target.value) : e.target.value });
    setTouchedFields({ ...touchedFields, [name]: true });
  }

  const dataErrors: ProdutoDataErrors = {
    descricaoError: produtoData.descricao.length < 3,
    tempoAtendimentoError: produtoData.tempoAtendimento <= 0,
    valorError: produtoData.valor <= 0,
  };

  function handleSubmit() {
    if (!dataErrors.descricaoError && !dataErrors.tempoAtendimentoError && !dataErrors.valorError) {
      setProdutos([...produtos, produtoData]);
      setProdutoData(produtoDataInitialState);
      setTouchedFields({ descricao: false, tempoAtendimento: false, valor: false });
    }
  }

  return (
    <div className="flex flex-col items-center h-screen bg-slate-200 p-4">
      <Card className="w-full max-w-3xl mb-4">
        <CardHeader>
          <Heading>Cadastro Produto</Heading>
        </CardHeader>
        <CardBody>
          <FormControl isRequired isInvalid={dataErrors.descricaoError && touchedFields.descricao} mb="4" width="full">
            <FormLabel>Descrição:</FormLabel>
            <Input onChange={e => handleChange(e, "descricao")} value={produtoData.descricao} type="text" width="full" />
            {dataErrors.descricaoError && <FormHelperText>Descrição inválida.</FormHelperText>}
          </FormControl>
          <FormControl isRequired isInvalid={dataErrors.tempoAtendimentoError && touchedFields.tempoAtendimento} mb="4" width="full">
            <FormLabel>Tempo de Atendimento (em minutos):</FormLabel>
            <Input onChange={e => handleChange(e, "tempoAtendimento")} value={produtoData.tempoAtendimento} type="number" width="full" />
            {dataErrors.tempoAtendimentoError && <FormHelperText>Tempo de Atendimento inválido.</FormHelperText>}
          </FormControl>
          <FormControl isRequired isInvalid={dataErrors.valorError && touchedFields.valor} mb="4" width="full">
            <FormLabel>Valor (R$):</FormLabel>
            <Input onChange={e => handleChange(e, "valor")} value={produtoData.valor} type="number" step="0.01" width="full" />
            {dataErrors.valorError && <FormHelperText>Valor inválido.</FormHelperText>}
          </FormControl>
          <hr className="my-3" />
          <div className="flex gap-2">
            <Button onClick={handleSubmit}>Enviar</Button>
            <Button onClick={() => setProdutoData(produtoDataInitialState)}>Limpar</Button>
          </div>
        </CardBody>
      </Card>
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <Heading>Produtos Cadastrados</Heading>
        </CardHeader>
        <CardBody>
          <List spacing={3}>
            {produtos.map((produto, index) => (
              <ListItem key={index} className="border-b border-gray-300 pb-2 mb-2">
                <b>Descrição:</b> {produto.descricao} <br />
                <b>Tempo de Atendimento:</b> {produto.tempoAtendimento} minutos <br />
                <b>Valor:</b> R$ {produto.valor.toFixed(2)}
              </ListItem>
            ))}
          </List>
        </CardBody>
      </Card>
    </div>
  );
}
