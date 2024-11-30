import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"

})

export class ProcedimentoService{
    
    listarTodos(){
        return axiosInstance.get("/procedimento")
    }

    inserir(procedimento) {
        return axiosInstance.post("/procedimento", procedimento)    
    }

    alterar(procedimento){
        return axiosInstance.put("/procedimento", procedimento);

    }

    deletar(procedimento){
        return axiosInstance.delete("/procedimento", procedimento);
    }

}

