import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TB_MUNICIPIO')
class Municipio {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'CODIGO_MUNICIPIO' })
  codigoMunicipio: number;

  @Column({ foreignKeyConstraintName: 'CODIGO_UF' })
  codigoUf: number;

  @Column({ name: 'NOME' })
  nome: string;

  @Column({ name: 'STATUS' })
  status: number;
}

export default Municipio;
