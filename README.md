# Quanta CMS

Quanta contract management system

## Prerequisites

[Docker](https://docs.docker.com/get-docker/)
or
[Node.js](https://nodejs.org/en/download/) & [Postgres](https://www.postgresql.org/)

## Developing

### Docker
```bash
docker compose up --build
```

### Node.js
Change the DATABASE_URL in .env to match your postgres install, then:

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

## Deploying

### Docker
```bash
docker compose -f docker-compose.prod.yml up --build
```

### Node.js
```bash
npm run build
node build/index.js
```
