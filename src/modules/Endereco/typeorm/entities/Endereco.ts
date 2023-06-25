import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TB_ENDERECO')
class Endereco {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'CODIGO_ENDERECO' })
  codigoEndereco: number;

  @Column({ foreignKeyConstraintName: 'CODIGO_PESSOA' })
  codigoPessoa: number;

  @Column({ foreignKeyConstraintName: 'CODIGO_BAIRRO' })
  codigoBairro: number;

  @Column({ name: 'NOME_RUA' })
  nomeRua: string;

  @Column({ name: 'NOME' })
  numero: string;

  @Column({ name: 'COMPLEMENTO' })
  complemento: string;

  @Column({ name: 'CEP' })
  cep: string;
}

export default Endereco;
