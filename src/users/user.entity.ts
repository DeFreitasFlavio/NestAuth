import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id!: string; //au format uuidv4

  @Column({ unique: true })
  public username!: string; // cette propriété doit porter une contrainte d'unicité

  @Column({ unique: true })
  @IsEmail()
  public email!: string; // cette propriété doit porter une contrainte d'unicité

  @Column()
  public password!: string;
}
