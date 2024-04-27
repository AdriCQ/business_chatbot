import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("chatbots")
export class Chatbot {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("boolean", { comment: "Disponible", default: true })
  available: boolean;

  @Column("varchar", { comment: "Nombre del bot" })
  name: string;

  @Column("varchar", { comment: "Puerto", length: 6 })
  port: string;
}
