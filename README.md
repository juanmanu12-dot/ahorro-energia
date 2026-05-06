## Evocolt — Frontend Prototipo
Evocolt es una aplicación móvil de gestión y monitoreo de consumo energético dirigida a tres tipos de usuarios: personas de hogar, estudiantes y empresas. Este repositorio contiene el frontend completo del prototipo, construido en HTML, CSS y JavaScript vanilla, organizado por carpetas según cada módulo y perfil de usuario.

## Tecnologías utilizadas

HTML5 semántico
CSS3 con variables personalizadas (--green-dark, --green-mid, etc.)
JavaScript vanilla (sin frameworks)
Google Fonts: DM Sans (cuerpo) y Fraunces (títulos)
SVG inline para íconos, gráficos de donut y barras

```
Estructura del proyecto
evocolt/
│
├── index.html                        ← Punto de entrada, redirige a tipo-cuenta
│
├── shared/
│   ├── global.css                    ← Variables CSS, reset, tipografía
│   ├── components.css                ← Botones, inputs, cards, nav, badges, toggles
│   ├── profile-menu.css              ← Estilos del menú desplegable de perfil
│   ├── profile-menu.js               ← Lógica del menú: cerrar sesión, cambiar cuenta, configuración
│   └── config-modal.css              ← Estilos base para modales flotantes
│
├── auth/
│   ├── tipo-cuenta/                  ← Selección de perfil: Hogar, Empresa o Estudiante
│   ├── registro/                     ← Formulario de creación de cuenta
│   └── login/                        ← Inicio de sesión con chip de tipo de cuenta
│
├── onboarding/
│   └── configurar-hogar/             ← Formulario de configuración inicial (distinto por perfil)
│
├── hogar/
│   ├── inicio/                       ← Dashboard: anillo de presupuesto, electrodomésticos, miembros, consejos
│   ├── aparatos/                     ← Inventario completo con modal para agregar aparatos
│   ├── tarifas/                      ← Tarifa actual y estrato
│   └── reportes/                     ← Resumen mensual de consumo
│
├── estudiante/
│   ├── inicio/                       ← Dashboard: consumo personal, factura compartida, accesos rápidos
│   ├── aparatos/                     ← Inventario con modal de agregar electrodoméstico
│   ├── simulador/                    ← Simulador de ahorro (modo reducir + modo apagar)
│   ├── consejos/                     ← Carrusel de consejos educativos por categoría
│   ├── division-gastos/              ← Calculadora de división de factura entre compañeros
│   └── reportes/                     ← Resumen de consumo del mes
│
└── empresa/
    ├── inicio/                       ← Dashboard: resumen del día, sectores dinámicos, donut, alertas, consejos
    ├── areas/                        ← Consumo por área con filtro Día/Semana/Mes y donut SVG
    ├── control-costos/               ← Control de gasto vs meta editable, comparación entre períodos
    └── reporte-ejecutivo/            ← Historial mensual navegable con gráfico de barras y tabla

Flujo de navegación
index.html
    └── auth/tipo-cuenta/         ← El usuario elige su perfil
            ├── auth/registro/    ← Crea su cuenta
            └── auth/login/       ← Inicia sesión (con chip del tipo de cuenta)
                    └── onboarding/configurar-hogar/   ← Configura datos iniciales
                            ├── hogar/inicio/
                            ├── estudiante/inicio/
                            └── empresa/inicio/
```
## Perfiles de usuario
🏠 Persona de Hogar
Pensado para el titular de un hogar residencial que quiere controlar su factura de energía.
Onboarding: Ciudad, empresa de energía, estrato socioeconómico, tipo de vivienda, presupuesto mensual.
Funcionalidades:

Dashboard con anillo de progreso de gasto vs presupuesto
Lista dinámica de electrodomésticos con toggle on/off, badge de consumo (Bajo/Medio/Alto) y cálculo automático de kWh y costo mensual
Modal para agregar aparatos: cuadrícula de 12 electrodomésticos comunes, filtro por nombre, campos de watts y horas, vista previa del impacto antes de guardar
Barra de consumo estimado total con alerta de color según qué tan cerca está del presupuesto
Gestión de miembros del hogar con modal de registro (nombre y relación)
Carrusel de consejos de ahorro deslizable con swipe táctil
Estadísticas: gasto del día, kWh del mes, promedio diario
Menú de perfil con cerrar sesión, cambiar cuenta y configuración



## 🎓 Estudiante
Diseñado para estudiantes que viven en residencias o apartamentos compartidos y quieren entender y reducir su parte de la factura.
Onboarding: Ciudad y universidad o institución.
Funcionalidades:

Dashboard con consumo personal del mes, barra de presupuesto semanal y parte proporcional de la factura compartida
Accesos rápidos a Simulador, Consejos y División de gastos
Simulador de ahorro con dos modos en la misma pantalla:

Reducir uso: elige aparato, ajusta horas actuales vs. meta con sliders, calcula ahorro en COP y kg de CO₂ con gráfico de barras comparativo animado
¿Y si apago X?: lista de aparatos con toggles, suma el ahorro total al desactivarlos, desglose por aparato; botón para agregar electrodoméstico personalizado con modal
Escenarios rápidos predefinidos aplicables con un toque


Consejos de ahorro con dos carruseles independientes deslizables (swipe táctil):

Consejo del día (4 tarjetas rotativas con fondo oscuro)
Catálogo de 11 consejos filtrados por categoría (Electrónica, Hábitos, Eco) con estimado de ahorro y nivel de dificultad


División de gastos: calculadora de factura compartida con contador de personas ajustable que recalcula la parte proporcional en tiempo real
Inventario de aparatos con modal completo de agregar (catálogo de 12 aparatos comunes, filtro, watts/horas, vista previa del costo e indicador de impacto)



## 🏢 Empresa
Para empresas que necesitan monitorear el consumo energético por sectores o pisos y controlar costos frente a una meta mensual.
Onboarding: Nombre de la empresa, ciudad, empresa prestadora del servicio eléctrico, sector económico, meta de gasto mensual.
Funcionalidades:

Dashboard con card oscura de resumen del día (kWh y gasto con variación vs ayer), resumen del mes con barra de meta, gráfico donut SVG dinámico generado desde los sectores registrados, alertas automáticas y carrusel de consejos empresariales
Sectores dinámicos: modal para agregar sectores con nombre, consumo en kWh, número de equipos y horario de operación; vista previa del costo antes de guardar; barras de porcentaje por sector; botón de eliminar; el donut y los totales se recalculan en tiempo real
Consumo por áreas: filtro Día/Semana/Mes que carga datos distintos, donut SVG que se actualiza, cards por área con barra de progreso
Control de costos: mismo filtro de período, meta mensual editable con modal (campo libre + presets rápidos), barra de progreso que cambia de color según el cumplimiento, comparación vs período anterior con diferencia en COP y porcentaje, desglose por área
Reporte ejecutivo: selector de mes con flechas ‹/› que navega 6 meses de historial; KPIs del mes con comparativa vs mes anterior; resumen narrativo en bullets; gráfico de barras SVG donde la barra activa se resalta y las que superaron la meta aparecen en rojo; tabla de historial completa con filas clickeables para saltar a cualquier mes; recomendación de ahorro personalizada por mes


## Componentes compartidos
Menú de perfil (shared/profile-menu.js)
Inyectado automáticamente en cualquier página que tenga un .avatar-wrap. Al hacer clic en el avatar despliega un dropdown con:

## Nombre de usuario y tipo de cuenta
Configuración → abre el modal de configuración de la página actual
Cambiar de cuenta → limpia el tipo y redirige a tipo-cuenta
Cerrar sesión → limpia la sesión y redirige a login

## Modales
Todos los modales siguen el mismo patrón: overlay oscuro, caja centrada con animación de entrada, header con título y botón ✕, body con formulario y footer con botones Cancelar/Guardar.

## Sistema de colores
```
--green-dark:   #1a5c3a   (verde principal, botones primarios, títulos)
--green-mid:    #2e8b57   (verde medio, bordes activos, íconos)
--green-light:  #b2d8c4   (verde claro, bordes inactivos)
--green-pale:   #e8f5ee   (fondo de cards y chips)
--gray-soft:    #f4f9f6   (fondo de inputs)
--gray-text:    #6b7c74   (texto secundario)
--text-dark:    #0f2e1e   (texto principal)
--red:          #e05252   (errores, alto consumo)
--orange:       #e09052   (advertencias, consumo medio)
--yellow:       #d4b24a   (iluminación en empresa)
```
## Cómo abrir el proyecto
No requiere servidor ni instalación. Simplemente abre index.html en cualquier navegador moderno y el flujo comenzará desde la selección de tipo de cuenta.

Para una experiencia óptima usa Chrome o Safari en modo responsive (375px de ancho) o en un dispositivo móvil real.


## Estado del prototipo
Este es un frontend estático de alta fidelidad. Toda la lógica de datos es simulada con JavaScript en el cliente usando arrays y sessionStorage. No hay backend, base de datos ni autenticación real. Está diseñado para validar el flujo de usuario y la experiencia visual antes de pasar a la implementación con un framework y API real.