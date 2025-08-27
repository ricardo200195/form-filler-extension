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
    const cep = String(Math.floor(Math.random() * 90000000) + 10000000);
    
    return {
      rua: `${rua}, ${numero}`,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      cep: cep.replace(/(\d{5})(\d{3})/, '$1-$2'),
      enderecoCompleto: `${rua}, ${numero} - ${bairro}, ${cidade} - ${estado}, CEP: ${cep.replace(/(\d{5})(\d{3})/, '$1-$2')}`
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
