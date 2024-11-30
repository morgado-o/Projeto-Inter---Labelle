import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"

})

export class ComprasService{
    
    listarTodos(){
        return axiosInstance.get("/compras")
    }

    inserir(compras) {
        return axiosInstance.post("/compras", compras)    
    }

    alterar(compras){
        return axiosInstance.put("/compras", compras)    

    }

    deletar(compras){
        return axiosInstance.delete("/compras", compras)    
    }

}

