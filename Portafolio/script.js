// Cada proyecto: alcance = qué hace; aprendizaje = qué dejó.
// Si un campo queda vacío, la tarjeta simplemente no lo muestra.
const projects = [
    {
        name: "Hotel Rincón del Carmen",
        tags: ["HTML", "CSS", "JavaScript", "LocalStorage", "JSON"],
        alcance: "Aplicación web de reservas para un hotel: catálogo de habitaciones, registro e inicio de sesión, reservas, panel de administración y página de contacto. Es responsive y guarda los datos en archivos JSON y LocalStorage.",
        aprendizaje: "Organizar un proyecto de varias páginas (CSS, JS y datos separados), crear componentes con JavaScript puro y simular persistencia sin backend.",
        repo: "https://github.com/alejo-lopez09/Hotel_Rincon_DelCarmen"
    },
    {
        name: "Mini Portal de Colombia (API Colombia)",
        tags: ["JavaScript", "API REST", "async/await", "DOM"],
        alcance: "Portal que consume la API pública de Colombia y muestra departamentos, presidentes y áreas naturales, con búsqueda en tiempo real, mensaje de carga y manejo de errores.",
        aprendizaje: "Consumir APIs con fetch y async/await, renderizar datos dinámicamente en el DOM y evitar que la app falle cuando la API no responde (try/catch).",
        repo: "https://github.com/alejo-lopez09/Alejandro-Lopez-api-colombia"
    },
    {
        name: "TaskFlow CLI",
        tags: ["Python", "JSON", "Git", "Trabajo en equipo"],
        alcance: "Gestor de tareas para la terminal: crear, listar, cambiar el estado y eliminar tareas, con persistencia en un archivo JSON entre ejecuciones. Desarrollado en equipo.",
        aprendizaje: "Persistir datos con JSON, depurar un error de ruta al cargar el archivo y comunicar la solución al equipo para que la aplicara en sus ramas.",
        repo: "https://github.com/alejo-lopez09/taskflow-cli"
    },
    {
        name: "Git Flow y Conventional Commits",
        tags: ["Git", "Git Flow", "GitHub"],
        alcance: "Práctica documentada paso a paso del ciclo completo de Git Flow: feature, release y hotfix, con commits convencionales y estructura de ramas (master, develop y de apoyo).",
        aprendizaje: "Trabajar con ramas por tipo de cambio y resolver un fallo real: las versiones no aparecían en git tag, así que localicé los commits y creé las etiquetas manualmente.",
        repo: "https://github.com/alejo-lopez09/Alejandro_Lopez_gitFlow"
    },
    {
        name: "Diario de Viaje",
        tags: ["Git", "GitHub", "Markdown"],
        alcance: "Diario con relatos y recomendaciones de 10 destinos, creado para practicar el flujo de trabajo con Git y GitHub.",
        aprendizaje: "",
        repo: "https://github.com/alejo-lopez09/Diario_De_Viaje_Git"
    },
    // TODO: completa estos tres. Escribe qué hace cada uno, con qué tecnologías y qué aprendiste.
    {
        name: "Control de Gastos",
        tags: [],
        alcance: "Aplicación para administrar y hacer seguimiento de gastos.",
        aprendizaje: "",
        repo: "https://github.com/alejo-lopez09/Control-de-gastos"
    },
    {
        name: "Adición de Facturas HRC",
        tags: [],
        alcance: "Sistema para la gestión de facturas del Hotel Rincón del Carmen.",
        aprendizaje: "",
        repo: "https://github.com/alejo-lopez09/Adicion_De_Facturas_HRC"
    },
    {
        name: "Base de Datos",
        tags: [],
        alcance: "Repositorio de prácticas con bases de datos.",
        aprendizaje: "",
        repo: "https://github.com/alejo-lopez09/Base-de-datos"
    }
];

const skills = {
    "Desarrollo web": ["HTML5", "CSS3", "JavaScript", "DOM", "fetch y async/await", "LocalStorage"],
    "Python y datos": ["Python", "Aplicaciones de consola", "JSON", "APIs REST"],
    "Colaboración": ["Git", "GitHub", "Git Flow", "Conventional Commits", "Trabajo en ramas"],
    "En aprendizaje": ["TypeScript", "Bases de datos", "Inteligencia artificial"]
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

const container = document.getElementById("projects-container");
projects.forEach(p => {
    const card = el("article", "project");
    const side = el("div", "project-side");
    side.append(el("h3", "", p.name));
    if (p.tags.length) {
        const list = el("ul", "tags");
        p.tags.forEach(t => list.append(el("li", "", t)));
        side.append(list);
    }
    const link = el("a", "repo", "Ver código en GitHub");
    link.href = p.repo;
    link.target = "_blank";
    link.rel = "noopener";
    link.setAttribute("aria-label", `Ver código de ${p.name} en GitHub`);
    side.append(link);

    const body = el("div", "project-body");
    if (p.alcance) body.append(block("Qué hace", p.alcance));
    if (p.aprendizaje) body.append(block("Qué aprendí", p.aprendizaje));

    card.append(side, body);
    container.append(card);
});

const skillsContainer = document.getElementById("skills-container");
Object.entries(skills).forEach(([group, items]) => {
    const col = el("div", "skill-group");
    col.append(el("h3", "", group));
    const list = el("ul", "tags");
    items.forEach(i => list.append(el("li", "", i)));
    col.append(list);
    skillsContainer.append(col);
});
