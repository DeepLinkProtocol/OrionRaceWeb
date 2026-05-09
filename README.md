# deeplink

This repo contains two apps:

- root (`./`): the Vue 2 frontend for the Orion GPU mining contest UI.
- `./server/`: a NestJS backend that syncs locked-reward data from on-chain contracts into MongoDB and exposes the `/machine/*` and `/gpu-machine/*` REST endpoints the frontend calls (proxied as `/nestapi/*` in production).

## Frontend

### Setup
```
yarn install
```

### Dev (hot reload)
```
yarn serve
```

### Production build
```
yarn build
```

See [Configuration Reference](https://cli.vuejs.org/config/).

## Backend (`server/`)

NestJS app, MongoDB-backed. See `server/README.md` for full details.

### Setup
```
cd server
pnpm install
```

### Dev
```
cd server
pnpm run start:dev
```

### Production
```
cd server
pnpm run build
pm2 start ecosystem.config.js
```

The backend listens on port 3001 by default. In production it is reverse-proxied at `/nestapi/*` (see `pages/api/nest-proxy/[...path].ts` in the Blockscout frontend).
