class DataGenerator {
  constructor() {
    this.nomes = {
      masculinos: [
        'João Silva', 'Pedro Santos', 'Carlos Oliveira', 'Lucas Costa', 'Gabriel Ferreira',
        'Rafael Almeida', 'Daniel Pereira', 'Marcos Rodrigues', 'Bruno Souza', 'Thiago Lima',
        'André Martins', 'Felipe Cardoso', 'Matheus Gomes', 'Leonardo Barbosa', 'Diego Ribeiro',
        'Antônio Nascimento', 'Ricardo Mendes', 'Eduardo Carvalho', 'Roberto Lopes', 'Fernando Castro'
      ],
      femininos: [
        'Maria Silva', 'Ana Santos', 'Juliana Oliveira', 'Fernanda Costa', 'Carolina Ferreira',
        'Amanda Almeida', 'Patrícia Pereira', 'Camila Rodrigues', 'Beatriz Souza', 'Mariana Lima',
        'Isabela Martins', 'Gabriela Cardoso', 'Larissa Gomes', 'Vanessa Barbosa', 'Natália Ribeiro',
        'Claudia Nascimento', 'Renata Mendes', 'Daniela Carvalho', 'Cristina Lopes', 'Adriana Castro'
      ]
    };

    this.sobrenomes = [
      'Silva', 'Santos', 'Oliveira', 'Costa', 'Ferreira', 'Almeida', 'Pereira', 'Rodrigues',
      'Souza', 'Lima', 'Martins', 'Cardoso', 'Gomes', 'Barbosa', 'Ribeiro', 'Nascimento',
      'Mendes', 'Carvalho', 'Lopes', 'Castro', 'Dias', 'Moreira', 'Araújo', 'Cavalcanti',
      'Correia', 'Cunha', 'Dantas', 'Duarte', 'Farias', 'Freitas', 'Gonçalves', 'Guimarães'
    ];

    this.ruas = [
      'Rua das Flores', 'Avenida Principal', 'Rua do Comércio', 'Avenida Brasil', 'Rua da Paz',
      'Avenida Central', 'Rua das Palmeiras', 'Avenida Santos Dumont', 'Rua do Sol', 'Avenida Paulista',
      'Rua das Acácias', 'Avenida Rio Branco', 'Rua das Margaridas', 'Avenida Getúlio Vargas',
      'Rua das Orquídeas', 'Avenida Independência', 'Rua das Rosas', 'Avenida República',
      'Rua das Tulipas', 'Avenida Liberdade'
    ];

    this.bairros = [
      'Centro', 'Jardim América', 'Vila Nova', 'Boa Vista', 'São José', 'Santa Maria',
      'Jardim Primavera', 'Vila Esperança', 'Bairro Industrial', 'Residencial Park',
      'Jardim das Flores', 'Vila São Pedro', 'Bairro Universitário', 'Residencial Solar',
      'Jardim Europa', 'Vila Progresso', 'Bairro Comercial', 'Residencial Green',
      'Jardim das Palmeiras', 'Vila Santa Cruz'
    ];

    this.cidades = [
      'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Brasília', 'Salvador',
      'Fortaleza', 'Curitiba', 'Recife', 'Porto Alegre', 'Manaus',
      'Belém', 'Goiânia', 'Guarulhos', 'Campinas', 'São Luís',
      'Maceió', 'João Pessoa', 'Teresina', 'Natal', 'Campo Grande'
    ];

    this.estados = [
      'SP', 'RJ', 'MG', 'DF', 'BA', 'CE', 'PR', 'PE', 'RS', 'AM',
      'PA', 'GO', 'MA', 'AL', 'PB', 'PI', 'RN', 'MS', 'SC', 'ES'
    ];

    // CEPs válidos brasileiros por região
    this.cepsValidos = {
      'SP': ['01000-000', '01100-000', '01200-000', '01300-000', '01400-000', '01500-000', '01600-000', '01700-000', '01800-000', '01900-000', '02000-000', '02100-000', '02200-000', '02300-000', '02400-000', '02500-000', '02600-000', '02700-000', '02800-000', '02900-000', '03000-000', '03100-000', '03200-000', '03300-000', '03400-000', '03500-000', '03600-000', '03700-000', '03800-000', '03900-000', '04000-000', '04100-000', '04200-000', '04300-000', '04400-000', '04500-000', '04600-000', '04700-000', '04800-000', '04900-000', '05000-000', '05100-000', '05200-000', '05300-000', '05400-000', '05500-000', '05600-000', '05700-000', '05800-000', '05900-000', '06000-000', '06100-000', '06200-000', '06300-000', '06400-000', '06500-000', '06600-000', '06700-000', '06800-000', '06900-000', '07000-000', '07100-000', '07200-000', '07300-000', '07400-000', '07500-000', '07600-000', '07700-000', '07800-000', '07900-000', '08000-000', '08100-000', '08200-000', '08300-000', '08400-000', '08500-000', '08600-000', '08700-000', '08800-000', '08900-000', '09000-000', '09100-000', '09200-000', '09300-000', '09400-000', '09500-000', '09600-000', '09700-000', '09800-000', '09900-000'],
      'RJ': ['20000-000', '20100-000', '20200-000', '20300-000', '20400-000', '20500-000', '20600-000', '20700-000', '20800-000', '20900-000', '21000-000', '21100-000', '21200-000', '21300-000', '21400-000', '21500-000', '21600-000', '21700-000', '21800-000', '21900-000', '22000-000', '22100-000', '22200-000', '22300-000', '22400-000', '22500-000', '22600-000', '22700-000', '22800-000', '22900-000', '23000-000', '23100-000', '23200-000', '23300-000', '23400-000', '23500-000', '23600-000', '23700-000', '23800-000', '23900-000', '24000-000', '24100-000', '24200-000', '24300-000', '24400-000', '24500-000', '24600-000', '24700-000', '24800-000', '24900-000', '25000-000', '25100-000', '25200-000', '25300-000', '25400-000', '25500-000', '25600-000', '25700-000', '25800-000', '25900-000'],
      'MG': ['30000-000', '30100-000', '30200-000', '30300-000', '30400-000', '30500-000', '30600-000', '30700-000', '30800-000', '30900-000', '31000-000', '31100-000', '31200-000', '31300-000', '31400-000', '31500-000', '31600-000', '31700-000', '31800-000', '31900-000', '32000-000', '32100-000', '32200-000', '32300-000', '32400-000', '32500-000', '32600-000', '32700-000', '32800-000', '32900-000', '33000-000', '33100-000', '33200-000', '33300-000', '33400-000', '33500-000', '33600-000', '33700-000', '33800-000', '33900-000', '34000-000', '34100-000', '34200-000', '34300-000', '34400-000', '34500-000', '34600-000', '34700-000', '34800-000', '34900-000', '35000-000', '35100-000', '35200-000', '35300-000', '35400-000', '35500-000', '35600-000', '35700-000', '35800-000', '35900-000', '36000-000', '36100-000', '36200-000', '36300-000', '36400-000', '36500-000', '36600-000', '36700-000', '36800-000', '36900-000', '37000-000', '37100-000', '37200-000', '37300-000', '37400-000', '37500-000', '37600-000', '37700-000', '37800-000', '37900-000', '38000-000', '38100-000', '38200-000', '38300-000', '38400-000', '38500-000', '38600-000', '38700-000', '38800-000', '38900-000', '39000-000', '39100-000', '39200-000', '39300-000', '39400-000', '39500-000', '39600-000', '39700-000', '39800-000', '39900-000'],
      'RS': ['90000-000', '90100-000', '90200-000', '90300-000', '90400-000', '90500-000', '90600-000', '90700-000', '90800-000', '90900-000', '91000-000', '91100-000', '91200-000', '91300-000', '91400-000', '91500-000', '91600-000', '91700-000', '91800-000', '91900-000', '92000-000', '92100-000', '92200-000', '92300-000', '92400-000', '92500-000', '92600-000', '92700-000', '92800-000', '92900-000', '93000-000', '93100-000', '93200-000', '93300-000', '93400-000', '93500-000', '93600-000', '93700-000', '93800-000', '93900-000', '94000-000', '94100-000', '94200-000', '94300-000', '94400-000', '94500-000', '94600-000', '94700-000', '94800-000', '94900-000', '95000-000', '95100-000', '95200-000', '95300-000', '95400-000', '95500-000', '95600-000', '95700-000', '95800-000', '95900-000', '96000-000', '96100-000', '96200-000', '96300-000', '96400-000', '96500-000', '96600-000', '96700-000', '96800-000', '96900-000', '97000-000', '97100-000', '97200-000', '97300-000', '97400-000', '97500-000', '97600-000', '97700-000', '97800-000', '97900-000', '98000-000', '98100-000', '98200-000', '98300-000', '98400-000', '98500-000', '98600-000', '98700-000', '98800-000', '98900-000', '99000-000', '99100-000', '99200-000', '99300-000', '99400-000', '99500-000', '99600-000', '99700-000', '99800-000', '99900-000'],
      'PR': ['80000-000', '80100-000', '80200-000', '80300-000', '80400-000', '80500-000', '80600-000', '80700-000', '80800-000', '80900-000', '81000-000', '81100-000', '81200-000', '81300-000', '81400-000', '81500-000', '81600-000', '81700-000', '81800-000', '81900-000', '82000-000', '82100-000', '82200-000', '82300-000', '82400-000', '82500-000', '82600-000', '82700-000', '82800-000', '82900-000', '83000-000', '83100-000', '83200-000', '83300-000', '83400-000', '83500-000', '83600-000', '83700-000', '83800-000', '83900-000', '84000-000', '84100-000', '84200-000', '84300-000', '84400-000', '84500-000', '84600-000', '84700-000', '84800-000', '84900-000', '85000-000', '85100-000', '85200-000', '85300-000', '85400-000', '85500-000', '85600-000', '85700-000', '85800-000', '85900-000', '86000-000', '86100-000', '86200-000', '86300-000', '86400-000', '86500-000', '86600-000', '86700-000', '86800-000', '86900-000', '87000-000', '87100-000', '87200-000', '87300-000', '87400-000', '87500-000', '87600-000', '87700-000', '87800-000', '87900-000'],
      'SC': ['88000-000', '88100-000', '88200-000', '88300-000', '88400-000', '88500-000', '88600-000', '88700-000', '88800-000', '88900-000', '89000-000', '89100-000', '89200-000', '89300-000', '89400-000', '89500-000', '89600-000', '89700-000', '89800-000', '89900-000'],
      'BA': ['40000-000', '40100-000', '40200-000', '40300-000', '40400-000', '40500-000', '40600-000', '40700-000', '40800-000', '40900-000', '41000-000', '41100-000', '41200-000', '41300-000', '41400-000', '41500-000', '41600-000', '41700-000', '41800-000', '41900-000', '42000-000', '42100-000', '42200-000', '42300-000', '42400-000', '42500-000', '42600-000', '42700-000', '42800-000', '42900-000', '43000-000', '43100-000', '43200-000', '43300-000', '43400-000', '43500-000', '43600-000', '43700-000', '43800-000', '43900-000', '44000-000', '44100-000', '44200-000', '44300-000', '44400-000', '44500-000', '44600-000', '44700-000', '44800-000', '44900-000', '45000-000', '45100-000', '45200-000', '45300-000', '45400-000', '45500-000', '45600-000', '45700-000', '45800-000', '45900-000', '46000-000', '46100-000', '46200-000', '46300-000', '46400-000', '46500-000', '46600-000', '46700-000', '46800-000', '46900-000', '47000-000', '47100-000', '47200-000', '47300-000', '47400-000', '47500-000', '47600-000', '47700-000', '47800-000', '47900-000', '48000-000', '48100-000', '48200-000', '48300-000', '48400-000', '48500-000', '48600-000', '48700-000', '48800-000', '48900-000', '49000-000', '49100-000', '49200-000', '49300-000', '49400-000', '49500-000', '49600-000', '49700-000', '49800-000', '49900-000'],
      'CE': ['60000-000', '60100-000', '60200-000', '60300-000', '60400-000', '60500-000', '60600-000', '60700-000', '60800-000', '60900-000', '61000-000', '61100-000', '61200-000', '61300-000', '61400-000', '61500-000', '61600-000', '61700-000', '61800-000', '61900-000', '62000-000', '62100-000', '62200-000', '62300-000', '62400-000', '62500-000', '62600-000', '62700-000', '62800-000', '62900-000', '63000-000', '63100-000', '63200-000', '63300-000', '63400-000', '63500-000', '63600-000', '63700-000', '63800-000', '63900-000', '64000-000', '64100-000', '64200-000', '64300-000', '64400-000', '64500-000', '64600-000', '64700-000', '64800-000', '64900-000', '65000-000', '65100-000', '65200-000', '65300-000', '65400-000', '65500-000', '65600-000', '65700-000', '65800-000', '65900-000'],
      'DF': ['70000-000', '70100-000', '70200-000', '70300-000', '70400-000', '70500-000', '70600-000', '70700-000', '70800-000', '70900-000', '71000-000', '71100-000', '71200-000', '71300-000', '71400-000', '71500-000', '71600-000', '71700-000', '71800-000', '71900-000', '72000-000', '72100-000', '72200-000', '72300-000', '72400-000', '72500-000', '72600-000', '72700-000', '72800-000', '72900-000', '73000-000', '73100-000', '73200-000', '73300-000', '73400-000', '73500-000', '73600-000', '73700-000', '73800-000', '73900-000', '74000-000', '74100-000', '74200-000', '74300-000', '74400-000', '74500-000', '74600-000', '74700-000', '74800-000', '74900-000', '75000-000', '75100-000', '75200-000', '75300-000', '75400-000', '75500-000', '75600-000', '75700-000', '75800-000', '75900-000', '76000-000', '76100-000', '76200-000', '76300-000', '76400-000', '76500-000', '76600-000', '76700-000', '76800-000', '76900-000', '77000-000', '77100-000', '77200-000', '77300-000', '77400-000', '77500-000', '77600-000', '77700-000', '77800-000', '77900-000', '78000-000', '78100-000', '78200-000', '78300-000', '78400-000', '78500-000', '78600-000', '78700-000', '78800-000', '78900-000', '79000-000', '79100-000', '79200-000', '79300-000', '79400-000', '79500-000', '79600-000', '79700-000', '79800-000', '79900-000']
    };

    this.empresas = [
      'Tech Solutions Ltda', 'Inovação Digital S.A.', 'Sistemas Avançados', 'Consultoria Empresarial',
      'Desenvolvimento Web', 'Marketing Digital', 'Logística Express', 'Educação Online',
      'Saúde Integrada', 'Finanças Corporativas', 'E-commerce Plus', 'Telecomunicações',
      'Energia Sustentável', 'Transportes Rápidos', 'Alimentação Saudável', 'Moda Contemporânea',
      'Construção Civil', 'Turismo Aventura', 'Esportes Radicais', 'Arte e Cultura'
    ];

    this.cargos = [
      'Desenvolvedor Full Stack', 'Analista de Sistemas', 'Gerente de Projetos', 'Designer UX/UI',
      'Analista de Marketing', 'Consultor de Negócios', 'Especialista em Vendas', 'Coordenador de RH',
      'Analista Financeiro', 'Engenheiro de Software', 'Product Manager', 'Data Scientist',
      'DevOps Engineer', 'Analista de Dados', 'Especialista em SEO', 'Analista de Qualidade',
      'Arquiteto de Soluções', 'Especialista em Segurança', 'Analista de Suporte', 'Especialista em Cloud'
    ];
  }

  // Gera um nome completo aleatório
  gerarNome() {
    const genero = Math.random() > 0.5 ? 'masculinos' : 'femininos';
    const nome = this.nomes[genero][Math.floor(Math.random() * this.nomes[genero].length)];
    const sobrenome = this.sobrenomes[Math.floor(Math.random() * this.sobrenomes.length)];
    return `${nome} ${sobrenome}`;
  }

  // Gera um email baseado no nome
  gerarEmail(nome) {
    const nomes = nome.toLowerCase().split(' ');
    const nomeBase = nomes[0].replace(/[çãõáéíóú]/g, (match) => {
      const map = { 'ç': 'c', 'ã': 'a', 'õ': 'o', 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };
      return map[match];
    });
    const sobrenomeBase = nomes[1] ? nomes[1].replace(/[çãõáéíóú]/g, (match) => {
      const map = { 'ç': 'c', 'ã': 'a', 'õ': 'o', 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };
      return map[match];
    }) : '';
    
    const dominios = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'uol.com.br'];
    const dominio = dominios[Math.floor(Math.random() * dominios.length)];
    
    const sufixos = ['', Math.floor(Math.random() * 999), new Date().getFullYear()];
    const sufixo = sufixos[Math.floor(Math.random() * sufixos.length)];
    
    return `${nomeBase}${sobrenomeBase}${sufixo}@${dominio}`;
  }

  // Gera um telefone brasileiro
  gerarTelefone() {
    const ddd = String(Math.floor(Math.random() * 90) + 11);
    const numero = String(Math.floor(Math.random() * 90000000) + 10000000);
    return `(${ddd}) ${numero.substring(0, 4)}-${numero.substring(4)}`;
  }

  // Gera um celular brasileiro
  gerarCelular() {
    const ddd = String(Math.floor(Math.random() * 90) + 11);
    const numero = String(Math.floor(Math.random() * 900000000) + 100000000);
    return `(${ddd}) ${numero.substring(0, 5)}-${numero.substring(5)}`;
  }

  // Gera um CPF válido
  gerarCPF() {
    const cpf = Array.from({length: 9}, () => Math.floor(Math.random() * 10));
    
    // Calcula primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += cpf[i] * (10 - i);
    }
    let resto = soma % 11;
    cpf[9] = resto < 2 ? 0 : 11 - resto;
    
    // Calcula segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += cpf[i] * (11 - i);
    }
    resto = soma % 11;
    cpf[10] = resto < 2 ? 0 : 11 - resto;
    
    return cpf.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  // Gera um endereço completo
  gerarEndereco() {
    const rua = this.ruas[Math.floor(Math.random() * this.ruas.length)];
    const numero = Math.floor(Math.random() * 999) + 1;
    const bairro = this.bairros[Math.floor(Math.random() * this.bairros.length)];
    const cidade = this.cidades[Math.floor(Math.random() * this.cidades.length)];
    const estado = this.estados[Math.floor(Math.random() * this.estados.length)];
    
    // Gera CEP válido baseado no estado
    let cep;
    if (this.cepsValidos[estado]) {
      const cepsDoEstado = this.cepsValidos[estado];
      cep = cepsDoEstado[Math.floor(Math.random() * cepsDoEstado.length)];
    } else {
      // Fallback para estados não mapeados
      cep = String(Math.floor(Math.random() * 90000000) + 10000000).replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    
    return {
      rua: `${rua}, ${numero}`,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      cep: cep,
      enderecoCompleto: `${rua}, ${numero} - ${bairro}, ${cidade} - ${estado}, CEP: ${cep}`
    };
  }

  // Gera uma data de nascimento (18-65 anos)
  gerarDataNascimento() {
    const hoje = new Date();
    const idadeMin = 18;
    const idadeMax = 65;
    const idade = Math.floor(Math.random() * (idadeMax - idadeMin + 1)) + idadeMin;
    const data = new Date(hoje.getFullYear() - idade, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    
    return data.toISOString().split('T')[0];
  }

  // Gera dados profissionais
  gerarDadosProfissionais() {
    const empresa = this.empresas[Math.floor(Math.random() * this.empresas.length)];
    const cargo = this.cargos[Math.floor(Math.random() * this.cargos.length)];
    const salario = Math.floor(Math.random() * 15000) + 2000;
    
    return {
      empresa: empresa,
      cargo: cargo,
      salario: `R$ ${salario.toLocaleString('pt-BR')}`,
      tempoEmpresa: `${Math.floor(Math.random() * 10) + 1} anos`
    };
  }

  // Gera todos os dados de uma pessoa
  gerarPerfilCompleto() {
    const nome = this.gerarNome();
    const email = this.gerarEmail(nome);
    const telefone = this.gerarTelefone();
    const celular = this.gerarCelular();
    const cpf = this.gerarCPF();
    const endereco = this.gerarEndereco();
    const dataNascimento = this.gerarDataNascimento();
    const dadosProfissionais = this.gerarDadosProfissionais();
    
    return {
      nome: nome,
      email: email,
      telefone: telefone,
      celular: celular,
      cpf: cpf,
      dataNascimento: dataNascimento,
      endereco: endereco,
      profissional: dadosProfissionais
    };
  }
}

// Exporta para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DataGenerator;
}

