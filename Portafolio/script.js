// ===== DATOS PERSONALES: lo que quede vacío ("") simplemente no se muestra =====
const profile = {
    github: "https://github.com/alejo-lopez09",
    email: "",     // ej: "tucorreo@gmail.com"
    linkedin: "",  // ej: "https://www.linkedin.com/in/tu-usuario"
    cv: "",        // ej: "Alejandro_Lopez_CV.pdf" (sube el PDF a esta carpeta)
    photo: ""      // ej: "foto.jpg" (opcional, foto profesional)
};

const strengths = ["Trabajo en equipo con Git Flow", "Comunicación de soluciones al equipo", "Depuración de errores", "Documentación clara", "Aprendizaje autónomo"];

// Rellena también institución y fechas cuando quieras mostrarlas.
const education = [
    { title: "Formación en desarrollo de software y sistemas de bases de datos", place: "", period: "En curso" }
];
const courses = []; // ej: { name: "Nombre del curso", place: "Plataforma", year: "2026" }

// Proyectos destacados. Opcionales: problema, rol, reto, demo, img (captura).
const projects = [
    {
        name: "Hotel Rincón del Carmen",
        tags: ["HTML", "CSS", "JavaScript", "LocalStorage", "JSON"],
        alcance: "Aplicación web de reservas para un hotel: catálogo de habitaciones, registro e inicio de sesión, reservas, panel de administración y página de contacto. Es responsive y guarda los datos en archivos JSON y LocalStorage.",
        problema: "",
        rol: "",
        reto: "Simular persistencia de datos sin backend, manteniendo separados CSS, JS y datos en un proyecto de varias páginas.",
        aprendizaje: "Organizar un proyecto de varias páginas, crear componentes con JavaScript puro y simular persistencia sin backend.",
        repo: "https://github.com/alejo-lopez09/Hotel_Rincon_DelCarmen",
        demo: "", img: ""
    },
    {
        name: "Mini Portal de Colombia (API Colombia)",
        tags: ["JavaScript", "API REST", "async/await", "DOM"],
        alcance: "Portal que consume la API pública de Colombia y muestra departamentos, presidentes y áreas naturales, con búsqueda en tiempo real, mensaje de carga y manejo de errores.",
        problema: "",
        rol: "",
        reto: "Evitar que la aplicación se rompa cuando la API no responde.",
        aprendizaje: "Consumir APIs con fetch y async/await, renderizar datos dinámicamente en el DOM y manejar errores con try/catch.",
        repo: "https://github.com/alejo-lopez09/Alejandro-Lopez-api-colombia",
        demo: "", img: ""
    },
    {
        name: "TaskFlow CLI",
        tags: ["Python", "JSON", "Git", "Trabajo en equipo"],
        alcance: "Gestor de tareas para la terminal: crear, listar, cambiar el estado y eliminar tareas, con persistencia en un archivo JSON entre ejecuciones. Desarrollado en equipo.",
        problema: "",
        rol: "",
        reto: "Un error de ruta al cargar el archivo JSON. Lo depuré y comuniqué la solución al equipo para que la aplicara en sus ramas.",
        aprendizaje: "Persistir datos con JSON y depurar errores de rutas dentro de un flujo de trabajo en equipo.",
        repo: "https://github.com/alejo-lopez09/taskflow-cli",
        demo: "", img: ""
    }
];

// Repositorios sin ficha completa: se listan solo con nombre y enlace.
const others = [
    { name: "Git Flow y Conventional Commits", text: "Práctica documentada del ciclo feature, release y hotfix. Las versiones no aparecían en git tag, así que localicé los commits y creé las etiquetas manualmente.", repo: "https://github.com/alejo-lopez09/Alejandro_Lopez_gitFlow" },
    { name: "Diario de Viaje", text: "Relatos de 10 destinos para practicar Git y GitHub.", repo: "https://github.com/alejo-lopez09/Diario_De_Viaje_Git" },
    { name: "Control de Gastos", text: "Aplicación para administrar gastos.", repo: "https://github.com/alejo-lopez09/Control-de-gastos" },
    { name: "Adición de Facturas HRC", text: "Gestión de facturas del Hotel Rincón del Carmen.", repo: "https://github.com/alejo-lopez09/Adicion_De_Facturas_HRC" },
    { name: "Base de Datos", text: "Prácticas con bases de datos.", repo: "https://github.com/alejo-lopez09/Base-de-datos" }
];

const skills = {
    "Lenguajes": ["JavaScript", "Python", "Java", "SQL"],
    "Frontend": ["HTML5", "CSS3", "DOM", "Diseño responsive"],
    "Backend y APIs": ["Spring Boot", "Creación de APIs REST", "Consumo de APIs (fetch, async/await)", "n8n (automatización)"],
    "Bases de datos": ["MySQL", "JSON", "LocalStorage"],
    "Herramientas": ["Git", "GitHub", "Git Flow", "Conventional Commits", "Postman", "Depuración"],
    "En aprendizaje": ["TypeScript", "Metodologías ágiles", "Inteligencia artificial"]
};

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
}
function block(title, text) {
    const wrap = el("div", "block");
    wrap.append(el("h4", "", title), el("p", "", text));
    return wrap;
}
function link(text, href, className, label) {
    const a = el("a", className, text);
    a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener"; }
    if (label) a.setAttribute("aria-label", label);
    return a;
}
function list(items) {
    const ul = el("ul", "tags");
    items.forEach(t => ul.append(el("li", "", t)));
    return ul;
}

// Hero y contacto
const heroActions = document.getElementById("hero-actions");
if (profile.cv) heroActions.append(link("Descargar hoja de vida", profile.cv, "btn ghost"));
heroActions.append(link("GitHub", profile.github, "btn ghost"));
if (profile.photo) {
    const img = el("img", "photo");
    img.src = profile.photo; img.alt = "Fotografía de Alejandro López";
    document.getElementById("photo-slot").append(img);
}
const contact = document.getElementById("contact-links");
if (profile.email) contact.append(link(profile.email, "mailto:" + profile.email, "btn"));
if (profile.linkedin) contact.append(link("LinkedIn", profile.linkedin, "btn ghost"));
contact.append(link("GitHub", profile.github, "btn ghost"));
if (profile.cv) contact.append(link("Hoja de vida (PDF)", profile.cv, "btn ghost"));

// Sobre mí y formación
document.getElementById("strengths").append(...strengths.map(s => el("li", "", s)));
const eduBox = document.getElementById("education");
education.forEach(e => {
    const row = el("div", "edu");
    row.append(el("h3", "", e.title), el("p", "", [e.place, e.period].filter(Boolean).join(" · ")));
    eduBox.append(row);
});
if (courses.length) {
    document.getElementById("courses-wrap").hidden = false;
    courses.forEach(c => document.getElementById("courses").append(el("li", "", [c.name, c.place, c.year].filter(Boolean).join(" · "))));
}

// Proyectos
const container = document.getElementById("projects-container");
projects.forEach(p => {
    const card = el("article", "project");
    const side = el("div", "project-side");
    side.append(el("h3", "", p.name), list(p.tags));
    const links = el("div", "project-links");
    links.append(link("Ver código en GitHub", p.repo, "repo", `Ver código de ${p.name} en GitHub`));
    if (p.demo) links.append(link("Ver aplicación en vivo", p.demo, "repo", `Ver ${p.name} funcionando`));
    side.append(links);

    const body = el("div", "project-body");
    if (p.img) { const i = el("img", "shot"); i.src = p.img; i.alt = `Captura de ${p.name}`; i.loading = "lazy"; body.append(i); }
    [["Qué hace", p.alcance], ["Problema que resuelve", p.problema], ["Mi participación", p.rol], ["Reto y solución", p.reto], ["Qué aprendí", p.aprendizaje]]
        .forEach(([t, x]) => { if (x) body.append(block(t, x)); });
    card.append(side, body);
    container.append(card);
});
const othersBox = document.getElementById("others-container");
others.forEach(o => {
    const li = el("li");
    li.append(link(o.name, o.repo, "", `Ver código de ${o.name} en GitHub`), el("span", "", " — " + o.text));
    othersBox.append(li);
});

// Habilidades
const skillsContainer = document.getElementById("skills-container");
Object.entries(skills).forEach(([group, items]) => {
    const col = el("div", "skill-group");
    col.append(el("h3", "", group), list(items));
    skillsContainer.append(col);
});
