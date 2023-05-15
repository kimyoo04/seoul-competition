FROM node:18-alpine AS base

FROM base AS builder

WORKDIR /usr/src/nextjs

COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && npm install; \
  fi

COPY ./ ./

RUN npm run build

FROM base AS runner

WORKDIR /usr/src/nextjs

COPY --from=builder /usr/src/nextjs/public ./public
COPY --from=builder /usr/src/nextjs/.next/standalone ./
COPY --from=builder /usr/src/nextjs/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]