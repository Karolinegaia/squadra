import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TB_BAIRRO')
class Bairro {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'CODIGO_BAIRRO' })
  codigoBairro: number;

  @Column({ foreignKeyConstraintName: 'CODIGO_MUNICIPIO' })
  codigoMunicipio: number;

  @Column({ name: 'NOME' })
  nome: string;

  @Column({ name: 'STATUS' })
  status: number;
}

export default Bairro;
