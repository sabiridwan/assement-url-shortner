FROM node:14-alpine AS builder
WORKDIR "/"
COPY . .
RUN npm ci
RUN npm run build
RUN npm prune --production
FROM node:14-alpine AS production
WORKDIR "/"
COPY --from=builder /package.json ./package.json
COPY --from=builder /package-lock.json ./package-lock.json
COPY --from=builder /dist ./dist
COPY --from=builder /node_modules ./node_modules
CMD [ "sh", "-c", "npm run start:prod"]