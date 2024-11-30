import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"

})

export class ClienteService{
    
    listarTodos(){
        return axiosInstance.get("/cliente")
    }

    inserir(cliente) {
        return axiosInstance.post("/cliente", cliente)    
    }

    alterar(cliente){
        return axiosInstance.put("/cliente/{id}", cliente);

    }

    deletar(cliente){
        return axiosInstance.delete("/cliente", cliente);
    }

}

