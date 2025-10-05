# 🌌 Reloj Interplanetario

Una aplicación web interactiva que simula relojes analógicos basados en la duración real de los días en diferentes planetas del sistema solar. Experimenta cómo sería el tiempo en Marte, Júpiter, Venus y más.

![Reloj Interplanetario](https://img.shields.io/badge/Estado-Completo-brightgreen)
![React](https://img.shields.io/badge/React-18.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC)

---

## ✨ Características Principales

### 🪐 **Sistema Solar Completo**
- **8 Planetas**: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano, Neptuno
- **Luna**: Incluye el satélite natural de la Tierra
- Cada cuerpo celeste con su duración de día real basada en datos científicos

### ⏰ **Doble Reloj**
- **Reloj Interplanetario**: Personalizable según el planeta seleccionado
- **Reloj Terrestre UTC**: Muestra la hora actual en formato UTC (Tiempo Universal Coordinado)
- Ambos relojes se sincronizan en tiempo real

### 🎨 **Relojes Analógicos Personalizables**
- Visualización analógica con manecillas de horas, minutos y segundos
- Marcas horarias adaptativas según la configuración
- Bisel UTC opcional para referencia UTC
- Diseño visual espacial con degradados y efectos

### ⚙️ **Configuración Avanzada**
- **Horas por día**: Ajustable de 12 a 48 horas
- **Minutos por hora**: De 30 a 120 minutos
- **Segundos por minuto**: De 10 a 200 segundos
- **Duración del segundo**: Configurable de 0.1 a 5 segundos reales
- Todos los cambios se reflejan instantáneamente

### 🌍 **Manecilla UTC (Universal Coordinated Time)**
- Muestra la hora UTC en el reloj interplanetario
- Bisel de 24 horas para referencia temporal terrestre
- Activa/desactiva según necesidad

### 🔴 **Hora Real de Marte**
- Algoritmo oficial Mars Sol Date (MSD) de la NASA
- Sincronización automática con el tiempo marciano actual
- Muestra la hora exacta que sería en Marte ahora mismo

### 📚 **Información Educativa**
Cada planeta incluye tres secciones informativas:
- **📚 Historia**: Descubrimiento y observaciones históricas
- **🔬 Medición**: Datos científicos y características de rotación
- **⚙️ Lógica del Reloj**: Explicación de cómo se configuró el reloj para ese planeta

### 🌐 **Multiidioma**
- **Español** e **Inglés**
- Cambio instantáneo de idioma
- Toda la interfaz y contenido traducidos

---

## 🚀 Tecnologías Utilizadas

- **React 18**: Framework principal para la interfaz de usuario
- **Tailwind CSS**: Estilos y diseño responsive
- **Canvas API**: Renderizado de los relojes analógicos
- **JavaScript ES6+**: Lógica de la aplicación
- **HTML5**: Estructura base

---

## 📦 Instalación y Ejecución

### Opción 1: Proyecto React

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/interplanetary-watch.git
   cd interplanetary-watch
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta la aplicación**
   ```bash
   npm start
   ```

4. **Abre en el navegador**
   - La aplicación se abrirá automáticamente en `http://localhost:3000`

### Opción 3: Build de Producción

```bash
npm run build
```

Esto generará una carpeta `build/` con los archivos optimizados listos para deploy.

---

## 🎯 Cómo Usar la Aplicación

### 1️⃣ **Seleccionar un Planeta**
- Haz clic en cualquiera de los botones de planetas en la sección "Sistema Solar"
- El reloj interplanetario se actualizará con la configuración de ese planeta
- Aparecerá una tarjeta informativa con detalles del planeta seleccionado

### 2️⃣ **Configuración Manual**
Ajusta los parámetros del reloj usando los controles deslizantes:
- **Horas en el reloj**: Define cuántas horas tiene un día
- **Minutos por hora**: Personaliza la duración de cada hora
- **Segundos por minuto**: Ajusta cuántos segundos tiene cada minuto
- **Duración del segundo**: Controla la velocidad real del reloj

### 3️⃣ **Activar Manecilla UTC**
- Haz clic en "Activar Manecilla UTC"
- Aparecerá un bisel con 24 horas alrededor del reloj
- Una manecilla naranja indicará la hora UTC actual de la Tierra

### 4️⃣ **Ajustar Reloj Terrestre**
- El reloj terrestre muestra automáticamente la hora UTC
- Puedes ajustar manualmente las horas, minutos y segundos si lo deseas
- Útil para simular diferentes zonas horarias o momentos del día

### 5️⃣ **Cambiar Idioma**
- Haz clic en el botón de idioma en la esquina superior derecha
- 🇪🇸 Español ↔ 🇬🇧 English

---

## 🪐 Presets de Planetas

| Planeta | Horas | Min/Hora | Seg/Min | Duración Segundo | Día Real |
|---------|-------|----------|---------|------------------|----------|
| 🌍 Tierra | 24 | 60 | 60 | 1.000 | 24 horas |
| 🔴 Marte | 24 | 60 | 60 | 1.028 | 24h 39min |
| ☿ Mercurio | 24 | 60 | 60 | 176.000 | 176 días |
| ♀ Venus | 24 | 60 | 60 | 243.025 | 243 días |
| 🪐 Júpiter | 10 | 60 | 60 | 0.414 | 9h 56min |
| 🪐 Saturno | 11 | 60 | 60 | 0.444 | 10h 42min |
| 🔵 Urano | 17 | 60 | 60 | 0.718 | 17h 14min |
| 💙 Neptuno | 16 | 60 | 60 | 0.671 | 16h 6min |
| 🌙 Luna | 28 | 60 | 60 | 27.322 | 27.3 días |

---

## 📖 Conceptos Científicos

### ¿Qué es un día solar?
Un día solar es el tiempo que tarda un planeta en completar una rotación sobre su eje de tal manera que el Sol vuelva a estar en la misma posición en el cielo. Esto difiere del día sideral (rotación completa respecto a las estrellas).

### ¿Por qué diferentes duraciones de segundo?
Para mantener relojes de 24 horas legibles y simétricos, ajustamos la duración de cada segundo. Por ejemplo:
- **Marte**: 1 segundo marciano = 1.028 segundos terrestres

Esto permite que el reloj complete exactamente 24 horas en el período de rotación real del planeta.

Otros planetas que tengan menos de 24 horas, se les modificará la cantidad de horas y la duración del segundo.

Además, si la cantidad de horas del día solar del planeta es par, entonces el reloj tendrá la mitad de horas para que se pueda hacer la distinción de AM/PM.

### Mars Sol Date (MSD)
El algoritmo MSD es utilizado por la NASA para rastrear el tiempo en Marte. Calcula los "sols" (días marcianos) desde un epoch definido, permitiendo sincronización precisa con misiones espaciales.

---

## 🎨 Características de Diseño

### Relojes Analógicos
- **Canvas HTML5**: Renderizado de alta calidad
- **Animaciones fluidas**: 60 FPS usando `requestAnimationFrame`
- **Código de colores**:
  - 🟠 Naranja: Reloj interplanetario y manecilla de horas
  - 🟢 Verde: Reloj terrestre y manecilla de minutos
  - 🔵 Cyan: Manecilla de segundos
  - 🟠 Naranja (claro): Manecilla UTC

### Interfaz de Usuario
- **Diseño responsive**: Se adapta a móviles, tablets y desktop
- **Efectos visuales**: Degradados espaciales, sombras, blur effects
- **Accesibilidad**: Contraste adecuado y etiquetas descriptivas

---

## 🔮 Funcionalidades Avanzadas

### Formato AM/PM Inteligente
Cuando un reloj tiene un número par de horas mayor a 12 (ej: 24, 26, 28), la carátula muestra solo la mitad de las horas para simular formato AM/PM tradicional. Esto hace que el reloj sea más familiar visualmente.

### Sincronización en Tiempo Real
- El reloj terrestre se sincroniza automáticamente con la hora del sistema

---

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Navegadores móviles modernos

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Ideas para Futuras Mejoras

- [ ] Agregar más cuerpos celestes (Plutón, lunas de Júpiter, etc.)
- [ ] Modo oscuro / claro
- [ ] Exportar configuraciones personalizadas
- [ ] Comparación lado a lado de múltiples planetas
- [ ] Integración con APIs de astronomía en tiempo real
- [ ] Visualización de la posición orbital actual de cada planeta

---

## 🙏 Créditos

**Creado por Relojes Altiro**

### Fuentes de Datos Científicos:
- NASA Mars Exploration Program
- International Astronomical Union (IAU)
- Jet Propulsion Laboratory (JPL)
- Misiones Voyager, Cassini, y observaciones telescópicas

### Algoritmos:
- Mars Sol Date (MSD) - NASA/JPL

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 🔗 Enlaces

- **Canal de YouTube**: [Relojes Altiro](https://www.youtube.com/channel/UCH0Hejh-O79c3wqSeUP_BMQ)
- **Demo en vivo**: [próximamente]

---

## ⭐ Si te gusta este proyecto

¡Dale una estrella ⭐ en GitHub y compártelo con otros entusiastas del espacio!

---

**Desarrollado con ❤️ y ☕ para todos los exploradores del cosmos** 🚀🌌