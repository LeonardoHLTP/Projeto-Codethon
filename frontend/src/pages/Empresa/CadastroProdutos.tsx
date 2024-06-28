import { Card, CardBody, CardHeader, Heading, FormControl, FormLabel, Input, Button, FormHelperText } from "@chakra-ui/react";
import { useState } from "react";

interface ProdutoData {
  descricao: string;
  tempoAtendimento: number;
  valor: number;
}

interface ProdutoDataErrors {
  descricaoError: boolean,
  tempoAtendimentoError: boolean,
  valorError: boolean,
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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, name: keyof ProdutoData): void {
    setProdutoData({ ...produtoData, [name]: name === "tempoAtendimento" || name === "valor" ? parseFloat(e.target.value) : e.target.value });
    setTouchedFields({ ...touchedFields, [name]: true });
  }

  const dataErrors: ProdutoDataErrors = {
    descricaoError: produtoData.descricao.length < 3,
    tempoAtendimentoError: produtoData.tempoAtendimento <= 0,
    valorError: produtoData.valor <= 0,
  }

  return (
    <div className="flex justify-center items-center h-dvh bg-slate-200">
      <Card className="w-80 h-[70%]">
        <CardHeader>
          <Heading>Cadastro Produto</Heading>
        </CardHeader>
        <CardBody>
          <FormControl isRequired isInvalid={dataErrors.descricaoError && touchedFields.descricao}>
            <FormLabel>Descrição:</FormLabel>
            <Input onChange={e => handleChange(e, "descricao")} value={produtoData.descricao} type="text" />
            {dataErrors.descricaoError &&
              <FormHelperText> Descrição inválida. </FormHelperText>
            }
          </FormControl>
          <FormControl isRequired isInvalid={dataErrors.tempoAtendimentoError && touchedFields.tempoAtendimento}>
            <FormLabel>Tempo de Atendimento (em minutos):</FormLabel>
            <Input onChange={e => handleChange(e, "tempoAtendimento")} value={produtoData.tempoAtendimento} type="number" />
            {dataErrors.tempoAtendimentoError &&
              <FormHelperText> Tempo de Atendimento inválido. </FormHelperText>
            }
          </FormControl>
          <FormControl isRequired isInvalid={dataErrors.valorError && touchedFields.valor}>
            <FormLabel>Valor (R$):</FormLabel>
            <Input onChange={e => handleChange(e, "valor")} value={produtoData.valor} type="number" step="0.01" />
            {dataErrors.valorError &&
              <FormHelperText> Valor inválido. </FormHelperText>
            }
          </FormControl>
          <hr className="my-3" />
          <div className="flex gap-2">
            <Button>Enviar</Button>
            <Button onClick={() => setProdutoData(produtoDataInitialState)}>Limpar</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
