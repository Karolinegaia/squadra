import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TB_BAIRRO')
class Bairro {
  @PrimaryGeneratedColumn('identity')
  codigoBairro: number;

  @Column('int')
  codigoMunicipio: number;

  @Column()
  nome: string;

  @Column('int')
  status: number;
}

export default Bairro;
