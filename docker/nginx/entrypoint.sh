#!/bin/sh
mkdir -p /etc/nginx/certs

cat > /tmp/openssl.cnf << EOF
[req]
default_bits = 2048
prompt = no
default_md = sha256
distinguished_name = dn
x509_extensions = v3_req

[dn]
CN = frontend.pressy.local

[v3_req]
subjectAltName = DNS:frontend.pressy.local
EOF

openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/certs/key.pem \
    -out /etc/nginx/certs/cert.pem \
    -config /tmp/openssl.cnf

exec nginx -g 'daemon off;'
