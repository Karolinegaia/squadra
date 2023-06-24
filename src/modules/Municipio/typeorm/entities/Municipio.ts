import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TB_MUNICIPIO')
class Municipio {
  @PrimaryGeneratedColumn('identity')
  codigoMunicipio: number;

  @Column('int')
  codigoUf: number;

  @Column()
  nome: string;

  @Column('int')
  status: number;
}

export default Municipio;
