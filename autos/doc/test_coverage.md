# 📋 Matriz de Testes

| ID | Cenário | Status | Arquivo |
|-----|----------|---------|---------|
| CT-001 | Login com sucesso | 🚧 | [`tests/login.spec.ts`](../tests/login/login-success.spec.ts) |

✅ Concluído    
🚧 Em andamento     
⏳ Não criado   
💬 Comentado

---

## CT-001 - Login com sucesso

```gherkin
Given que estou na página de login
When informo credenciais válidas
And clico em Login
Then devo visualizar a página inicial
```

📄 Código: [`tests/login.spec.ts`](../tests/login.spec.ts)