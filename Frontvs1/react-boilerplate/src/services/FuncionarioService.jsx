import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"

})

export class FuncionarioService{
    
    listarTodos(){
        return axiosInstance.get("/funcionario")
    }

    inserir(funcionario) {
        return axiosInstance.post("/funcionario", funcionario)    
    }

    alterar(funcionario){
        return axiosInstance.put("/funcionario", funcionario);

    }

    deletar(funcionario){
        return axiosInstance.delete("/funcionario", funcionario);
    }

}

