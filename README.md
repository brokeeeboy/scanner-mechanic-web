# JOCARS - Servicios de Scanner Automotriz

## 📧 Configuración del Formulario de Contacto

Este proyecto usa **EmailJS** para enviar emails desde el formulario de contacto directamente a tu correo.

### 🔧 Configuración paso a paso:

#### 1. Crear cuenta en EmailJS
1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

#### 2. Configurar el servicio de email
1. En el dashboard de EmailJS, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **Gmail** (o tu proveedor de email preferido)
4. Conecta tu cuenta de Gmail (`jocarscl@gmail.com`)
5. Copia el **Service ID** (algo como `service_xxxxxxx`)

#### 3. Crear template de email
1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Usa este template:

```
Asunto: Nuevo mensaje de contacto JOCARS - {{from_name}}

Contenido:
Has recibido un nuevo mensaje desde el sitio web de JOCARS:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Vehículo: {{car}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde jocars.cl
```

4. Copia el **Template ID** (algo como `template_xxxxxxx`)

#### 4. Obtener Public Key
1. Ve a **"Account"** → **"General"**
2. Copia tu **Public Key** (algo como `user_xxxxxxxxxxxxxxxx`)

#### 5. Configurar en el código
Abre `src/components/ContactForm.tsx` y reemplaza estas líneas:

```typescript
const serviceId = 'tu_service_id_aqui';
const templateId = 'tu_template_id_aqui'; 
const publicKey = 'tu_public_key_aqui';
```

Con tus IDs reales de EmailJS.

### ✅ ¡Listo!

Ahora el formulario enviará los mensajes directamente a tu email `jocarscl@gmail.com` sin necesidad de backend o APIs externas.

## 🚀 Desarrollo

```bash
npm install
npm run dev
```

## 📱 Características

- ✅ Formulario de contacto funcional con EmailJS
- ✅ Diseño responsive
- ✅ Botón de WhatsApp flotante
- ✅ Animaciones suaves
- ✅ 100% TypeScript
- ✅ Componentes reutilizables