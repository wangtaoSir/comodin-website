#FROM nginx
FROM nginx:1.12.1
EXPOSE 80
COPY dist/ /usr/share/nginx/html/htm