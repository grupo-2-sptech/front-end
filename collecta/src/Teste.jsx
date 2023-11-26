import { useEffect, useState } from "react";
import api from "./api/api";

function Teste(){

 
        const [image, setImage] = useState(null);
      
        // Função chamada quando o usuário seleciona uma imagem
        const handleImageChange = (e) => {
          const selectedImage = e.target.files[0];
          setImage(selectedImage);
        };
      
        // Função chamada quando o usuário envia o formulário
        const handleFormSubmit = async (e) => {
          e.preventDefault();
      
          // Criar um objeto FormData para enviar a imagem
          const formData = new FormData();
          formData.append('image', image);
      

            // Enviar a imagem para o servidor
            api.post('/api/imagens', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }).then((res) => {

                console.log('Resposta do servidor:', res.data);
                alert("deu certo")
            })
      
            // Lógica para tratar a resposta do servidor, se necessário
          .catch ((error) => {

              console.error('Erro no upload:', error);
          }) 
            // Lógica para tratar erros de upload
          
        };
      


    return(
        <>
      <form onSubmit={handleFormSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Enviar</button>
      </form>
        </>
    )
}

export default Teste