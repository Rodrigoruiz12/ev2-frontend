# 🌾 Innovatech Chile - Frontend

Este repositorio contiene el código fuente y la configuración de infraestructura para la interfaz de usuario (Frontend) de la plataforma de Innovatech Chile. Desarrollado con **React y Vite**, y servido de forma segura a través de **Nginx**.

## 🚀 Arquitectura y Tecnologías
* **Frontend Framework:** React 18 + Vite
* **Servidor Web / Proxy Inverso:** Nginx (Unprivileged)
* **Contenedorización:** Docker & Docker Compose
* **CI/CD:** GitHub Actions
* **Despliegue:** AWS EC2

## 🛡️ Contenedorización (Enfoque DevOps)
El proyecto utiliza un enfoque de seguridad por diseño y optimización de recursos:
1. **Multi-stage Build:** Utilizamos la imagen `node:18-alpine AS builder` para compilar los estáticos, separando el entorno de desarrollo del entorno de producción.
2. **Principio de Mínimo Privilegio (Non-root):** La etapa de ejecución utiliza `nginxinc/nginx-unprivileged:alpine`. Esto asegura que el contenedor web se ejecute como un usuario sin privilegios de administrador por el puerto `8080`, mitigando riesgos de seguridad.

## ⚙️ Flujo CI/CD (Despliegue Continuo)
La integración y el despliegue están completamente automatizados mediante GitHub Actions. El flujo se dispara exclusivamente al realizar un `push` a la rama `deploy`.

**Etapas del Pipeline:**
1. **Checkout:** Descarga del código fuente de la rama `deploy`.
2. **Docker Build & Push:** Construcción de la imagen Docker optimizada y subida al registro de Docker Hub.
3. **Deploy to EC2:** Conexión segura vía SSH al servidor público de AWS, donde se actualiza el servicio ejecutando el `docker-compose.yml` de forma automática sin generar downtime (Zero-Downtime Deployment).

## 🛠️ Entorno de Desarrollo Local
Si deseas levantar el entorno de manera local para realizar pruebas antes del despliegue:

### Opción 1: Usando Docker (Recomendado)
```bash

# Primero conectarse al frontend desde la terminal
ssh -i "tu-llave.pem" ec2-user@TU-IP-PUBLICA

# La aplicación estará disponible al poner la ip publica de la instancia frontend en el navegador
