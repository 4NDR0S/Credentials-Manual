const translations = {

en: {

hero_title:
'Master Your <span class="text-blue-600">GitHub App</span> Authentication',

hero_description:
'A precise, visual walkthrough to configuring credentials, managing permissions, and retrieving IDs for your next-generation GitHub integration.',

step1_title:
'Accessing GitHub Apps',

step1_text:
'Navigate to your account or organization settings to begin. GitHub Apps allow for much more granular control compared to traditional OAuth.',

step1_li1:
'Click your profile picture in the top-right corner.',

step1_li2:
'Select <code class="bg-slate-200 px-1.5 py-0.5 rounded text-sm">Settings</code>.',

step1_li3:
'On the left sidebar, scroll to <code class="bg-slate-200 px-1.5 py-0.5 rounded text-sm">Developer settings</code>.',

step1_li4:
'Click <code class="bg-slate-200 px-1.5 py-0.5 rounded text-sm">GitHub Apps</code> → <code class="bg-blue-600 text-white px-2 py-0.5 rounded text-sm">New GitHub App</code>.',


step2_title:
'Creating the App',

core_identity:
'Core Identity',

github_app_name_desc:
'Give it a unique, professional name (e.g., "Company-Sync-Bot").',

homepage_url_desc:
'The URL of your application or project repository.',

webhook_toggle_desc:
'Disable "Active" if you don\'t need real-time events, or provide a Payload URL.',


step3_title:
'Permissions Setup',

least_privilege:
'Follow the "Least Privilege" principle. Select only what you need.',

metadata_desc:
'Search repositories and view basic info',

contents_desc:
'Access file structure and code data',

pr_desc:
'View PR descriptions and reviewers',


step4_title:
'Getting Credentials',

credentials_location_title:
'Where to find these credentials',

credentials_location_text:
'After creating your GitHub App, navigate to the <strong>General</strong> tab inside the application settings. Here you will find the <strong>App ID</strong>, <strong>Client ID</strong>, and the section to generate your <strong>Private Key</strong>.',

core_identifiers:
'Core Identifiers',

identifier_info:
'These can be found in the "General" tab of your app settings.',

app_id_desc:
'Used to identify the GitHub App when generating a <strong>JWT authentication token</strong>.',

client_id_desc:
'Public identifier of the GitHub App. Used mainly for OAuth flows and integrations.',

private_key_title:
'Private Key',

private_key_desc:
'Scroll to the bottom of the General tab to generate your RSA private key.',

important_title:
'Important:',

pem_li1:
'The downloaded <code>.pem</code> file is used to sign JWT tokens.',

pem_li2:
'Keep this file secure and never upload it to a public repository.',

pem_li3:
'This key allows your application to authenticate as the GitHub App.',


auth_flow_title:
'How GitHub App Authentication Works',

auth_flow_text:
'GitHub Apps authenticate using a secure token flow. The Private Key is used to generate a JWT token, which is then exchanged for an Installation Access Token to interact with the GitHub API.',

flow_private_key:
'Private Key',

flow_generate_jwt:
'Generate JWT',

flow_jwt:
'JWT Token',

flow_signed_app:
'Signed with App ID',

flow_installation:
'Installation ID',

flow_identify:
'Identify installation',

flow_access:
'Access Token',

flow_api:
'Use GitHub API',


security_notice:
'Security Notice',

security_notice_text:
'Never commit the downloaded <code>.pem</code> private key to a repository. Store it securely using environment variables or a secret manager.',


step5_title:
'Installing the App',

step5_text:
'On the left sidebar, click <strong>"Install App"</strong>. Choose the account or organization where you want the app to reside. This creates an <em>Installation</em> instance.',


step6_title:
'Getting Installation ID',

step6_text:
'After installation, look at the URL in your browser. The trailing digits represent your specific <strong>Installation ID</strong>.',


quick_jump:
'Quick Jump',

need_help:
'Need Help?',

need_help_text:
'Check out the official GitHub Developer docs for advanced configuration.',

view_docs:
'View Official Docs'

},



es: {

hero_title:
'Domina la Autenticación de <span class="text-blue-600">GitHub Apps</span>',

hero_description:
'Una guía visual precisa para configurar credenciales, gestionar permisos y obtener identificadores para tu integración con GitHub.',

step1_title:
'Acceder a GitHub Apps',

step1_text:
'Navega a la configuración de tu cuenta u organización para comenzar. GitHub Apps permiten un control mucho más granular comparado con OAuth tradicional.',

step1_li1:
'Haz clic en tu foto de perfil en la esquina superior derecha.',

step1_li2:
'Selecciona <code class="bg-slate-200 px-1.5 py-0.5 rounded text-sm">Settings</code>.',

step1_li3:
'En el menú lateral, baja hasta <code class="bg-slate-200 px-1.5 py-0.5 rounded text-sm">Developer settings</code>.',

step1_li4:
'Haz clic en <code class="bg-slate-200 px-1.5 py-0.5 rounded text-sm">GitHub Apps</code> → <code class="bg-blue-600 text-white px-2 py-0.5 rounded text-sm">New GitHub App</code>.',


step2_title:
'Crear la Aplicación',

core_identity:
'Identidad Principal',

github_app_name_desc:
'Dale un nombre único y profesional (ejemplo: "Company-Sync-Bot").',

homepage_url_desc:
'La URL de tu aplicación o repositorio.',

webhook_toggle_desc:
'Desactiva "Active" si no necesitas eventos en tiempo real o configura un Payload URL.',


step3_title:
'Configuración de Permisos',

least_privilege:
'Sigue el principio de "Mínimo Privilegio". Selecciona solo lo necesario.',

metadata_desc:
'Buscar repositorios y ver información básica',

contents_desc:
'Acceder a estructura de archivos y código',

pr_desc:
'Ver descripciones y revisores de Pull Requests',


step4_title:
'Obtener Credenciales',

credentials_location_title:
'Dónde encontrar estas credenciales',

credentials_location_text:
'Después de crear tu GitHub App, navega a la pestaña <strong>General</strong> dentro de la configuración de la aplicación. Aquí encontrarás el <strong>App ID</strong>, el <strong>Client ID</strong> y la sección para generar la <strong>Private Key</strong>.',

core_identifiers:
'Identificadores Principales',

identifier_info:
'Puedes encontrar estas opciones en la pestaña "General" de la configuración de tu aplicación.',

app_id_desc:
'Se utiliza para identificar la GitHub App al generar un <strong>token JWT</strong>.',

client_id_desc:
'Identificador público de la GitHub App. Usado principalmente en flujos OAuth.',

private_key_title:
'Clave Privada',

private_key_desc:
'Desplázate al final de la pestaña General para generar tu clave RSA.',

important_title:
'Importante:',

pem_li1:
'El archivo <code>.pem</code> se usa para firmar tokens JWT.',

pem_li2:
'Guarda este archivo de forma segura y nunca lo subas a un repositorio público.',

pem_li3:
'Esta clave permite que tu aplicación se autentique como la GitHub App.',


auth_flow_title:
'Cómo funciona la Autenticación de GitHub Apps',

auth_flow_text:
'Las GitHub Apps se autentican usando un flujo de tokens seguro. La clave privada genera un JWT que luego se intercambia por un Installation Access Token para usar la API.',

flow_private_key:
'Clave Privada',

flow_generate_jwt:
'Generar JWT',

flow_jwt:
'Token JWT',

flow_signed_app:
'Firmado con App ID',

flow_installation:
'Installation ID',

flow_identify:
'Identificar instalación',

flow_access:
'Access Token',

flow_api:
'Usar GitHub API',


security_notice:
'Aviso de Seguridad',

security_notice_text:
'Nunca subas la clave privada <code>.pem</code> a un repositorio. Guárdala usando variables de entorno o gestores de secretos.',


step5_title:
'Instalar la Aplicación',

step5_text:
'En el menú lateral haz clic en <strong>"Install App"</strong>. Luego selecciona la cuenta u organización donde se instalará.',


step6_title:
'Obtener Installation ID',

step6_text:
'Después de instalar la aplicación, observa la URL del navegador. Los números finales corresponden al <strong>Installation ID</strong>.',


quick_jump:
'Navegación Rápida',

need_help:
'¿Necesitas ayuda?',

need_help_text:
'Revisa la documentación oficial de GitHub para configuraciones avanzadas.',

view_docs:
'Ver documentación oficial'

}

};