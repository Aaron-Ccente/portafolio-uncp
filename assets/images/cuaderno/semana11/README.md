SEMANA 11

ACTIVIDAD 01 LAB
Construir una aplicación web funcional con Django 5.x, aplicando el patrón MTV (Model-Template-View), configurando enrutamiento con urls.py, desarrollando vistas basadas en funciones (FBV) y clases (CBV), implementando plantillas con herencia, bloques, etiquetas y filtros, y definiendo modelos con el ORM de Django para persistencia en SQLite. Validar el ciclo solicitud-respuesta, la migración de base de datos y preparar la estructura para formularios, admin y sesiones 
RECURSOS REQUERIDOS
•	Python 3.11+ + pip
•	Visual Studio Code (Extensiones: Python, Django, SQLite Viewer, Pylint)
•	Terminal integrada + entorno virtual (venv)
•	Navegador moderno + DevTools
•	Documentación oficial: docs.djangoproject.com/en/5.0/
•	Conexión a internet + GitHub 

ACTIVIDAD 02 LAB
desarrollar un Catálogo de Productos Tecnológicos que cumpla:
1.	Arquitectura MTV: Proyecto + app separada, settings.py configurado, estructura de carpetas estándar.
2.	URLs & Vistas: 2 rutas (/ → FBV bienvenida, /catalogo/ → CBV ListView). Uso de name y {% url %}.
3.	Plantillas: base.html (header, footer, bloque content), catalogo.html (herencia, loop de productos, filtros, condicional).
4.	Modelos & ORM: Clase Producto con ≥4 campos (nombre, precio, categoría, stock). makemigrations + migrate. QuerySet filtrado en vista.
5.	Validación Técnica: runserver sin errores 500/404, check limpio, templates renderizan datos reales.
