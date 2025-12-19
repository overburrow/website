FROM oven/bun:1-slim AS base
WORKDIR /app

FROM base AS deps
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS builder
COPY --from=deps /temp/dev/node_modules node_modules
COPY . .
ENV NODE_ENV=production
RUN bun run build

FROM base AS release
COPY --from=deps /temp/prod/node_modules node_modules
COPY --from=builder --chown=bun /app/.next/standalone .
COPY --from=builder --chown=bun /app/.next/static ./.next/static
COPY --from=builder --chown=bun /app/public ./public

USER bun
EXPOSE 3000
ENTRYPOINT [ "bun", "server.js" ]
