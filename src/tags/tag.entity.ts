import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256, unique: true, nullable: false })
  name: string;
  @Column({ type: 'varchar', length: 512, unique: true, nullable: false })
  slug: string;
  @Column({ type: 'text', nullable: true })
  description?: string;
  @Column({ type: 'text', nullable: true })
  schema?: string;
  @Column({ type: 'varchar', length: 1024, nullable: true })
  featuredImage?: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
}
