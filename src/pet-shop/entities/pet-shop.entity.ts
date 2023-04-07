import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Animal {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public Sex: string;

  @Column()
  public Age: string;

  @Column()
  public Images: string;

  @Column()
  public Documents: string;

  @Column()
  public Species: string;

  @Column()
  public Breed: string;
}

export default Animal;
