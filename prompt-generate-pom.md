# 📄 Prompt para Convertir Grabaciones Playwright → POM (TS) con SOLID (Nivel Senior)

## 🧠 Descripción

Usa este prompt para transformar cualquier grabación generada por
**Playwright Codegen** en un framework profesional con **Page Object
Model**, principios **SOLID**, código limpio y estructura escalable.

------------------------------------------------------------------------

# ✅ **PROMPT**

Quiero que transformes mi grabación de Playwright (en TypeScript)
generada por Codegen en un framework completo usando el patrón Page
Object Model (POM).

**Requisitos obligatorios:**

------------------------------------------------------------------------

## 🧱 **1. Estructura basada en POM**

Debes generar:

-   Una clase Page por cada vista de la UI.
-   Un archivo de test con la mínima lógica posible.
-   Selectores definidos como propiedades privadas de la Page.
-   Métodos públicos que representen acciones claras y reutilizables.
-   Validaciones encapsuladas en métodos propios o en helpers.

------------------------------------------------------------------------

## 🧩 **2. Principios SOLID**

Debes seguir estrictamente:

-   **S**ingle Responsibility: Cada clase Page solo debe manejar una
    página específica.
-   **O**pen/Closed: La estructura debe ser extensible sin modificar
    clases existentes.
-   **L**iskov Substitution: Métodos consistentes y comportamientos
    esperables.
-   **I**nterface Segregation: Usa interfaces si se requieren grupos de
    acciones.
-   **D**ependency Injection: El `Page` de Playwright debe inyectarse
    por constructor.

------------------------------------------------------------------------

## 🎯 **3. Nivel Senior (Clean Code)**

-   Nombres de métodos completamente descriptivos.
-   Cero duplicación de lógica.
-   Nada de lógica dentro del test: solo llamadas a métodos de Pages.
-   No usar waits innecesarios.
-   Comentarios solo cuando aporten valor real.
-   Buen manejo de assertions dentro de la Page o helpers.
-   Respeto del principio Command Query Separation.

------------------------------------------------------------------------

## 📁 **4. Estructura esperada del proyecto**

    /pages
       LoginPage.ts
       SecureAreaPage.ts
    /tests
       login.spec.ts
    /utils
       env.ts

------------------------------------------------------------------------

## 🧪 **5. Qué debe devolver tu respuesta**

Quiero recibir **todos los archivos completos**, incluyendo:

1.  Código de cada Page (ej: LoginPage.ts)
2.  Código de la segunda Page (ej: SecureAreaPage.ts)
3.  Código del test (login.spec.ts)
4.  Archivos adicionales como utils o config si aplican

------------------------------------------------------------------------

## 📌 **6. Entrada**

Aquí está mi código generado por Playwright Codegen:

    (Pegar grabación aquí)

------------------------------------------------------------------------

🔚 **Fin del Prompt**
