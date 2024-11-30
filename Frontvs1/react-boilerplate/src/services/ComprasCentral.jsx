import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"

})

export class ComprasCentral{
    
    listarTodos(){
        return axiosInstance.get("/compras-central")
    }

    inserir(comprasCentral) {
        return axiosInstance.post("/compras-central", comprasCentral)
    }

    alterar(comprasCentral){
        return axiosInstance.put("/compras-central", comprasCentral)
    }

    
    deletar(comprasCentral){
        return axiosInstance.delete("/compras-central", comprascentral)
    }
    

}

