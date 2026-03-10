# Build stage
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml* package-lock.json* ./
RUN pnpm install --frozen-lockfile || npm ci

COPY . .
RUN pnpm run build || npm run build

# Production stage
FROM node:22-alpine AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxt

COPY --from=builder --chown=nuxt:nodejs /app/.output ./.output
COPY --from=builder --chown=nuxt:nodejs /app/public ./public

USER nuxt

ENV NODE_ENV=production
ENV NITRO_PORT=3000
ENV NITRO_HOST=0.0.0.0

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
