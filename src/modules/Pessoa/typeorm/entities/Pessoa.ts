import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TB_PESSOA')
class Pessoa {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: `CODIGO_PESSOA` })
  codigoPessoa: number;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column('int')
  idade: number;

  @Column()
  login: string;

  @Column('int')
  status: number;

  @Column()
  enderecos: string;
}

export default Pessoa;
