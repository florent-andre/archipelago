# FROM node:14.16-alpine
FROM node:19-alpine

# Default arguments
ARG SELECTED_BRANCH=master

WORKDIR /archipelago

RUN node -v
RUN npm -v

RUN apk add --update --no-cache autoconf bash libtool automake python3 alpine-sdk openssh-keygen yarn nano cmake

RUN yarn global add pm2

# step 1: install waiting container 
RUN npm install -g nodemon
COPY ./middleware/container /container
RUN cd /container/devapp && npm install

# step 2: install middleware 
COPY ./middleware /archipelago/middleware

RUN echo "RESTAURE NEXT LINES... @TODO: create local link to deps and start locally..."
# ADD ./deploy/middleware/app /archipelago/middleware
# WORKDIR /archipelago/middleware

# RUN yarn install

# EXPOSE 3000

CMD [ "pm2-runtime", "ecosystem.config.js" ]
