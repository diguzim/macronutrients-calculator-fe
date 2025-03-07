###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:22-alpine AS development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:22-alpine AS build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

###################
# PRODUCTION
###################

FROM node:22-alpine AS production

WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/public ./public
COPY --chown=node:node --from=build /usr/src/app/.next/standalone ./
COPY --chown=node:node --from=build /usr/src/app/.next/static ./.next/static

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
