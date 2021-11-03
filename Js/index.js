
import { Cliente } from './Cliente.js';
import { ContaCorrente } from './conta/ContaCorrente.js';
import { ContaPoupança } from './conta/ContaPoupanca.js';
import { ContaSalario } from './conta/ContaSalario.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';


//direção
const diretor = new Diretor ("Abreu" , 100000 , 12345234);
diretor.cadastrarSenha("123123");

const gerente = new Gerente ("Julho", 5000 , 11112223311);
gerente.cadastrarSenha("123321");

const diretorLogado = SistemaAutenticacao.login(diretor, "123123");
const gerenteLogado = SistemaAutenticacao.login(gerente, "123321");

console.log(diretorLogado, gerenteLogado);
        

//cliente
const cliente1 = new Cliente("Ricardo" , 1112223331112, "111222" );
const correnteRicardo = new ContaCorrente(cliente1, 1001);

const cliente2 = new Cliente("Alice" , 190870867 , "121212");
const poupancaAlice = new ContaPoupança(cliente2, 1111);

const cliente3 = new Cliente("Allan" , 412123331212, "123456");
const contaSalarioAllan = new ContaSalario(cliente3);

const cliente1Logado = SistemaAutenticacao.login(cliente1, "111222");
const cliente2Logado = SistemaAutenticacao.login(cliente2, "121212");
const cliente3Logado = SistemaAutenticacao.login(cliente3, "123456");

console.log(cliente1Logado, cliente2Logado, cliente3Logado);