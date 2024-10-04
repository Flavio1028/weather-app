# Weather App

O Weather App é um aplicativo web desenvolvido em Angular 15.2.11 que permite aos usuários consultar as condições meteorológicas atuais de diversas localidades. Com uma interface intuitiva e responsiva, o app utiliza APIs de dados meteorológicos para fornecer informações precisas e atualizadas, como temperatura, umidade, velocidade do vento e condições climáticas.

## Tecnologias Utilizadas

- Angular 15.2.11
- ngx-spinner 15.0.1
- SCSS
- API openweathermap

## Instalação

1. **Clone o repositório**

```bash
   git clone https://github.com/Flavio1028/weather-app.git
   cd weather-app
```

2. Instale as dependências

```bash
   npm install
```

3. Adicione a chave da API no arquivo de environments para utilizar o serviço OpenWeatherMap

```
export const environment = {
  weatherToken: '<API_KEY>'
};
```

4. Inicie o servidor de desenvolvimento

```bash
npm start
```
5. Acesse o aplicativo

Abra o seu navegador e vá para http://localhost:4200.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
