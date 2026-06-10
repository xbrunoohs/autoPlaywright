# 🧪 Playwright - Comandos Rápidos

| Ação                               | Comando                                   |
| ---------------------------------- | ----------------------------------------- |
| Executar todos os testes           | `npx playwright test`                     |
| Executar um arquivo específico     | `npx playwright test tests/login.spec.ts` |
| Executar por nome                  | `npx playwright test --grep "Login"`      |
| Executar testes marcados           | `npx playwright test --grep "@smoke"`     |
| Abrir navegador durante a execução | `npx playwright test --headed`            |
| Executar em modo debug             | `npx playwright test --debug`             |
| Executar apenas falhas anteriores  | `npx playwright test --last-failed`       |
| Executar no Chromium               | `npx playwright test --project=chromium`  |
| Executar no Firefox                | `npx playwright test --project=firefox`   |
| Executar no WebKit                 | `npx playwright test --project=webkit`    |
| Executar sequencialmente           | `npx playwright test --workers=1`         |
| Executar em paralelo               | `npx playwright test --workers=4`         |
| Atualizar snapshots                | `npx playwright test --update-snapshots`  |
| Abrir relatório HTML               | `npx playwright show-report`              |

