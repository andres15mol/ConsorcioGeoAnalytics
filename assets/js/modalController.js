/* modal */

const $ = (selector) => document.querySelector(selector);
const modalContent = $("#modalContent");
const modal = $("#modal");

const modalLogic = (e) => {
  
  //cada servicio esta diferenciado por un id, con la primera palabra del servicio
  console.log(e.id);
  switch (e.id) {
    case "capacitacion":
      modal.classList.remove("modal-lg");

      modalContent.innerHTML = `
            <h3> CAPACITACIÓN EN SIG </h3>
            <p>
                Proporcionamos capacitación y formación
                especializada en el uso de herramientas tecnológicas
                de Sistemas de Información Geográfica, asegurando
                que nuestros clientes maximicen el potencial de estas
                herramientas en sus operaciones.
            </p>
            `;
      break;
    case "fotografia":
      modal.classList.remove("modal-lg");

      modalContent.innerHTML = `
            <h3> FOTOGRAFÍA AÉREA GEORREFENCIADA </h3>
            <p>
                Realizamos la toma de fotografías aéreas
                georreferenciadas, proporcionando una perspectiva
                única y precisa para diversas aplicaciones.<br>
                En Consorcio Geoanalytics, nos enorgullece ofrecer
                servicios de calidad que se adaptan a las necesidades
                especificas de cada cliente, garantizando resultados
                precisos y eficientes en el ámbito se los Sistemas de
                Información Geográfica.
            </p>
            `;
      break;
    case "implementacion":
      modal.classList.remove("modal-lg");

      modalContent.innerHTML = `
            <h3> IMPLEMENTACIÓN DE PLATAFORMAS SIG: </h3>
            <p>
            
            Realizamos la implementación de plataformas de
            Sistemas de Información Geográfica, abarcando
            software de escritorio (ArcGIS PRO, ArcMAP, etc.),
            software empresarial (ArcGIS ENTERPRISE) y soluciones
            en línea (ArcGIS Online) y sus extensiones. Esto incluye:
            </p>
            <ul>
                <li>
                    Implementación de bases de datos espaciales
                    (PostgreSQL - PostGIS, Oracle - Spatial and Graph
                    Essentials, SQL Server).
                </li>
                <li>
                    Desarrollo de aplicaciones SIG personalizadas
                </li>
                <li>
                    Creación de infraestructuras de datos espaciales
                    locales.
                </li>
                <li>
                    Diseño, desarrollo e implementación de aplicaciones
                    SIG móviles para la captura eficiente de datos
                    mediante la elaboración de formularios digitales
                    para encuestas y procesos censales.
                </li>
            </ul>
            `;
      break;
    case "geo":
      modal.classList.remove("modal-lg");
      modalContent.innerHTML = `
            <h3> GEO INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DE DATOS </h3>
            <p>
                Desarrollamos e implementamos tableros de control
                (dashboards) para geo inteligencia de negocio y
                analítica de datos en tiempo real. <br> Además, elaboramos
                mapas y plataformas web, así como hubs de mapas
                para análisis espacial avanzado que respalde la toma
                de decisiones.
            </p>
            `;
      break;
    case "cartografia":
      modal.classList.remove("modal-lg");
      modalContent.innerHTML = `
            <h3> CARTOGRAFÍA CATASTRAL MULTIFINALITARIA Y GEORREFERENCIACIÓN </h3>
            <p>
                Nos especializamos en cartografía catastral
                multifinalitaria, así como en la medición y
                georreferenciación de predios, edificaciones, red vial,
                recursos hídricos y otros objetos específicos según las
                necesidades particulares de cada cliente.
            </p>
            `;
      break;
    case "gestion":
      modal.classList.remove("modal-lg");
      modalContent.innerHTML = `
            <h3> GESTIÓN INTEGRAL DE PROYECTOS SIG </h3>
            <p>
                Ofrecemos servicios completos de gestión de proyectos
                SIG, abarcando desde la planificación hasta la
                conclusión.<br><br> Nos encargamos de la ejecución, control y
                seguimiento, asegurando altos estándares de calidad
                en cada fase del proyecto.
            </p>
            `;
      break;
      case "p1":
        // modal.classList.add("modal-lg");
        modalContent.innerHTML = `
              <h3> SISTEMA DE CONTROL DE TIERRAS DE LA ESCUELA AGRÍCOLA PANAMERICANA (2019 A LA FECHA) </h3>
              <p>
              Con el fin de mantener un registro digital de sus propiedades y terrenos, la Escuela Agrícola Panamericana (EAP) ubicada en el
              Valle de El Zamorano, decidió implementar una plataforma GIS que le facilitara la búsqueda de la documentación relacionada
              con sus tierras (escrituras, planos, mapas, etc.) y poder prescindir de los archivos y de las inmensas planotecas cuando uno de
              estos documentos fuera requerido.<br><br>
              De esa forma nació la plataforma GIS de Control de Tierras, que luego de ver su utilidad y los servicios que podían ser
              incorporados, fue evolucionando a una plataforma de Seguridad y Seguimiento de Operaciones relacionadas con el control de
              los predios agrícolas y de bosque que comprenden la Escuela. Actualmente, los funcionarios de campo y guardias de seguridad
              pueden reportar en tiempo real, cualquier tipo de hallazgo que afecte las operaciones normales, los que son resueltos de
              inmediato ya que son reportados en esta plataforma multiuso.<br><br>
              Una vez superado el evento, su resolución también es reportada mediante estos dispositivos por lo que el caso cambia su estado
              a “resuelto”.<br> En esta plataforma se reportan problemas como cercos caídos, vagancia de semovientes, tuberías rotas, o
              cualquier tipo de evento que deba ser reportado y resuelto de forma inmediata y urgente. Esta plataforma se encuentra en
              constante desarrollo, por lo que se hacen mejoras y se incorporan nuevas funcionalidades de manera permanente.
              </p>
              `;
        break;
        case "p2":
        // modal.classList.add("modal-lg");
        modalContent.innerHTML = `
              <h3> IMPLEMENTACIÓN DE LA PLATAFORMA GEOGRÁFICA DEL BCIE (2020)
              </h3>
              <p>
              Con el objetivo de generar conocimiento a través de los datos, el BCIE realizó la licitación para la implementación de una
              Plataforma Geográfica con información relevante para la toma de decisiones y para dar a conocer el estado de las operaciones
              de impacto en la región.<br> Este proceso fue adjudicado a GeoMapps en consorcio junto con ACE Technologies de Guatemala.<br>
              En este momento, la plataforma se encuentra totalmente instalada y operativa. Se brindaron los servicios de implementación de
              una plataforma de Sistemas de Información Geográfica (GIS) para las operaciones del BCIE, incluyendo licenciamiento,
              configuración, puesta a punto, administración y soporte para la plataforma, así como los servicios asociados a las distintas áreas
              funcionales, para habilitar las capacidades de captura de información geográfica, configuración de capas geográficas, análisis
              espacial avanzado, análisis tridimensional y asesoría para la presentación de información.
              </p>
              `;
        break;
        case "p3":
        modalContent.innerHTML = `
              <h3> DESARROLLO DE HERRAMIENTAS DE CAPTURA DE CAMPO PARA EL BCIE (2020-2021)</h3>
              <p>
              Posterior a la implementación de la plataforma, el banco evaluó la necesidad de robustecer su herramienta de captura
              de información de campo; diseñar y desarrollar un sistema de boletas y evaluación de proyectos integrado a las otras
              herramientas disponibles. El objetivo de este segundo proyecto era la integración en tiempo real de las boletas capturadas en
              los procesos de flujo de trabajo y supervisión con otras plataformas de comunicación y evaluación utilizadas por el personal que
              realiza visitas y supervisiones fuera de oficina. Utilizando herramientas de desarrollo como WebAPP Builder y utilizando tecnología
              de ArcGIS Enterprise, se implementaron los aplicativos necesarios para administrar la información, asignar automáticamente
              usuarios que deben realizar las tareas de supervisión, cambiar estado de las etapas de un proyecto y establecer procesos de
              control de calidad de las obras en construcción.
              </p>
              `;
        break;
        case "p4":
        modalContent.innerHTML = `
              <h3> CREACIÓN DE LA INFRAESTRUCTURA DE DATOS ESPACIALES (IDE) DEL BCIE (2021-2022) </h3>
              <p>
              Con el objetivo de sacar mayor provecho a la implementación del Sistema de Información Geográfica (GIS), el BCIE
              contrato nuestros servicios como parte del consorcio de implementación, para la creación de su Infraestructura de Datos
              Espaciales (IDE), como paso estratégico para una administración más efectiva y eficiente de su plataforma geográfica hacia los
              proyectos emprendidos por el banco. La IDE constituye un componente fundamental para la gestión, acceso y distribución
              eficiente de información geoespacial dentro de la organización, promoviendo la toma de decisiones informadas y el desarrollo
              de proyectos en un entorno espacial.
              </p>
              `;
        break;
        case "p5":
        modalContent.innerHTML = `
              <h3> CENSO DE USUARIOS DE LA JUNTA DE AGUA DE SANTA LUCÍA (2020-2021)</h3>
              <p>
              Como en la mayoría de los centros poblados pequeños del país, la Junta de Agua del municipio de Santa Lucia, Francisco
              Morazán, ha carecido de tecnología que le permita mejorar la calidad de su servicio a los usuarios, quienes, para poder contar
              con agua en tiempos de verano, dependen más de que el invierno anterior “haya sido bueno” que de una apropiada
              planificación que involucre tanto la disponibilidad de Agua como la demanda y el consumo adecuado de este valioso recurso.
              Con este fin, a finales de 2019, se diseñó una plataforma GIS que tuviera información desde las fuentes de agua, la conducción,
              distribución, almacenamiento y finalmente los usuarios a quienes se perfiló en cuanto a su consumo, tipo de vivienda, número
              de habitantes y otros aspectos que le permitieran a los expertos hidrólogos, hidráulicos y planificadores contar con suficiente
              información que ayude a rediseñar una distribución más justa y equitativa del agua. Utilizando la herramienta móvil ArcGIS Survey,
              se hizo el levantamiento georreferenciado de las fuentes, tuberías, rompe-cargas, tanques de almacenamiento, válvulas, roturas,
              etc. y se realizó un censo de usuarios a quienes se les levantó un formulario georreferenciado que permitió entender como es
              utilizada el agua en cada vivienda(uso consuntivo), acompañado de fotografías del almacenamiento de cada usuario
              (tanques, pilas, barriles, cubetas, etc.).
              </p>
              `;
        break;
        case "p6":
        modalContent.innerHTML = `
              <h3> CENSO DE NEGOCIOS DE LA CEMENTERA ARGOS (2022) </h3>
              <p>
              Para tener un control en el mercadeo y distribución de su producto, la empresa ARGOS, decidió en 2022 realizar un Censo
              de Ferreterías, en los 95 municipios más grandes de Honduras y mediante una encuesta georreferenciada, conocer la
              penetración de la marca y los productos en las ferreterías y usuarios finales. Conocer este dato, le permite también a la empresa
              desarrollar estrategias de mercadeo (Geomarketing) con la intención de incrementar sus ventas en lugares que posiblemente
              antes no habían sido considerado como potenciales clientes. Se permitió a los analistas de ARGOS, tener una visualización en
              tiempo real de las ferreterías que iban siendo visitadas y por medio de un tablero de control (Dashboard) conocer la opinión de
              los entrevistados para tomar decisiones informadas de manera inmediata.
              
              </p>
              `;
        break;
        case "p7":
        modalContent.innerHTML = `
              <h3> OPERACIÓN SONRISA (2021 A LA FECHA) </h3>
              <p>
              Desde 2021 hasta la fecha, con la intención de mejorar la coordinación de brigadas y hacer una localización más eficiente
              de niños que necesitan intervención de labio Leporino, Operación Sonrisa implementó una nueva plataforma informática que
              incluyera Sistemas Georreferenciados que le ayudaran a identificar las zonas con mayor incidencia en pacientes potenciales o
              intervenidos. La plataforma también tiene entre sus funciones la valoración del desempeño de las brigadas médicas en diferentes
              zonas de influencia, cuantificar el éxito de trabajos realizados y proporcionar información valiosa para la toma de decisiones de
              futuras intervenciones. Debido a la pandemia, Operación Sonrisa optó por desarrollar soluciones más modernas, para no ver
              disminuidas sus actividades por lo que GeoMapps desarrolló un sistema web para solucionar el problema. Inicialmente, para no
              detener la operación, se optó por seguir utilizando el sistema actual, e ir cubriendo las nuevas necesidades con la
              implementación de módulos según las necesidades y requerimientos de OS. A la fecha se han integrado también, módulos de
              Inteligencia de Negocios con el software Power BI y por medio de la georreferenciación de futuros pacientes, la organización
              puede organizar mejor sus brigadas futuras.
              </p>
              `;
        break;
        
    default:
      break;
  }
};


