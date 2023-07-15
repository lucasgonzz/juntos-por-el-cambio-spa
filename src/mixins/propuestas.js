export default {
	methods: {
		getImage(propuesta, from_propuestas_folder = true) {
			if (from_propuestas_folder) {
				return require('@/assets/propuestas/'+propuesta.img) 
			}
			console.log('llego: '+propuesta)
			return require('@/assets/'+propuesta) 
		},
	}, 
	computed: {
		propuestas() {
			return [
				{
					name: 'Parque Industrial Municipal seco',
					img: 'industria2.png',
					descriptions: [
						'Desde hace más de dos décadas Gualeguay está experimentando un grave estancamiento en el aspecto laboral. Es importante destacar que la última industria que se estableció en nuestra ciudad fue en el año 2001 y corresponde a INPROCIL (Industria Productora de Cilindros). Y es desde entonces que no ha habido nuevos proyectos industriales que hayan generado empleo significativo en nuestra comunidad.',
						'Las estadísticas del censo de 2022 establecieron un hecho destacable: Gualeguay ha crecido casi un 35% en población desde el año 2001. Con este crecimiento lógico, después de veintidós años con las mismas industrias y sin ningún plan de desarrollo industrial y fuentes de trabajo, se hace cada vez más evidente que la acción gubernamental ha hecho poco y nada por este aspecto tan central para el desarrollo de la ciudad. El trabajo dignifica y brinda una mejor calidad de vida a las familias de la comunidad.',
						'Para fomentar el desarrollo de la ciudad, es necesario incentivar la creación de empleo a través de la atracción de nuevas industrias, el apoyo a emprendimientos locales, el fortalecimiento de la formación y capacitación laboral, así como la promoción de políticas que impulsen la inversión y el crecimiento económico. Un enfoque integral que aborde tanto las necesidades de los trabajadores como las oportunidades para las empresas es esencial para lograr un desarrollo sostenible y próspero en Gualeguay.',
						'En el año 2010, bajo la gestión de Luis Erro, ex intendente de la ciudad, fue elaborado el proyecto del área de parque industrial en la ciudad, a partir de dos informes. El predio seleccionado para el proyecto cuenta con 208 hectáreas, propiedad del municipio, ubicadas en la Segunda Sección Chacras, zona Potrero Sur, sobre calle 138 (ex ruta 136), a 600 metros al sur de calle 70.',
						'En el primer informe se establece que serán utilizadas 65,30 hectáreas para llevar a cabo el plan. Estudios realizados evidencian que los vientos en esta zona predominan con dirección sur. Esto es fundamental ya que se logra evitar la contaminación odorífera en la zona urbana. La red de agua corriente recorre la ruta 136, hasta Puerto Ruiz; mientras que la de gas industrial llega hasta el frigorífico Guay Meat S.A. a unos 500 metros del predio. Respecto al tendido eléctrico, hay una línea que provee de electricidad a Puerto Ruiz, y será necesario invertir en una red trifásica con potencia adecuada al uso para el proyecto.',
						'La zona donde se encuentra ubicado el Parque es de riesgo hídrico; sin embargo, tenemos en consideración que antes de cualquier desarrollo del Parque Industrial es preciso llevar a cabo finalmente el proyecto del enaltado y defensa del terreno.',
						'El parque ha pasado por un proceso de registro y ha cumplido con los requisitos necesarios para ser reconocido oficialmente a nivel nacional. De hecho, ya se encuentra inscripto en el RNPI (Registro Nacional de Parques Industriales).',
						'Es fundamental impulsar estrategias y políticas que promuevan el desarrolloeconómico y fomenten la creación de empleo en Gualeguay',
					],
					propuestas: [
						{
							title: 'Desarrollar el área industrial en seco',
							descriptions: [
								'La propuesta encuentra su eje en la creación de un Área Industrial en Seco, que ofrecerá una enorme cantidad de beneficios para la comunidad. Aspiramos a poner en funcionamiento y reactivar el predio que se encuentra inscripto con anterioridad.'
							]
						},

						
						{
							title: 'Infraestructura adecuada:',
							descriptions: [
								'Desarrollaremos infraestructura moderna y funcional. Esto incluye una sólida red de servicios básicos como electricidad, agua y comunicaciones. La infraestructura estará diseñada siguiendo estándares de sostenibilidad y respeto al medio ambiente. Buscaremos utilizar tecnologías y prácticas que minimicen el impacto ambiental, promoviendo la eficiencia energética, la gestión adecuada de los recursos naturales y la reducción de emisiones. Para lograrlo, trabajaremos en estrecha colaboración con expertos en urbanismo y medio ambiente, así como con la participación activa de la comunidad en la planificación y ejecución de proyectos. Juntos, construiremos una infraestructura que respalde el desarrollo integral de Gualeguay, al tiempo que preservamos nuestros recursos naturales para las generaciones futuras.'
							]
						},

						
						{
							title: 'Promoción de inversiones',
							descriptions: [
								'El municipio será el principal gestor, brindando los beneficios necesarios para atraer inversiones y fomentar la instalación de empresas e industrias. Ofreceremos incentivos fiscales y beneficios con el objetivo de generar empleo genuino en Gualeguay.'
							]
						},

						{
							title: 'Riesgo hídrico',
							descriptions: [
								'La zona donde está radicada el Área industrial, registrado en el REMPI es zona de riesgo hídrico, como está establecido en el diagnóstico urbano de Gualeguay, elaborado por la S.U.P.C.E. en 1999. La cota IGM del lote es de 7.071, según las cotas de recurrencia debido a la cercanía que posee el predio casi lindante con el Río Gualeguay.',
								'A fin de salvar el riesgo hídrico será llevada a cabo una obra según consta en el proyecto de diseño del parque industrial, con el enaltado y defensa de una cota IGM de 8,93 mts, debido al gran desnivel del terreno. Esto puede solucionarse de dos maneras, según consta en el Primer Informe Parque Industrial y de Servicios de la Ciudad de Gualeguay, de diciembre de 2010, “Características del Parque Industrial Gualeguay”. Por un lado, una defensa que recorrerá el borde del predio, un sistema de bombeo para lograr un eficiente drenaje pluvial en caso de ser necesario. Por otro lado, mediante el proceso de relleno con el sistema de refulado. Esto es el proceso de extracción de arena del lecho de cualquier curso de agua e impulsarla, con la ayuda de bombas, a otro sitio que se pretende rellenar con la hidromezcla.',
							]
						},

						{
							title: 'Tendido eléctrico, de gas y agua',
							descriptions: [
								'Se gestionará con las autoridades provinciales un proyecto para que la empresa ENERSA realice el tendido eléctrico AT o MT para alimentar con la energía que corresponda al Área Industrial.',
								'Se gestionará con las autoridades nacionales el tendido de la red de gas con la presión que cuenta el área industrial, realizado por GASNEA, y regulado por ENARGAS, o el ente que corresponda.',
								'Desde el municipio se realizará un proyecto mediante la Secretaría de Obras Públicas, a fin de instalar pozos de extracción de agua para alimentar el área industria. Se intentará lograr en el área un autoabastecimiento exclusivo de agua, para así abstenernos de llevar la red de agua potable al predio y evitar perjudicar a los vecinos que se sientan afectados.',
							]
						},	

						{
							title: 'Principal idea del parque',
							descriptions: [
								'La idea es que las industrias que se instalen en el predio tengan como cláusula obligatoria principal no desechar efluentes de residuos líquidos, evitando la contaminación directa del lecho del Río Gualeguay',
							]
						},

						{
							title: 	'ASERRADEROS',
						},

						{
							title: 	'FABRICA DE LADRILLOS SECOS',
						},

						{
							title: 	'METALURGICAS',
						},

						{
							title: 	'ASTILLEROS',
							descriptions: [
								'El establecimiento de un Área Industrial en Seco es de suma importancia para impulsar la economía de Gualeguay y forjar un futuro próspero para nuestra comunidad. Trabajando en conjunto, podemos construir un Gualeguay sólido, dinámico y sostenible. Este proyecto representa un paso crucial hacia el crecimiento económico, brindando oportunidades de empleo, fomentando la inversión y promoviendo el desarrollo industrial. Al fortalecer nuestra base industrial, sentaremos las bases para un futuro prometedor, mejorando la calidad de vida de nuestros ciudadanos y generando beneficios para toda la comunidad. Juntos, lograremos el desarrollo y el progreso que Gualeguay merece.',
							]
						},
						
					]
				},

				{
					name: 'Seguridad',
					img: 'guardia2.png',
					descriptions: [
						'La seguridad pública es un tema crucial en cualquier comunidad, y Gualeguay no es una excepción',
					],
					propuestas: [
						
						{
							title: 'Propuesta de Seguridad Pública',
							descriptions: [
								'La seguridad pública es un tema crucial en cualquier comunidad, y Gualeguay no es una excepción. En los últimos años, esta ciudad ha enfrentado diversos desafíos en materia de seguridad que han generado preocupación en sus habitantes. La delincuencia, el aumento de la violencia y la sensación de inseguridad son problemas que requieren una atención urgente por parte de las autoridades y la sociedad en general. En este contexto, es fundamental analizar y abordar de manera integral las causas y consecuencias de esta problemática para encontrar soluciones efectivas que garanticen la tranquilidad y el bienestar de todos los gualeyos.',
							],
						},
						
						{
							title: 'Seguridad Pública',
							descriptions: [
								'La seguridad pública es esencial para garantizar la integridad de los ciudadanos y sus bienes, y es responsabilidad del Estado brindar este servicio. Implica la convivencia pacífica y el respeto mutuo de los derechos individuales.',
							],
						},
						
						{
							title: 'Prevención',
							descriptions: [
								'La prevención policial comprende un conjunto de medidas técnicas y operativas destinadas a intervenir de manera temprana en los factores que promueven la violencia interpersonal y social, y que pueden dar lugar a delitos, infracciones o faltas. Su objetivo principal es reducir los riesgos y las posibilidades de que estos hechos ocurran. A través de estrategias preventivas, la policía busca prevenir y disuadir la comisión de delitos, promoviendo así la seguridad y el bienestar de la comunidad.',
							],
						},
						
						{
							title: 'Policía',
							descriptions: [
								'La Policía es un organismo estatal encargado de mantener el orden público y garantizar el ejercicio libre de los derechos y garantías individuales y colectivas, en conformidad con lo establecido por la Constitución y las leyes. Entre sus funciones se encuentran la prevención de delitos, la prevención y sanción de faltas y contravenciones, la investigación de delitos y la realización de las diligencias necesarias para su comprobación. Asimismo, tiene la responsabilidad de descubrir a los autores, cómplices y encubridores de los delitos, y llevar a cabo su aprehensión de acuerdo con las leyes aplicables en la materia Policía.',
							],
						},
						
						{
							title: 'Diagnóstico',
							descriptions: [
								'La última comisaría puesta en funcionamiento en la ciudad de Gualeguay fue la Comisaría de la segunda sección chacras, ubicada sobre calle Delfina D. Beracochea S/N zona de la vieja estación del ferrocarril, detrás del Barrio San Roque, a fines de 1983, principios de 1984. Según el último censo realizado en el año 1980, Gualeguay tenía una población urbana de 27.929, y 12.347 de habitantes en zona rural, con un total aproximado de 39.000 habitantes en todo el departamento.',
								'Según datos recabados de la institución Policial, en el año 1996, teniendo en cuenta la Jefatura Departamental, la Comisaría 1ra. Sección Chacras, la Comisaría 2da. Sección Chacras, la Comisaria Puerto Ruiz, la Comisaria General Galarza, las Comisarías de campaña: 1° Distrito, 2° Distrito, Comisaria Estación Lazo, 3° Distrito, 4° Distrito Sur, 4° Distrito Norte, 5° Distrito, 6° Distrito, 7° Distrito, 8° Distrito, el Departamento Gualeguay contaba con una fuerza efectiva de 311 funcionarios, incluyendo los partes de enfermo, licencias por retiro, y otras situaciones de revista. En ese mismo año, Gualeguay contaba con una población aproximada de 43.026 habitantes en todo el departamento.',
								'En 2023, la institución Policial cuenta en el casco urbano con la Jefatura central y dos comisarías: Comisaría 1ra Sección Chacras y Comisaría 2da Sección Chacras; además de trece comisarías de campaña: 1° Distrito, 2° Distrito, comisaría González Calderón, Comisaria Estación Lazo, 3° Distrito, 4° Distrito Sur, 4° Distrito Norte, 5° Distrito, 6° Distrito, 7° Distrito, 8° Distrito, Comisaria Puerto Ruiz, Comisaria General Galarza; 911 y Central de Monitoreo de cámaras de video vigilancia, donde se monitorean alrededor de 120 cámaras de seguridad.',
								'Teniendo en cuenta los primeros datos provisionales del Censo 2022, Gualeguay posee una población de 57.865 habitantes. La fuerza efectiva en 2023 es de 319 funcionarios aproximadamente. Incluyendo los partes de enfermo, licencias por retiro, y otras situaciones de revista, queda una fuerza efectiva de aproximadamente 220 funcionarios, encontrándonos en una situación muy similar a la que sucedía hace 27 años. Sin embargo, si tenemos en cuenta el crecimiento poblacional, pasamos de tener un policía cada 125 habitantes, a un policía cada 263.',
								'El gran problema que aqueja a nuestra ciudad es debido a la escasez de oficiales efectivos. Contamos con el mismo número de efectivos que hace 27 años, pero con una población que continúa en aumento. Pueden construirse muchas comisarías, pero si no hay policías para cubrirlas, son inoperantes.',
								'Según datos aportados desde la repartición policial, existen en la actualidad 100 cámaras de seguridad funcionando, repartidas en ocho monitores Led de 32”, y siete pantallas de computadoras de 17”, que no estarían siendo monitoreadas y controladas por falta de personal.',								
							],
						},
						
						{
							title: 'Legislación',
							descriptions: [
								{
									img: 'check.png',
									text: 'Efectivos policiales → a quién le corresponde.',
								},
 
								{
									img: 'check.png',
									text: 'Comisarías → Presupuesto',
								},

								{
									img: 'check.png',
									text: 'Legislación de vigilancia Ley n10175',
								},

								{
									img: 'check.png',
									text: 'Guardia urbana',
								},

								{
									img: 'check.png',
									text: 'Ojos en Alerta',
								},
							],
						},
						
						{
							title: 'Propuesta de Seguridad Pública',
							descriptions: [
								'1. Gestionar la realización de una capacitación exclusivamente para la ciudad de Gualeguay, destinado a al menos 100 efectivos. Con los cursos anuales solicitar un cupo no menor a los 30 o 35 funcionarios egresados de distintos institutos.',
								'2. Realizar las gestiones necesarias para la construcción de la Comisaría 3ra., que ya cuenta con un predio cedido por un vecino en zona Barrio Islas Malvinas, lindante al cuartel de bomberos voluntarios.',
								'3. Teniendo en cuenta la expansión poblacional hacia la zona Noroeste, realizaremos gestiones necesarias ante las autoridades provinciales pertinentes para la construcción de una 4ta Comisaría, ubicada en Primera Sección Chacras, zona conocida como la curva de Dowery.',
								'4. Especializar personal municipal para vigilancia de las cámaras del centro de monitoreo, los cuales tendrán sus propios responsables y contarán con el exclusivo contralor y coordinación de la policía.',
								'5. Creación y puesta en funcionamiento de la Guardia Urbana como colaboración en seguridad pública.',
							],
						},
						
						{
							title: 'Guardia Urbana',
							descriptions: [
								'La Guardia Urbana Municipal (GUM) es un cuerpo civil no armado cuya misión principal es fortalecer la presencia del gobierno municipal en espacios públicos para fomentar condiciones de seguridad y convivencia urbana óptimas. Sus acciones se centran en la prevención, la educación, el control y la aplicación rigurosa de las normativas municipales. Además, la Guardia Urbana Municipal trabaja en coordinación con otros organismos públicos a nivel municipal, provincial y/o nacional, así como con organizaciones no gubernamentales e instituciones intermedias. Algunos de sus objetivos incluyen:',
								{
									img: 'point.png',
									text: 'Estrategia y planificación: La Guardia Urbana Municipal tiene la responsabilidad de liderar y dirigir la organización, así como de formular políticas globales de actuación para cumplir con su misión. Esto implica diseñar y elaborar estrategias de intervención basadas en un diagnóstico de la seguridad local. A partir de este diagnóstico, se planifican actividades, operativos y servicios en coordinación con las áreas involucradas, asegurando la asignación adecuada de los recursos necesarios. Es a través de esta planificación estratégica y la ejecución efectiva de las acciones que la Guardia Urbana Municipal busca promover condiciones de seguridad y convivencia urbana en beneficio de la comunidad.',
								},

								{
									img: 'point.png',
									text: 'Operativa: Ejercer el poder de policía municipal a través de la organización y ejecución de procedimientos, operativos y rutinas en la vía pública.',
								},

								{
									img: 'point.png',
									text: 'De control: Analizar y evaluar la gestión de cada una de las áreas que compone la organización verificando que ese accionar responda a los procedimientos establecidos y a las disposiciones normativas internas y externas vigentes, garantizando transparencia y calidad.',
								},

								{
									title: 'Logística y administración: La Guardia Urbana Municipal tiene la responsabilidad de brindar una serie de servicios que facilitan y promueven un mejor cumplimiento de su misión. Entre estos servicios se pueden mencionar:',
									descriptions: [
										'Asesoría letrada: Proporcionar asesoramiento legal y jurídico para asegurar que las acciones de la Guardia Urbana Municipal se realicen en cumplimiento de las leyes y normativas vigentes.',
										'Comunicación institucional: Desarrollar estrategias de comunicación efectivas para informar a la comunidad sobre las acciones y servicios de la Guardia Urbana Municipal, promoviendo la transparencia y la confianza.',
										'Recursos humanos: Gestionar y desarrollar el personal de la Guardia Urbana Municipal, asegurando la capacitación adecuada, el bienestar laboral y la eficiencia en el desempeño de sus funciones.',
										'Infraestructura y equipamiento: Garantizar la disponibilidad de infraestructura adecuada y equipamiento necesario para que los miembros de la Guardia Urbana Municipal realicen sus tareas de manera eficiente y segura.',
										'Administración: Llevar a cabo tareas administrativas como la gestión de presupuesto, adquisición de recursos y el registro de datos necesarios para el funcionamiento eficaz de la organización.',
									],
								},
								{
									img: 'point.png',
									text: 'Cuidar el mantenimiento del orden público en el territorio del municipio con el objeto de salvaguardar la seguridad de las personas, sus patrimonios y sus derechos.',
								},

								{
									img: 'point.png',
									text: 'Disuadir toda acción, sea individual o grupal que implique o conlleve a una trasgresión de la normativa o del deber ser.',
								},

								{
									img: 'point.png',
									text: 'Aplicar y hacer cumplir la normativa vigente, en todo aquello que sea pertinente a la esfera de competencias municipales, al presentarse conductas que atenten contra la seguridad de las personas y/o bienes.',
								},

								{
									img: 'point.png',
									text: 'Garantizar el cumplimiento de las pautas de conducta establecidas, utilizando a tal fin los medios más adecuados en consideración de cada caso en particular, tales como: educación, disuasión, persuasión, mediación, labrado de actas, secuestro de objetos, clausuras preventivas. ',
								},

								{
									img: 'point.png',
									text: 'Detectar la existencia de zonas o situaciones críticas que permitan la comisión de hechos que hagan peligrar la paz social.',
								},

								{
									img: 'point.png',
									text: 'Interactuar con otros organismos, ya sean públicos o privados, en la atención y resolución de situaciones conflictivas y/o de emergencia.',
								},

								{
									img: 'point.png',
									text: 'Asistir a los lugares de afluencia masiva de público con el objetivo de ordenar, prevenir disturbios y mantener las condiciones de convivencia. ',
								},

								{
									img: 'point.png',
									text: 'Ante el acaecimiento de un conflicto, actuar sobre la base de los procedimientos preestablecidos para cada caso y establecer comunicaciones con aquellas reparticiones o áreas que se consideren necesarias. ',
								},

								{
									img: 'point.png',
									text: 'Proteger los bienes y espacios de dominio municipal, sean estos públicos y/o privados, de posibles agresiones y/o deterioros. ',
								},

								{
									img: 'point.png',
									text: 'Velar por la seguridad pública en los espacios comunes de recreación y esparcimiento.',
								},

								{
									img: 'point.png',
									text: 'Ante la comisión de un hecho ilícito, y sin perjuicio de las facultades otorgadas por la legislación vigente, dar inmediato aviso a las autoridades pertinentes y/o requerir el auxilio de la fuerza pública. ',
								},

								{
									img: 'point.png',
									text: 'Labrar las actas pertinentes en caso de detectarse prácticas riesgosas en la vía pública o con características de peligrosidad que constituyan faltas y/o contravenciones tipificadas en el Código de Faltas y otra normativa municipal. ',
								},

								{
									img: 'point.png',
									text: 'Secuestrar objetos y/o vehículos utilizados para la comisión de faltas o contravenciones en cumplimiento de órdenes de la autoridad competente. ',
								},

								{
									img: 'point.png',
									text: 'Efectivizar clausuras. ',
								},

								{
									img: 'point.png',
									text: 'Proporcionar apoyo a todo operativo de otras áreas municipales con el fin de hacer efectivo el poder de policía municipal. ',
								},

								{
									img: 'point.png',
									text: 'Denunciar ante la autoridad competente los hechos ilícitos presuntamente configurativos de delitos y/o contravenciones del que tomare conocimiento. ',
								},

							],
						},

						{
							title: 'Ojos en Alerta',
							descriptions: [
								'Los municipios, por su proximidad física con el problema de inseguridad, son los primeros capacitados para hacerle frente a esta problemática. Más allá de que la seguridad no es responsabilidad estricta del municipio, los ciudadanos han ido desplazando informalmente la responsabilidad hasta el escritorio local, por lo que alguien debe dar respuesta, rápida y eficaz. El potencial de respuesta de la municipalidad es enorme, y está siendo utilizado mínimamente.',
								'Ojos en Alerta es un programa de seguridad ciudadana diseñado para luchar contra el delito desde el celular. Se trata de una iniciativa colaborativa que involucra a todos para ser parte de la solución. Ya fue implementado en 17 municipios, en 5 provincias distintas, con numerosos casos de éxito. Es un sistema de prevención en materia de seguridad que permite dar aviso de manera rápida, eficaz y confiable de toda situación que requiera la asistencia inmediata de las fuerzas de seguridad, del sistema de emergencias médicas, de los bomberos, de los agentes de tránsito o de defensa civil. Este programa funcionaría en colaboración con la Guardia Urbana Municipal, mencionada más arriba. La obtención de datos en tiempo real permite prever e identificar factores de riesgo, e informar con rapidez al organismo pertinente.',
								'Con este programa en tiempo real se lograría cambiar el paradigma, involucrando activamente a la comunidad en la detección y combate del delito local. Centralizaríamos todas las situaciones de inseguridad para analizarlas y poder actuar en consecuencia, ya que toda la información sería recibida por el Centro de Operaciones y Monitoreo, a cargo de la Secretaría de Seguridad del Municipio.',
								'La labor tanto de la policía como de la GUM se verían facilitadas ya que con esta aplicación pueden identificarse zonas calientes, optimizando los esfuerzos y recursos disponibles en las tareas de prevención. Además, se podrían obtener datos estadísticos fidedignos que permitan realizar un plan estratégico de seguridad y prevención del delito, mejorando la toma de decisiones y la utilización de recursos.',
								'Este programa funciona a través de la mensajería instantánea WhatsApp, una herramienta masiva que la mayor parte de la población utiliza diariamente. Esto minimiza los costos de programación y de compra de Software. También facilita su difusión, dada la masividad de la aplicación, y el uso cotidiano de esta. Es una plataforma gratuita que casi no consume datos móviles. No es necesario un gasto extraordinario para implementarlo, y el costo operativo sería el destinado a la policía y a la GUM, en el Centro de Operaciones y Monitoreo.',
								'Se utilizarían las cámaras de videovigilancia ya implementadas en la ciudad, por lo que ese costo es nulo, y se recibirán las alertas desde el centro de operaciones. Funcionaría los 365 días del año, las 24 horas. El operador está capacitado para recibir la alerta y analizar la situación, y en muchos casos, estaría a bordo de un vehículo oficial, en compañía de un efectivo.',
								{
									img: 'point.png',
									text: 'Implementar un programa de seguridad ciudadana diseñado para aportar al accionar contra el delito desde el celular “Ojos en Alerta”, de participación activa y voluntaria de la comunidad, diseñado para aportar contra el delito desde el celular. Los hechos a informar en tiempo real a las fuerzas de seguridad son por emergencias, disturbios, inseguridad, prevención de accidentes y puntos de venta de droga. ',
								},

								{
									img: 'point.png',
									text: 'Desarrollar en paralelo, un Centro de Operaciones y Monitoreo a cargo de la Secretaría de Seguridad del Municipio.',
								},

								{
									img: 'point.png',
									text: 'Dentro del presupuesto anual del área competente, se creará la partida presupuestaria correspondiente y adecuaciones necesarias para atender los requerimientos para la realización del Programa. ',
								},

								{
									img: 'point.png',
									text: 'Para su implementación, el Estado Municipal deberá adaptar una página web municipal como soporte informativo y difundir todas y cada una de las herramientas dispuestas en el programa a través de su página web, redes sociales oficiales, medios de comunicación radiales, gráficos y/o televisivos con los cuales se tenga contratada pauta publicitaria.',
								},

							],
						}
					]
				},

				{
					name: 'Mejorar las condiciones del basural a cielo abierto',
					img: 'basura2.png',
					descriptions: [
						'Nuestra propuesta se basa en hacer frente al problema del basural a cielo abierto con la implementación de prácticas de reciclaje y la creación de una economía circular.',
					],
					propuestas: [

						{
							title: 'Reciclaje y gestión de residuos:',
							descriptions: [
								'Promoveremos activamente el reciclaje como una solución sostenible para la gestión de residuos. Implementaremos programas de separación en la fuente y estableceremos puntos de recolección selectiva en toda la ciudad. Asimismo, fomentaremos la educación y concientización ciudadana sobre la importancia del reciclaje y sus beneficios ambientales.'
							],
						},

						{
							title: 'Creación de una economía circular:',
							descriptions: [
								'Buscaremos transformar los residuos reciclables en recursos valiosos a través de la implementación de una economía circular. Esto implica fomentar la creación de empresas y emprendimientos que utilicen los materiales reciclados como materia prima para la producción de nuevos productos. Además, incentivaremos la compra y el consumo de productos reciclados en nuestra comunidad, generando un círculo virtuoso de producción y consumo sostenible.'
							],
						},

						{
							title: 'Generación de empleo y oportunidades económicas:',
							descriptions: [
								'La implementación de prácticas de reciclaje y economía circular creará nuevas oportunidades de empleo en Gualeguay. Impulsaremos la capacitación y formación profesional en áreas relacionadas con el reciclaje, la gestión de residuos y la producción sostenible. Asimismo, apoyaremos el establecimiento de cooperativas y microempresas dedicadas al reciclaje y la reutilización de materiales, generando así una economía local más resiliente y sostenible.'
							],
						},

						{
							title: 'Educación y concientización:',
							descriptions: [
								'Promoveremos programas educativos y de concientización sobre la importancia de la limpieza, el reciclaje y la economía circular. Trabajaremos en conjunto con instituciones educativas, organizaciones comunitarias y medios de comunicación para difundir información y promover cambios de comportamiento hacia prácticas más sostenibles.',
								'El problema del basural a cielo abierto de Gualeguay es un desaİo que debemos enfrentar con determinación y compromiso. Esta propuesta nos brinda la oportunidad de transformar nuestro entorno, proteger el medio ambiente y generar una economía más sostenible.' 
							],
						},
					]
				},

				{
					name: 'Educación',
					img: 'universidad2.png', 
					descriptions: [
						'En nuestro país según la Ley Nacional de Educación Nro. 26.206 la educación obligatoria es hasta el Nivel Secundario, pero aun así el porcentaje de abandono escolar es notorio, principalmente en el nivel medio o secundario que se evidencia un importante descenso de la matrícula por curso, desde los primeros años a los últimos.',
					],
					propuestas: [
						{
							title: 'Propuesta de Educación',
							descriptions: [
								'En nuestro país, según la Ley Nacional de Educación N°26.206, la educación obligatoria es hasta el nivel secundario, pero aun así el porcentaje de deserción escolar es notorio. Este fenómeno se evidencia principalmente en el nivel medio o secundario con un importante descenso de la matrícula por curso, desde los primeros años a los últimos.',
								'Para ello, el municipio se pondrá a disposición de la Departamental de Escuelas para llevar a cabo un trabajo conjunto, y así velar porque nuestras escuelas respondan correctamente al voto de confianza de las familias, y a las inquietudes y expectativas de nuestros estudiantes.',
								'Nuestra ciudad cuenta con un número amplio de Escuelas en sus distintos niveles primario, secundario y terciario o superior. Cada una de ellas presentan diferentes situaciones o falencias que desde la gestión municipal pueden mitigarse y, en algunos casos, generar cambios significativos en los mismos.',
								'Como asumimos una responsabilidad sin excusas, ni peros, mucho menos limitadas por jurisdicciones, nos proponemos apuntalar la educación con una presencia concreta y efectiva al lado de las familias a lo largo de todo el desarrollo de nuestros gurises.',
								'Sin perjuicio de ello, y para contribuir a que los chicos terminen la escuela más preparados, proponemos:',
								{
									img: 'point.png',
									text: 'Fortalecimiento de programas que permitan el acceso a precios diferenciados en material de estudio (libros, útiles escolares, fotocopias, etc.)',
								},
								{
									img: 'point.png',
									text: 'Mayor acompañamiento de centros de salud para la prevención temprana de embarazos no deseados, dar a conocer métodos de anticoncepción y la posibilidad de retiro gratuito de los mismos, a través de charlas informativas en las diferentes escuelas de nuestra ciudad.',
								},
								{
									img: 'point.png',
									text: 'Ampliación de los horarios de jardines maternales. Nuestra ciudad cuenta con alrededor de 15 jardines maternales que funcionan en diferentes puntos en los turnos mañana y tarde. Estos albergan un número importante de niños entre los 45 días y 5 años. Sin embargo, solo existe una opción de jardín en el horario de la noche de 19.30 a 23 para los padres y madres que desean finalizar su educación secundaria en los ESA (Educación Secundaria de Adultos) y no cuentan con la posibilidad del cuidado de los menores durante la jornada escolar. Es imperante reforzar ese horario generando nuevos acuerdos con diferentes instituciones intermedias para brindar mayor cupo en dicho horario y más próximo a las viviendas de los niños.',
								},
								{
									img: 'point.png',
									text: 'Brindar apoyo escolar primario y secundario en todas las áreas y asignaturas.',
								},
								{
									img: 'point.png',
									text: 'Crear un sistema de becas municipales para el estudio de Idiomas en todos los niveles educativos, logrando así una equidad en el acceso a las oportunidades.',
								},
								{
									img: 'point.png',
									text: 'Gestionar la inclusión de la historia local como materia extracurricular y la alentaremos con premios, fomentando la puesta en valor de la arquitectura colonial y monumentos que nuestra ciudad posee.',
								},
								{
									img: 'point.png',
									text: 'Gestionar la incorporación de nuevas carreras terciarias y universitarias. (UADER, UNER)',
								},
								{
									img: 'point.png',
									text: 'Implementar la formación en oficios según la demanda laboral.',
								},
								{
									img: 'point.png',
									text: 'Crear un sistema de becas y padrinazgos para estudiantes que quieran estudiar en otras ciudades.',
								},
								{
									img: 'point.png',
									text: 'Gestionar el padrinazgo de escuelas según Res Nro. 488 CGE.',
								},
								{
									img: 'point.png',
									text: 'Crear un sistema de premios para egresados del primario y del secundario.',
								},
								'De esta manera lograr un acceso equitativo a todos los estudiantes de nuestra ciudad al sistema educativo sin importar la situación económica o de vulnerabilidad de las familias, como así también atender las necesidades que poseen los niveles de Educación de Adultos, fomentando la culminación de sus estudios secundarios y la inserción laboral rápida a través de la capacitación de calidad en diferentes oficios.',
							],	
						}, 
					]
				},
				{
					name: 'Transporte entre Gualeguay y Galarza',
					img: 'transporte1.png',
					descriptions: [
						'Esta iniciativa tiene como objetivo principal facilitar la movilidad de los residentes de ambas ciudades, promover la integración regional y reducir la dependencia del transporte privado.',
					],
					propuestas: [
						{
							title: 'Estudio de viabilidad:',
							descriptions: [
								'Realizaremos un estudio exhaustivo de viabilidad para evaluar la demanda de transporte entre Gualeguay y Galarza y los horarios óptimos de dicho trayecto. Este estudio considerará factores como la densidad poblacional, los flujos de tráfico y las necesidades de transporte de los ciudadanos.',
							],
						},

						{
							title: 'Diseño de la red de transporte:',
							descriptions: [
								'Con base en los resultados del estudio de viabilidad, diseñaremos una red de transporte público que conecte de manera eficiente y directa los puntos clave de ambas ciudades. Esto incluirá la determinación de las paradas estratégicas, los recorridos y la frecuencia de los servicios.',
							],
						},


						{
							title: 'Vehículos adecuados:',
							descriptions: [
								'Para garantizar un servicio de calidad, buscaremos una flota de vehículos adecuada para el transporte público. Estos vehículos estarán equipados con todas las comodidades, cumpliendo con todos los estándares de seguridad y accesibilidad para personas con movilidad reducida.',
							],
						},


						{
							title: 'Tarifas asequibles y sistema de pago:',
							descriptions: [
								'Estableceremos tarifas de transporte público asequibles para garantizar que todos los ciudadanos puedan acceder al servicio. Además, implementaremos un sistema de pago conveniente, que permita el uso de tarjetas de transporte recargables y la integración con otros medios de pago electrónicos.',
							],
						},


						{
							title: 'Horarios convenientes:',
							descriptions: [
								'Aseguraremos que los horarios de los servicios de transporte público sean convenientes y se adapten a las necesidades de los usuarios y no al revés. Se considerarán los horarios de trabajo, de estudio y de actividades recreativas para garantizar una cobertura adecuada.',
							],
						},


						{	
							title: 'Infraestructura adecuada',
							descriptions: [
								'Mejoraremos la infraestructura necesaria para el transporte público, incluyendo paradas de autobuses, estaciones de transferencia y áreas de estacionamiento seguro en ambos extremos del recorrido. Además, se implementarán medidas para garantizar la seguridad de los usuarios en todas las etapas del viaje.',
							],
						},


						{
							title: 'Promoción y concientización:',
							descriptions: [
								'Informar a los ciudadanos sobre los beneficios del transporte público, fomentar su uso y educar sobre la importancia de reducir el tráfico y las emisiones de carbono.'
							],
						},


						{
							title: 'Monitoreo y mejora continua:',
							descriptions: [
								'Estableceremos un sistema de monitoreo y evaluación constante para recopilar datos sobre la demanda, la satisfacción de los usuarios y la eficiencia del servicio. Con base en estos datos, implementaremos mejoras continuas en el sistema de transporte público para garantizar su calidad y adaptabilidad a las necesidades cambiantes de la comunidad.',
								'Confiamos en que este proyecto de transporte público entre Gualeguay y Galarza se convertirá en una opción confiable, eficiente y sostenible para los ciudadanos.',
							],
						},

					]
				},
				
				// {
				// 	name: 'Atención a escuelas rurales',
				// 	img: 'atencion1.png',
				// 	descriptions: [
				// 		'Esta propuesta está dirigida a quienes desempeñan un papel esencial en la construcción de un futuro brillante. Los invito a unirse a este proyecto que impactará positivamente en la vida de nuestros estudiantes rurales',
				// 	],
				// 	propuestas: [
				// 		{

				// 			title: 'Desarrollo:',
				// 			descriptions: [
				// 				'Nuestra propuesta se basa en el compromiso de mejorar la educación en las escuelas rurales de Gualeguay, y se enfoca en los siguientes aspectos fundamentales:'
				// 			],
				// 		},

				// 		{

				// 			title: 'Acceso equitativo a la educación:',
				// 			descriptions: [
				// 				'Creemos firmemente en la igualdad de oportunidades para todos los estudiantes, independientemente de su ubicación geográfica. Nuestra propuesta se centra en garantizar un acceso equitativo a una educación de calidad para los estudiantes de las escuelas rurales de Gualeguay. Esto implica proporcionar recursos educativos adecuados, infraestructuras mejoradas y programas de apoyo para fomentar el desarrollo académico y personal de nuestros estudiantes.'
				// 			],
				// 		},

				// 		{

				// 			title: 'Fortalecimiento de la calidad educativa:',
				// 			descriptions: [
				// 				'Nos comprometemos a mejorar la calidad educativa en las escuelas rurales de Gualeguay. Esto implica brindar capacitación continua a los docentes, ofrecer recursos pedagógicos actualizados y fomentar la implementación de métodos de enseñanza innovadores. Además, promoveremos la colaboración entre las escuelas rurales y otras instituciones educativas para facilitar el intercambio de conocimientos y experiencias.'
				// 			],
				// 		},

				// 		{

				// 			title: 'Integración comunitaria:',
				// 			descriptions: [
				// 				'Reconocemos la importancia de la participación de la comunidad en el desarrollo de la educación rural. Nuestra propuesta promoverá la colaboración entre las escuelas rurales, las organizaciones locales y los actores comunitarios. Juntos, trabajaremos para establecer alianzas estratégicas que permitan el intercambio de recursos, la participación de voluntarios y la creación de programas extracurriculares en beneficio de nuestros estudiantes rurales.',
				// 				'La educación es el pilar fundamental para el progreso de una comunidad. Podemos hacer una diferencia significativa en la vida de nuestros estudiantes rurales y en el desarrollo de Gualeguay. Trabajemos juntos para construir un futuro prometedor, donde cada estudiante tenga acceso a una educación de calidad y de oportunidades.'
				// 			],
				// 		},

				// 	]
				// },

				{
					name: 'Transporte Interurbano',
					img: 'transporte3.png',
					descriptions: [
						'Nuestra propuesta se basa en el desarrollo de un sistema de transporte interurbano inclusivo que tenga en cuenta las necesidades de movilidad de los ciudadanos de Gualeguay.',
					],
					propuestas: [

						{
							title: 'Cobertura de barrios:', 
							descriptions: [
								'Nos comprometemos a diseñar un plan integral que garantice la cobertura de todos los barrios de Gualeguay. Esto implica la identificación de rutas estratégicas que conecten los diferentes sectores de la ciudad, asegurando que ningún barrio se encuentre aislado en términos de transporte público. Nuestro objetivo es proporcionar a todos los ciudadanos un acceso equitativo a los servicios y oportunidades que Gualeguay ofrece.',
								'Con respecto a los vehículos que se pueden utilizar. Minibús o Combis. Por qué? Porque son más dinámicos, más ágiles para las calles angostas del centro, más económicos; con el gasto que genera 1 solo colectivo de los grandes (los que vemos circular hoy en día), podemos financiar  3 Combis o minibús! Además tanto las cubiertas como los respuestos son más baratos, y sobre todo, lograremos tener más frecuencias!',
							],
						},


						{
							title: 'Horarios flexibles:', 
							descriptions: [
								'Reconocemos la importancia de adaptar el transporte a las necesidades y rutinas diarias de nuestros ciudadanos. Por lo tanto, proponemos establecer horarios flexibles que cubran las horas pico de mayor demanda y también tengan en cuenta los horarios de trabajo, estudio y otras actividades de los residentes de Gualeguay. Esto permitirá una mayor comodidad y eficiencia en el desplazamiento de los ciudadanos dentro de la ciudad.',
								'El transporte interurbano inclusivo es un elemento clave para el desarrollo y la calidad de vida en Gualeguay. Con esta propuesta, buscamos construir un sistema de transporte eficiente, accesible y que responda a las necesidades de todos los ciudadanos. Juntos, podemos lograr una Gualeguay más conectada, dinámica y equitativa.'
							],
						},

					]
				},
			]
		}
	}
}