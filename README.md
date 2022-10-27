# Bravi - Back

## Banco de dados (MySQL)
### Tabela 'Person'
```
CREATE TABLE `person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
```

### Tabela 'Contact'
```
CREATE TABLE `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_person` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_contact_person` FOREIGN KEY (`id_person`) REFERENCES `person` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
```

## .ENV
Criar arquivo `.env` na raiz do projeto

Obs.: Os valores abaixo servem como exemplo
```
PORT=3000
SQL_HOST=localhost
SQL_PORT=3306
SQL_USERNAME=root
SQL_PASSWORD=
SQL_DATABASE=bravi
```

## Executar
- 1) Rodar `npm install`
- 2) Rodar `npm start`
