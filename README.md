<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu perfil</title>
    <link rel="stylesheet" href="style.css">
</head> 
<body>
    <h1>Seu nome</h1>
    <p>Autobiografia breve detalhandi interesses, nome, idade, cidade, etc.</p>

    <button onclick="mostrarMensagem()">Clique para ver uma mensagem!</button>
  <div id="mensagem"></div>
    <script src="script.js"></script>

    <h1>Hobbies</h1>

    <ul>
        <li>Escrever
            <ul>Romance</ul>
            <ul>Poesia</ul>
        </li>
        <li>Documentários e podcasts
            <ul>Crimes reais</ul>
            <ul>Mundo animal</ul>
        </li>
        <li>Edição
            <ul>Fotografia</ul>
            <ul>Criação de vídeos</ul>
        </li>
        <li>Pintura</li>
    </ul>

    <img src="https://i.pinimg.com/736x/53/6c/e4/536ce43086f50fdf12f9750dd7eeccf2.jpg" alt="Hobby Escrever">
    <br>
    <h2>Países para visitar</h2>
    <table>
        <tr>
            <th>País</th>
            <th>Imagem</th>
        </tr>
        <tr>
            <td>Itália</td>
            <td><img src="https://th.bing.com/th/id/R.18c92d436631e4fa7d45874421c9ce56?rik=vRQmuwaYcyiizg&riu=http%3a%2f%2fwww.elissalles.com.br%2fimagens%2fmilao_italia_ata(1).jpg&ehk=ezLveKffkNHtgRsphScZfoPdK%2fzp5kY1s%2fo24TvMCpY%3d&risl=&pid=ImgRaw&r=0" alt="Itália"></td>
        </tr>
        <tr>
            <td>Grécia</td>
            <td><img src="https://www.infoescola.com/wp-content/uploads/2018/09/atenas-719305414.jpg" alt="Atenas"></td>
        </tr>
        <tr>
            <td>Irlanda</td>
            <td><img src="https://destinosnotaveis.com.br/wp-content/uploads/2019/11/Ha-penny-Bridge-1024x640.jpg" alt="Irlanda"></td>
        </tr>
    </table>

    <p>Acesse meu site favorito: <a href="https://metahuman.unrealengine.com/" target="_blank">metahuman</a></p>

</body>
</html>

function mostrarMensagem() {
    const div = document.getElementById("mensagem");
    div.textContent = "Seja bem-vinda à minha página pessoal!";
 
    // Esconde a mensagem após 5 segundos (5000 milissegundos)
  setTimeout(() => {
    div.textContent = "";
  }, 5000);
}
