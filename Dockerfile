FROM node:alpine3.20

RUN npm install -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod
COPY . .

CMD ["pnpm", "run", "dev"]
