FROM node:20.11.0 as build-stage
WORKDIR /sample-ui
COPY package*.json /sample-ui/
RUN npm install --save-dev --force
COPY ./ /sample-ui/
RUN npm run build -- --output-path=./dist/out

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:latest
COPY --from=build-stage /sample-ui/dist/out/ /usr/share/nginx/html/interview-builder/employee/
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf