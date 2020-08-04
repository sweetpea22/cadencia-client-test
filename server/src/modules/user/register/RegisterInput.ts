import { IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";
import { PasswordInput } from "../../shared/PasswordInput";

@InputType()
export class RegisterInput extends PasswordInput {
  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: "Email already in use" })
  email: string;
}
