import { ReactNode } from "react";

export type TipoListagem = {
    titulo: string;
    conteudo: string;
    icon: ReactNode;
}

 // O ReactNode é um tipo que representa qualquer coisa que pode ser renderizada pelo React, 
 // como elementos, strings, números, fragmentos, etc. 
 // Isso permite que o campo icon aceite qualquer tipo de ícone ou elemento React que você queira usar.