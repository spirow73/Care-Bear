FROM node:18-alpine AS builder

RUN mkdir /app && mkdir /app/data

COPY . /app

# Asegúrate de que no hay espacios extra después de la barra invertida
RUN cd /app && npm install && npm run build

FROM node:18-alpine

RUN mkdir /app

COPY --from=builder /app/build /app/build
# Si necesitas el package.json y los node_modules para el runtime, descomenta y ajusta la línea de abajo
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/node_modules /app/node_modules

# Si solo instalas las dependencias de producción después, asegúrate de tener un package.json adecuado
RUN cd /app && npm install --production

WORKDIR /app

EXPOSE 3000

CMD ["node", "build/index.js"]
