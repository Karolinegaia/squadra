import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TB_ENDERECO')
class Endereco {
  @PrimaryGeneratedColumn('identity')
  codigoEndereco: number;

  @Column('int')
  codigoPessoa: number;

  @Column('int')
  codigoBairro: number;

  @Column()
  nomeRua: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  cep: string;
}

export default Endereco;
