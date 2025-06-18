CREATE DATABASE batbrasil;
GO
USE batbrasil;
GO

-- Tabela de Função
CREATE TABLE Funcao (
    ID INT PRIMARY KEY,
    Nome NVARCHAR(50)
);

-- Tabela de Setor
CREATE TABLE Setor (
    ID INT PRIMARY KEY,
    Nome NVARCHAR(50)
);

-- Tabela de Usuario
CREATE TABLE Usuario (
    RUF INT PRIMARY KEY,
    Nome NVARCHAR(100),
    IDFuncao INT NOT NULL,
    FOREIGN KEY (IDFuncao) REFERENCES Funcao(ID)
);

-- Tabela de Maquina
CREATE TABLE Maquina (
    ID INT PRIMARY KEY,
    Descricao NVARCHAR(100),
    DataCompra DATE,
    IDSetor INT NOT NULL,
    FOREIGN KEY (IDSetor) REFERENCES Setor(ID)
);

-- Tabela de Status
CREATE TABLE Status (
    ID INT PRIMARY KEY,
    Status NVARCHAR(50)
);

-- Tabela de Dificuldade
CREATE TABLE Dificuldade (
    ID INT PRIMARY KEY,
    Nivel NVARCHAR(50)
);

-- Tabela de Chamado
CREATE TABLE Chamado (
    IDChamado INT AUTO_INCREMENT PRIMARY KEY,
    Descricao NVARCHAR(255) NOT NULL,
    DescricaoResolucao NVARCHAR(255),
    Feedback NVARCHAR(100),
    DataCriacao DATE NOT NULL,
    DataFechamento DATE,
    IDDificuldade INT NOT NULL,
    IDStatus INT NOT NULL,
    IDTecnico INT NOT NULL,
    IDFuncionario INT NOT NULL,
    IDMaquina INT NOT NULL,

    FOREIGN KEY (IDDificuldade) REFERENCES Dificuldade(ID),
    FOREIGN KEY (IDStatus) REFERENCES Status(ID),
    FOREIGN KEY (IDTecnico) REFERENCES Usuario(RUF),
    FOREIGN KEY (IDFuncionario) REFERENCES Usuario(RUF),
    FOREIGN KEY (IDMaquina) REFERENCES Maquina(ID)
);

DROP TABLE Chamado

INSERT INTO Chamado
(Descricao, DescricaoResolucao, Feedback, DataCriacao, DataFechamento, IDDificuldade, IDStatus, IDTecnico, IDFuncionario, IDMaquina)
VALUES
-- Máquina 1 (10 chamados)
('Falha no motor', 'Reparo motor', 'OK', '2020-01-05', '2020-01-10', 1, 1, 2, 1, 1),
('Travamento mecânico', 'Lubrificação feita', 'Melhorou', '2020-02-10', '2020-02-14', 2, 2, 5, 3, 1),
('Erro elétrico', 'Troca de fusível', 'Resolvido', '2020-03-20', '2020-03-25', 3, 3, 8, 4, 1),
('Sensor com defeito', 'Substituição sensor', 'OK', '2020-05-15', '2020-05-17', 1, 1, 11, 6, 1),
('Quebra do eixo', 'Troca eixo', 'Normalizado', '2020-07-01', '2020-07-08', 2, 2, 14, 7, 1),
('Ruído anormal', 'Ajuste componentes', 'Monitorar', '2020-08-20', '2020-08-25', 3, 3, 2, 9, 1),
('Calibração errada', 'Realinhamento', 'OK', '2020-10-10', '2020-10-12', 1, 1, 5, 10, 1),
('Falha na conexão', 'Reparo cabos', 'Resolvido', '2020-12-01', '2020-12-04', 2, 2, 8, 1, 1),
('Problema no painel', 'Troca painel', 'OK', '2021-01-20', '2021-01-25', 3, 3, 11, 3, 1),
('Sobreaquecimento', 'Limpeza e troca pasta', 'Normalizado', '2021-03-05', '2021-03-10', 1, 1, 14, 4, 1),

-- Máquina 2 (10 chamados)
('Falha hidráulica', 'Troca válvula', 'OK', '2019-01-10', '2019-01-15', 2, 1, 2, 6, 2),
('Travamento rotação', 'Lubrificação', 'Melhorou', '2019-02-14', '2019-02-18', 1, 3, 5, 7, 2),
('Erro software', 'Atualização firmware', 'Resolvido', '2019-03-20', '2019-03-23', 3, 2, 8, 9, 2),
('Sensor fora do padrão', 'Calibração sensor', 'OK', '2019-05-22', '2019-05-25', 2, 1, 11, 10, 2),
('Desgaste engrenagem', 'Troca engrenagem', 'Normalizado', '2019-07-11', '2019-07-16', 3, 3, 14, 1, 2),
('Falha elétrica', 'Reparo circuito', 'Monitorar', '2019-09-05', '2019-09-08', 1, 2, 2, 3, 2),
('Ruído excessivo', 'Ajuste motor', 'OK', '2019-10-20', '2019-10-22', 2, 1, 5, 4, 2),
('Falha na válvula', 'Troca válvula', 'Resolvido', '2019-12-12', '2019-12-15', 3, 3, 8, 6, 2),
('Erro leitura sensores', 'Reparo sensores', 'OK', '2020-02-01', '2020-02-05', 2, 2, 11, 7, 2),
('Parada inesperada', 'Reinício sistema', 'Normalizado', '2020-03-18', '2020-03-20', 1, 1, 14, 9, 2),

-- Máquina 3 (10 chamados)
('Erro mecânico', 'Troca peças', 'OK', '2018-01-15', '2018-01-20', 1, 3, 2, 10, 3),
('Falha na correia', 'Substituição correia', 'Resolvido', '2018-03-10', '2018-03-15', 3, 1, 5, 1, 3),
('Desalinhamento eixo', 'Ajuste eixo', 'OK', '2018-05-25', '2018-05-27', 2, 2, 8, 3, 3),
('Falha elétrica', 'Reparo circuito', 'Normalizado', '2018-07-30', '2018-08-03', 1, 3, 11, 4, 3),
('Problema no software', 'Atualização sistema', 'OK', '2018-09-10', '2018-09-15', 2, 1, 14, 6, 3),
('Ruído no motor', 'Lubrificação', 'Monitorar', '2018-11-21', '2018-11-25', 3, 2, 2, 7, 3),
('Erro nos sensores', 'Reparo sensores', 'OK', '2019-01-30', '2019-02-02', 1, 3, 5, 9, 3),
('Travamento mecânico', 'Limpeza', 'Resolvido', '2019-04-10', '2019-04-12', 2, 1, 8, 10, 3),
('Falha na alimentação', 'Troca alimentação', 'OK', '2019-06-15', '2019-06-18', 3, 2, 11, 1, 3),
('Erro no painel', 'Reparo painel', 'Normalizado', '2019-08-22', '2019-08-25', 1, 3, 14, 3, 3),

-- Máquina 4 (10 chamados)
('Falha no sistema hidráulico', 'Troca bomba', 'OK', '2017-01-11', '2017-01-15', 2, 1, 2, 4, 4),
('Vazamento óleo', 'Reparo vedação', 'Melhorou', '2017-03-13', '2017-03-16', 1, 3, 5, 6, 4),
('Erro elétrico', 'Reparo circuito', 'Resolvido', '2017-05-20', '2017-05-23', 3, 2, 8, 7, 4),
('Falha no sensor', 'Substituição sensor', 'OK', '2017-07-30', '2017-08-02', 2, 1, 11, 9, 4),
('Desgaste engrenagem', 'Troca engrenagem', 'Normalizado', '2017-09-15', '2017-09-20', 3, 3, 14, 10, 4),
('Problema software', 'Atualização firmware', 'Monitorar', '2017-11-10', '2017-11-15', 1, 2, 2, 1, 4),
('Ruído motor', 'Lubrificação', 'OK', '2018-01-05', '2018-01-09', 2, 1, 5, 3, 4),
('Travamento sistema', 'Reset hardware', 'Resolvido', '2018-03-12', '2018-03-15', 3, 3, 8, 4, 4),
('Erro leitura sensores', 'Reparo sensores', 'OK', '2018-05-22', '2018-05-26', 2, 2, 11, 6, 4),
('Parada inesperada', 'Reinício sistema', 'Normalizado', '2018-07-18', '2018-07-20', 1, 1, 14, 7, 4),

-- Máquina 5 (10 chamados)
('Falha mecânica', 'Troca peças', 'OK', '2016-01-15', '2016-01-20', 1, 3, 2, 9, 5),
('Desalinhamento eixo', 'Ajuste eixo', 'Resolvido', '2016-03-10', '2016-03-15', 3, 1, 5, 10, 5),
('Erro painel', 'Reparo painel', 'OK', '2016-05-25', '2016-05-27', 2, 2, 8, 1, 5),
('Falha elétrica', 'Reparo circuito', 'Normalizado', '2016-07-30', '2016-08-03', 1, 3, 11, 3, 5),
('Problema software', 'Atualização sistema', 'OK', '2016-09-10', '2016-09-15', 2, 1, 14, 4, 5),
('Ruído no motor', 'Lubrificação', 'Monitorar', '2016-11-21', '2016-11-25', 3, 2, 2, 6, 5),
('Erro nos sensores', 'Reparo sensores', 'OK', '2017-01-30', '2017-02-02', 1, 3, 5, 7, 5),
('Travamento mecânico', 'Limpeza', 'Resolvido', '2017-04-10', '2017-04-12', 2, 1, 8, 9, 5),
('Falha na alimentação', 'Troca alimentação', 'OK', '2017-06-15', '2017-06-18', 3, 2, 11, 10, 5),
('Erro no painel', 'Reparo painel', 'Normalizado', '2017-08-22', '2017-08-25', 1, 3, 14, 1, 5),

-- Máquina 6 (10 chamados)
('Falha hidráulica', 'Troca válvula', 'OK', '2015-01-10', '2015-01-15', 2, 1, 2, 3, 6),
('Travamento rotação', 'Lubrificação', 'Melhorou', '2015-02-14', '2015-02-18', 1, 3, 5, 4, 6),
('Erro software', 'Atualização firmware', 'Resolvido', '2015-03-20', '2015-03-23', 3, 2, 8, 6, 6),
('Sensor fora do padrão', 'Calibração sensor', 'OK', '2015-05-22', '2015-05-25', 2, 1, 11, 7, 6),
('Desgaste engrenagem', 'Troca engrenagem', 'Normalizado', '2015-07-11', '2015-07-16', 3, 3, 14, 9, 6),
('Falha elétrica', 'Reparo circuito', 'Monitorar', '2015-09-05', '2015-09-08', 1, 2, 2, 10, 6),
('Ruído excessivo', 'Ajuste motor', 'OK', '2015-10-20', '2015-10-22', 2, 1, 5, 1, 6),
('Falha na válvula', 'Troca válvula', 'Resolvido', '2015-12-12', '2015-12-15', 3, 3, 8, 3, 6),
('Erro leitura sensores', 'Reparo sensores', 'OK', '2016-02-01', '2016-02-05', 2, 2, 11, 4, 6),
('Parada inesperada', 'Reinício sistema', 'Normalizado', '2016-03-18', '2016-03-20', 1, 1, 14, 6, 6),

-- Máquina 7 (10 chamados)
('Erro mecânico', 'Troca peças', 'OK', '2014-01-15', '2014-01-20', 1, 3, 2, 7, 7),
('Falha na correia', 'Substituição correia', 'Resolvido', '2014-03-10', '2014-03-15', 3, 1, 5, 9, 7),
('Desalinhamento eixo', 'Ajuste eixo', 'OK', '2014-05-25', '2014-05-27', 2, 2, 8, 10, 7),
('Falha elétrica', 'Reparo circuito', 'Normalizado', '2014-07-30', '2014-08-03', 1, 3, 11, 1, 7),
('Problema software', 'Atualização sistema', 'OK', '2014-09-10', '2014-09-15', 2, 1, 14, 3, 7),
('Ruído no motor', 'Lubrificação', 'Monitorar', '2014-11-21', '2014-11-25', 3, 2, 2, 4, 7),
('Erro nos sensores', 'Reparo sensores', 'OK', '2015-01-30', '2015-02-02', 1, 3, 5, 6, 7),
('Travamento mecânico', 'Limpeza', 'Resolvido', '2015-04-10', '2015-04-12', 2, 1, 8, 7, 7),
('Falha na alimentação', 'Troca alimentação', 'OK', '2015-06-15', '2015-06-18', 3, 2, 11, 9, 7),
('Erro no painel', 'Reparo painel', 'Normalizado', '2015-08-22', '2015-08-25', 1, 3, 14, 10, 7),

-- Máquina 8 (10 chamados)
('Falha no sistema hidráulico', 'Troca bomba', 'OK', '2013-01-11', '2013-01-15', 2, 1, 2, 1, 8),
('Vazamento óleo', 'Reparo vedação', 'Melhorou', '2013-03-13', '2013-03-16', 1, 3, 5, 3, 8),
('Erro elétrico', 'Reparo circuito', 'Resolvido', '2013-05-20', '2013-05-23', 3, 2, 8, 4, 8),
('Falha no sensor', 'Substituição sensor', 'OK', '2013-07-30', '2013-08-02', 2, 1, 11, 6, 8),
('Desgaste engrenagem', 'Troca engrenagem', 'Normalizado', '2013-09-15', '2013-09-20', 3, 3, 14, 7, 8),
('Problema software', 'Atualização firmware', 'Monitorar', '2013-11-10', '2013-11-15', 1, 2, 2, 9, 8),
('Ruído motor', 'Lubrificação', 'OK', '2014-01-05', '2014-01-09', 2, 1, 5, 10, 8),
('Travamento sistema', 'Reset hardware', 'Resolvido', '2014-03-12', '2014-03-15', 3, 3, 8, 1, 8),
('Erro leitura sensores', 'Reparo sensores', 'OK', '2014-05-22', '2014-05-26', 2, 2, 11, 3, 8),
('Parada inesperada', 'Reinício sistema', 'Normalizado', '2014-07-18', '2014-07-20', 1, 1, 14, 4, 8),

-- Máquina 9 (10 chamados)
('Falha mecânica', 'Troca peças', 'OK', '2012-01-15', '2012-01-20', 1, 3, 2, 6, 9),
('Desalinhamento eixo', 'Ajuste eixo', 'Resolvido', '2012-03-10', '2012-03-15', 3, 1, 5, 7, 9),
('Erro painel', 'Reparo painel', 'OK', '2012-05-25', '2012-05-27', 2, 2, 8, 9, 9),
('Falha elétrica', 'Reparo circuito', 'Normalizado', '2012-07-30', '2012-08-03', 1, 3, 11, 10, 9),
('Problema software', 'Atualização sistema', 'OK', '2012-09-10', '2012-09-15', 2, 1, 14, 1, 9),
('Ruído no motor', 'Lubrificação', 'Monitorar', '2012-11-21', '2012-11-25', 3, 2, 2, 3, 9),
('Erro nos sensores', 'Reparo sensores', 'OK', '2013-01-30', '2013-02-02', 1, 3, 5, 4, 9),
('Travamento mecânico', 'Limpeza', 'Resolvido', '2013-04-10', '2013-04-12', 2, 1, 8, 6, 9),
('Falha na alimentação', 'Troca alimentação', 'OK', '2013-06-15', '2013-06-18', 3, 2, 11, 7, 9),
('Erro no painel', 'Reparo painel', 'Normalizado', '2013-08-22', '2013-08-25', 1, 3, 14, 9, 9),

-- Máquina 10 (10 chamados)
('Falha hidráulica', 'Troca válvula', 'OK', '2011-01-10', '2011-01-15', 2, 1, 2, 10, 10),
('Travamento rotação', 'Lubrificação', 'Melhorou', '2011-02-14', '2011-02-18', 1, 3, 5, 1, 10),
('Erro software', 'Atualização firmware', 'Resolvido', '2011-03-20', '2011-03-23', 3, 2, 8, 3, 10),
('Sensor fora do padrão', 'Calibração sensor', 'OK', '2011-05-22', '2011-05-25', 2, 1, 11, 4, 10),
('Desgaste engrenagem', 'Troca engrenagem', 'Normalizado', '2011-07-11', '2011-07-16', 3, 3, 14, 6, 10),
('Falha elétrica', 'Reparo circuito', 'Monitorar', '2011-09-05', '2011-09-08', 1, 2, 2, 7, 10),
('Ruído excessivo', 'Ajuste motor', 'OK', '2011-10-20', '2011-10-22', 2, 1, 5, 9, 10),
('Falha na válvula', 'Troca válvula', 'Resolvido', '2011-12-12', '2011-12-15', 3, 3, 8, 10, 10),
('Erro leitura sensores', 'Reparo sensores', 'OK', '2012-02-01', '2012-02-05', 2, 2, 11, 1, 10),
('Parada inesperada', 'Reinício sistema', 'Normalizado', '2012-03-18', '2012-03-20', 1, 1, 14, 3, 10),

-- Máquina 11 (10 chamados)
('Erro mecânico', 'Troca peças', 'OK', '2010-01-15', '2010-01-20', 1, 3, 2, 4, 11),
('Falha na correia', 'Substituição correia', 'Resolvido', '2010-03-10', '2010-03-15', 3, 1, 5, 5, 11),
('Desalinhamento eixo', 'Ajuste eixo', 'OK', '2010-05-25', '2010-05-27', 2, 2, 8, 6, 11),
('Falha elétrica', 'Reparo circuito', 'Normalizado', '2010-07-30', '2010-08-03', 1, 3, 11, 7, 11),
('Problema software', 'Atualização sistema', 'OK', '2010-09-10', '2010-09-15', 2, 1, 14, 9, 11),
('Ruído no motor', 'Lubrificação', 'Monitorar', '2010-11-21', '2010-11-25', 3, 2, 2, 10, 11),
('Erro nos sensores', 'Reparo sensores', 'OK', '2011-01-30', '2011-02-02', 1, 3, 5, 1, 11),
('Travamento mecânico', 'Limpeza', 'Resolvido', '2011-04-10', '2011-04-12', 2, 1, 8, 3, 11),
('Falha na alimentação', 'Troca alimentação', 'OK', '2011-06-15', '2011-06-18', 3, 2, 11, 4, 11),
('Erro no painel', 'Reparo painel', 'Normalizado', '2011-08-22', '2011-08-25', 1, 3, 14, 6, 11),

-- Máquina 12 (10 chamados)
('Falha no sistema hidráulico', 'Troca bomba', 'OK', '2009-01-11', '2009-01-15', 2, 1, 2, 8, 12),
('Vazamento óleo', 'Reparo vedação', 'Melhorou', '2009-03-13', '2009-03-16', 1, 3, 5, 9, 12),
('Erro elétrico', 'Reparo circuito', 'Resolvido', '2009-05-20', '2009-05-23', 3, 2, 8, 10, 12),
('Falha no sensor', 'Substituição sensor', 'OK', '2009-07-30', '2009-08-02', 2, 1, 11, 1, 12),
('Desgaste engrenagem', 'Troca engrenagem', 'Normalizado', '2009-09-15', '2009-09-20', 3, 3, 14, 3, 12),
('Problema software', 'Atualização firmware', 'Monitorar', '2009-11-10', '2009-11-15', 1, 2, 2, 4, 12),
('Ruído motor', 'Lubrificação', 'OK', '2010-01-05', '2010-01-09', 2, 1, 5, 6, 12),
('Travamento sistema', 'Reset hardware', 'Resolvido', '2010-03-12', '2010-03-15', 3, 3, 8, 7, 12),
('Erro leitura sensores', 'Reparo sensores', 'OK', '2010-05-22', '2010-05-26', 2, 2, 11, 9, 12),
('Parada inesperada', 'Reinício sistema', 'Normalizado', '2010-07-18', '2010-07-20', 1, 1, 14, 10, 12),

-- Máquina 13 (10 chamados)
('Falha mecânica', 'Troca peças', 'OK', '2008-01-15', '2008-01-20', 1, 3, 2, 2, 13),
('Desalinhamento eixo', 'Ajuste eixo', 'Resolvido', '2008-03-10', '2008-03-15', 3, 1, 5, 3, 13),
('Erro painel', 'Reparo painel', 'OK', '2008-05-25', '2008-05-27', 2, 2, 8, 4, 13),
('Falha elétrica', 'Reparo circuito', 'Normalizado', '2008-07-30', '2008-08-03', 1, 3, 11, 5, 13),
('Problema software', 'Atualização sistema', 'OK', '2008-09-10', '2008-09-15', 2, 1, 14, 6, 13),
('Ruído no motor', 'Lubrificação', 'Monitorar', '2008-11-21', '2008-11-25', 3, 2, 2, 7, 13),
('Erro nos sensores', 'Reparo sensores', 'OK', '2009-01-30', '2009-02-02', 1, 3, 5, 8, 13),
('Travamento mecânico', 'Limpeza', 'Resolvido', '2009-04-10', '2009-04-12', 2, 1, 8, 9, 13),
('Falha na alimentação', 'Troca alimentação', 'OK', '2009-06-15', '2009-06-18', 3, 2, 11, 10, 13),
('Erro no painel', 'Reparo painel', 'Normalizado', '2009-08-22', '2009-08-25', 1, 3, 14, 1, 13),

-- Máquina 14 (10 chamados)
('Falha hidráulica', 'Troca válvula', 'OK', '2007-01-10', '2007-01-15', 2, 1, 2, 3, 14),
('Travamento rotação', 'Lubrificação', 'Melhorou', '2007-02-14', '2007-02-18', 1, 3, 5, 4, 14),
('Erro software', 'Atualização firmware', 'Resolvido', '2007-03-20', '2007-03-23', 3, 2, 8, 6, 14),
('Sensor fora do padrão', 'Calibração sensor', 'OK', '2007-05-22', '2007-05-25', 2, 1, 11, 7, 14),
('Desgaste engrenagem', 'Troca engrenagem', 'Normalizado', '2007-07-11', '2007-07-16', 3, 3, 14, 9, 14),
('Falha elétrica', 'Reparo circuito', 'Monitorar', '2007-09-05', '2007-09-08', 1, 2, 2, 10, 14),
('Ruído excessivo', 'Ajuste motor', 'OK', '2007-10-20', '2007-10-22', 2, 1, 5, 1, 14),
('Falha na válvula', 'Troca válvula', 'Resolvido', '2007-12-12', '2007-12-15', 3, 3, 8, 3, 14),
('Erro leitura sensores', 'Reparo sensores', 'OK', '2008-02-01', '2008-02-05', 2, 2, 11, 4, 14),
('Parada inesperada', 'Reinício sistema', 'Normalizado', '2008-03-18', '2008-03-20', 1, 1, 14, 6, 14);
