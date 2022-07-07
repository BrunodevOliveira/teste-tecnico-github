import mongoose from "mongoose";

// Definimos a estrutura padrão do documento
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      // Usará o email como Chave única, garantindo que não teremos dois e-mails iguais
      index: {
        unique: true
      },
    },

    password: {
      type: String,
      required: true,
    },
  },

  // 2º parte - Configuração do model
  {
    timestamps: true //insere a data de criação e atualização do registro
  }
  
)

export default mongoose.model('User', userSchema) //Construo o model passando como argumento o nome e seu esquema 