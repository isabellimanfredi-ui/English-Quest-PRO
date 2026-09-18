# English Quest — Gemini Free + Netlify

Esta versão foi refeita para usar **Gemini** no lugar de OpenAI e manter a arquitetura o mais simples e econômica possível.

## O que está incluído

- Grammar: 10 tópicos, do mais básico ao mais avançado, com 10 questões por tópico e explicações em português.
- Speaking: 10 frases por tópico; o aluno precisa falar a frase; a gravação é convertida para WAV no navegador e analisada pelo Gemini.
- Writing: 10 perguntas por tópico; o aluno escreve; o Gemini corrige e explica em português.
- Reading: 10 frases por tópico; o Gemini TTS fala a frase; o aluno digita o que ouviu.
- XP e progresso básicos em `localStorage`.
- PWA: pode ser adicionado à tela inicial do celular pelo navegador.
- Sem SDK do Google no frontend e sem chave exposta no JavaScript do usuário.
- Netlify Functions fazem as chamadas ao Gemini.

## Modelos usados

- `gemini-2.5-flash-lite` para correção de Writing.
- `gemini-2.5-flash` para análise de Speaking com áudio.
- `gemini-2.5-flash-preview-tts` para Reading.

O projeto usa chamadas REST diretas para a API Gemini, evitando dependências npm desnecessárias.

## Configuração

1. Crie uma chave no Google AI Studio.
2. No Netlify, abra o projeto.
3. Vá em **Project configuration → Environment variables**.
4. Crie:
   - Key: `GEMINI_API_KEY`
   - Value: sua chave do Gemini
   - Escopo: Functions/runtime.
5. Faça um novo deploy depois de salvar a variável.

**Nunca coloque a chave no `app.js`, HTML ou CSS.**

## Deploy

A pasta inteira deve ser publicada como site Netlify. O arquivo `netlify.toml` já informa onde estão as Functions.

Para máxima previsibilidade com Functions, é recomendado criar um site no Netlify a partir de um repositório Git ou usar o Netlify CLI. O diretório `netlify/functions` precisa ser detectado pelo Netlify.

## Celular

O site funciona em navegador móvel. Como há microfone, use HTTPS (o Netlify fornece HTTPS).

Também há `manifest.webmanifest` e `sw.js`, então navegadores compatíveis podem oferecer **Adicionar à tela inicial/Instalar**. Isso não transforma o site em um app publicado na Play Store/App Store; é uma instalação como PWA.

## Sobre o "100% grátis"

O código não exige OpenAI nem servidor pago separado. A API Gemini possui níveis gratuitos para os modelos utilizados, mas o Google impõe limites de uso/rate limits e pode alterar esses limites. Quando a cota gratuita for excedida, as chamadas podem falhar até a cota ser renovada ou a configuração da conta mudar.

Para reduzir consumo:
- as frases são pré-definidas;
- Grammar não chama IA;
- Reading chama IA apenas para gerar áudio;
- Writing e Speaking chamam IA somente quando o aluno envia a atividade.

## Limitação importante do Speaking

O Gemini consegue analisar o áudio e transcrever/comparar a fala, mas isso não deve ser tratado como um exame fonético clínico ou como um medidor perfeito de pronúncia. O feedback é pedagógico e baseado no áudio disponível.

## Segurança

A chave fica apenas nas Netlify Functions por meio de `GEMINI_API_KEY`. Ela não é enviada para o navegador como variável pública.
