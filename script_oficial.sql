CREATE TABLE Notificacoes (
    id SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    mensagem TEXT NOT NULL,
    id_chamado INT,
    lida BOOLEAN DEFAULT FALSE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(RUF), -- Assumindo que você tem uma tabela Usuarios
    FOREIGN KEY (id_chamado) REFERENCES Chamado(IDChamado) -- Assumindo que você tem uma tabela Chamados
);