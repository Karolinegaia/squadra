import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TB_PESSOA')
class Pessoa {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: `CODIGO_PESSOA` })
  codigoPessoa: number;

  @Column({ name: 'NOME' })
  nome: string;

  @Column({ name: 'SOBRENOME' })
  sobrenome: string;

  @Column({ name: 'IDADE' })
  idade: number;

  @Column({ name: 'LOGIN' })
  login: string;

  @Column({ name: 'SENHA' })
  senha: string;

  @Column({ name: 'STATUS' })
  status: number;
}

export default Pessoa;
