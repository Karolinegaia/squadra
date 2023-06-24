import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TB_UF')
class Uf {
  @PrimaryGeneratedColumn('identity')
  codigoUf: number;

  @Column()
  sigla: string;

  @Column()
  nome: string;

  @Column('int')
  status: number;
}

export default Uf;
