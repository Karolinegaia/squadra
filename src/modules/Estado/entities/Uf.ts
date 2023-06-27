import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TB_UF')
class Uf {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'CODIGO_UF' })
  codigoUf: number;

  @Column({ name: 'SIGLA' })
  sigla: string;

  @Column({ name: 'NOME' })
  nome: string;

  @Column({ name: 'STATUS' })
  status: number;
}

export default Uf;
