# 🛠️ Additools

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

**Additools** es un repositorio colaborativo y curado de recursos para desarrolladores. La idea es simple: una caja de herramientas creada por la comunidad, para la comunidad.

Sin formularios tediosos, sin registros. Solo tú, un archivo JSON y un Pull Request.

## 🚀 ¿Cómo añadir un recurso?

Contribuir es muy fácil. Solo tienes que seguir estos pasos:

1. **Haz un Fork** de este repositorio.
2. Abre el archivo `src/data/tools.ts`
3. Añade tu herramienta al final del array siguiendo esta estructura:

```typescript
{
  "title": "Nombre de la herramienta",
  "category": ["Frontend", "Utilidades"],
  "url": "[https://tu-recurso.com](https://tu-recurso.com)"
}
```

4. Realiza un Pull Request con el nombre: feat: add [Nombre de la Herramienta].

## ✨ Características principales

- 🎯 Filtrado Inteligente: Encuentra lo que buscas navegando por categorías normalizadas.
- ❤️ Sistema de Favoritos: Guarda tus herramientas localmente. Los datos persisten en tu navegador gracias a Zustand.
- 🌗 Dark Mode Native: Interfaz diseñada para descansar la vista, adaptándose al sistema.
- 🔗 Favicons Automáticos: No necesitas subir imágenes. Usamos el servicio de Google para obtener el icono de cualquier URL al instante.
- ⚡ Performance Brutal: Construido sobre Next.js 15 para una carga instantánea.

## 🛠️ Desarrollo Local

Si quieres clonar el proyecto para proponer mejoras en la interfaz o añadir nuevas funcionalidades:

1. Clona el repositorio:

```bash
git clone [https://github.com/tu-usuario/additools.git](https://github.com/tu-usuario/additools.git)
cd additools
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo, aprender de él y contribuir.

<p align="center"> Hecho con ❤️ por Addi y la comunidad </p>
